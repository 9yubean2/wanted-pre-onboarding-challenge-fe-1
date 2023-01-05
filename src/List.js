import React from 'react'
import ListItem from "./ListItem"
import { useState,Fragment,useEffect } from "react";
import {Modal} from "flowbite-react";
import axios from "axios";


function List({setDetailTodo,setSearchParams}) {

    //const [searchParams, setSearchParams]=useSearchParams();

    const [open, setOpen] = useState(false);
    const [addTodo, setAddTodo] = useState('');
    const [detail, setDetail] = useState('');
    const [todoList,setTodoList]=useState([]);
    useEffect(() => {
        //console.log(cookies);
        axios.get(`http://localhost:8080/todos`,{
            headers: {
                Authorization: localStorage.token
            }
        }).then((res)=>{
            setTodoList(res.data.data)
            //console.log(res);
        }).catch((err) => {
            //console.log(err);
        }); 
    },[setTodoList]);
    
    const btnOpenAdd=()=>{
        setOpen(!open);
        setAddTodo('')
        setDetail('')
    }

    const inputTodo=(e)=>{
        setAddTodo(e.target.value);
    }

    const inputDetail=(e)=>{
        //console.log(e.target.value);
        setDetail(e.target.value)
    }


    const btnAdd=()=>{
        axios.post('http://localhost:8080/todos',{
            "title":`${addTodo}`,
            "content":`${detail}`
        },
        {headers:{
            Authorization: localStorage.token
        }}
        ).then((res)=>{
            //console.log(res);
            alert('Todo를 추가했어요!');
            
            axios.get(`http://localhost:8080/todos`,{
                headers: {
                    Authorization: localStorage.token
                }
            }).then((res)=>{
                setTodoList(res.data.data)
            }).catch((err) => {
                alert('예상치 못한 오류 발생!');
            });
            btnOpenAdd()
            
        }).catch((err)=>{
            alert('예상치 못한 오류 발생!');
        })
    }

    return (

        <div className="min-h-full flex flex-col w-full h-full px-3 bg-[#ffffff] z-0  border-r-[1px] border-[#A6A6A6]/[0.2] ">
            <ul>
                {
                    todoList.map((item)=>(
                        <ListItem key={item.id} item={item} setTodoList={setTodoList} setDetailTodo={setDetailTodo} setSearchParams={setSearchParams}/>
                    ))
                }
                <li className="flex items-center py-3">
                    
                    <Fragment >
                        <button className="w-full align-middle p-1 rounded-[5px] bg-[#A3CEA7] text-[#00000] font-semibold text-[16px] cursor-pointer" onClick={btnOpenAdd} >+ Todo 추가하기</button>
                        
                        <Modal show={open} size="lg" popup={true} onClose={btnOpenAdd}>
                            <Modal.Header/>
                            <Modal.Body>
                                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 ">
                                    <h3 className="text-xl font-medium text-gray-900">✅ Todo 추가하기</h3>
                                    <input type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-[#A6A6A6] focus:ring-0 focus:border-[#A3CEA7]" placeholder="할 일" onChange={inputTodo} value={addTodo}/>
                                    <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-[#A6A6A6] focus:ring-0 focus:border-[#A3CEA7]" rows="2" placeholder="상세설명" onChange={inputDetail} value={detail}></textarea>

                                    <div className="flex justify-end">
                                        <button className="py-[5px] px-3 rounded-[3px] border-[1px] border-[#A6A6A6] bg-[#ffffff] text-[#000000] font-semibold text-[14px] cursor-pointer" onClick={btnOpenAdd}> 취소</button>
                                        <button className="ml-3 py-[6px] px-3 rounded-[3px] bg-[#A3CEA7] text-[#000000] font-semibold text-[14px] cursor-pointer" onClick={btnAdd}>+ 추가하기</button>
                                    </div>
                                </div>
                                
                            </Modal.Body>
                        </Modal>
                    </Fragment>
                </li>
            </ul>
        </div>
    )
}

export default React.memo(List)