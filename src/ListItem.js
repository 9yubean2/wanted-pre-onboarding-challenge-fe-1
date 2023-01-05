import axios from "axios";
import { React, useState,Fragment } from "react";
import {Modal} from "flowbite-react";


function ListItem({item,setTodoList,setDetailTodo,setSearchParams}) {

    const [openEdit, setOpenEdit] = useState(false);
    
    const [editTodo, setEditTodo] = useState('');
    const [editDetail, setEditDetail] = useState('');

    const btnOpenEdit = () => {
        setOpenEdit(!openEdit);
    }

    const inputEditTodo=(e)=>{
        setEditTodo(e.target.value);
    }

    const inputEditDetail=(e)=>{
        //console.log(e.target.value);
        setEditDetail(e.target.value)
    }

    const btnEdit = (id) => {
        axios.put(`http://localhost:8080/todos/${id}`,{
            "title":`${editTodo}`,
            "content":`${editDetail}`
        },
        {headers:{
            Authorization: localStorage.token
        }}
        ).then((res)=>{
            //console.log(res);
            alert('Todo를 수정했어요!');
            
            axios.get(`http://localhost:8080/todos`,{
                headers: {
                    Authorization: localStorage.token
                }
            }).then((res)=>{
                setTodoList(res.data.data)
            }).catch((err) => {
                alert('예상치 못한 오류 발생!');
            });
            btnOpenEdit()
            
        }).catch((err)=>{
            alert('예상치 못한 오류 발생!');
        })
    }
    const btnDelete = (id) => {
        axios.delete(`http://localhost:8080/todos/${id}`,{
                headers: {
                    Authorization: localStorage.token
                }
            }).then((result)=>{
                alert('Todo를 삭제했어요!');
                axios.get(`http://localhost:8080/todos`,{
                headers: {
                    Authorization: localStorage.token
                }
            }).then((res)=>{
                setTodoList(res.data.data)
            }).catch((err) => {
                alert('예상치 못한 오류 발생!');
            });
            }).catch((error) => {
                alert('예상치 못한 오류 발생!');
            });
    }

    const btnDetail = (id) => {
        // axios.get(`http://localhost:8080/todos/${id}`,{
        //         headers: {
        //             Authorization: localStorage.token
        //         }
        //     }).then((res)=>{
        //         setDetailTodo(res.data.data)
        //         setSearchParams({id:`${id}`});
        //     }).catch((err) => {
        //         alert('예상치 못한 오류 발생!');
        //     });
        setSearchParams({id:`${id}`});
    }

    return (
        <li id={item.id} className="flex items-center align-middle justify-between py-3">
            <div>
                <input type="checkbox" className="rounded bg-white/0 border-[#767676] border-[2px]
                focus:border-[#A6A6A6] focus:bg-white/0 text-[#A3CEA7] focus:ring-1 focus:ring-offset-2 focus:ring-[#A3CEA7]/[0.5]"/>
                <span className="ml-5 align-middle text-[18px] cursor-pointer" onClick={()=>btnDetail(item.id)}>{item.title}</span>
            </div>                                
            
            <div>
                <Fragment >
                    <button className="align-middle py-1 px-3 text-[#6E9DC9] font-semibold text-[14px] cursor-pointer" onClick={btnOpenEdit}>수정</button>  
                        <Modal show={openEdit} size="lg" popup={true} onClose={btnOpenEdit}>
                            <Modal.Header/>
                            <Modal.Body>
                                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 ">
                                    <h3 className="text-xl font-medium text-gray-900">✅ Todo 추가하기</h3>
                                    <input type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-[#A6A6A6] focus:ring-0 focus:border-[#A3CEA7]" placeholder={item.title} onChange={inputEditTodo}/>
                                    <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-[#A6A6A6] focus:ring-0 focus:border-[#A3CEA7]" rows="2" placeholder={item.content} onChange={inputEditDetail} ></textarea>

                                    <div className="flex justify-end">
                                        <button className="py-[5px] px-3 rounded-[3px] border-[1px] border-[#A6A6A6] bg-[#ffffff] text-[#000000] font-semibold text-[14px] cursor-pointer" onClick={btnOpenEdit}> 취소</button>
                                        <button className="ml-3 py-[6px] px-3 rounded-[3px] bg-[#A3CEA7] text-[#000000] font-semibold text-[14px] cursor-pointer" onClick={()=>btnEdit(item.id)}>수정하기</button>
                                    </div>
                                </div>
                                
                            </Modal.Body>
                        </Modal>
                    </Fragment>
                <button className="align-middle py-1 px-3 rounded-[9px] bg-[#EC7A7A] text-[#ffffff] font-semibold text-[14px] cursor-pointer" onClick={()=>btnDelete(item.id)}>삭제</button>
            </div>                            
        </li>
    )
}

export default ListItem