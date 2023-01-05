import {React,useEffect} from 'react'
import axios from "axios";

export default function Detail({detailTodo,setDetailTodo,searchParams}) {
    
    useEffect(() => {
        if(searchParams.get('id')!==null){
            axios.get(`http://localhost:8080/todos/${searchParams.get('id')}`,{
            headers: {
                Authorization: localStorage.token
            }
        }).then((res)=>{
            setDetailTodo(res.data.data)
            //setSearchParams({id:`${id}`});
        }).catch((err) => {
            alert('예상치 못한 오류 발생!');
        });
        }
    },[searchParams,setDetailTodo]);
    
    return (
        <div className="col-span-2 p-3">
        {searchParams.get('id')?
            <div>
            <p className="self-center text-[22px] font-semibold whitespace-nowrap">✅ {detailTodo.title}</p>
            <div className="flex py-3 items-center justify-between">
                <span className="text-[#A6A6A6] text-[16px] cursor-default">생성일 | {detailTodo.createdAt}</span>
                <span className="text-[#A6A6A6] text-[16px] cursor-default">생성일 | {detailTodo.updatedAt}</span>
            </div>                    
            
            <hr className="mb-3 border-[#A6A6A6] lg:mb-3"/>
            <span className="block text-sm text-[19px] font-suit cursor-default">{detailTodo.content}</span>
            </div>
            :<></>
            }
        </div>
    )
}
