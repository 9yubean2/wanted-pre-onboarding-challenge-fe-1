import React from 'react'
import ListItem from "./ListItem"
import { useState,Fragment } from "react";
import {Modal} from "flowbite-react";

export default function List() {

    const [open, setOpen] = useState(false);
    const btnOpenAdd=()=>{
        setOpen(!open);
        
    }

    const btnAdd=()=>{
        
        
    }
    return (

        <div className="min-h-full flex flex-col w-full h-full px-3 bg-[#ffffff] z-0  border-r-[1px] border-[#A6A6A6]/[0.2] ">
            <ul>
                <ListItem/>
                        
                <li className="flex items-center py-3">
                    
                    <Fragment >
                        <button className="w-full align-middle p-1 rounded-[5px] bg-[#A3CEA7] text-[#00000] font-semibold text-[16px] cursor-pointer" onClick={btnOpenAdd} >+ Todo 추가하기</button>
                        
                        <Modal show={open} size="lg" popup={true} onClose={btnOpenAdd}>
                            <Modal.Header/>
                            <Modal.Body>
                                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 ">
                                    <h3 className="text-xl font-medium text-gray-900">✅ Todo 추가하기</h3>
                                    <input type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-[#A6A6A6] focus:ring-0 focus:border-[#A3CEA7]" placeholder="할 일"/>
                                    <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-[#A6A6A6] focus:ring-0 focus:border-[#A3CEA7]" rows="2" placeholder="상세설명"></textarea>

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
