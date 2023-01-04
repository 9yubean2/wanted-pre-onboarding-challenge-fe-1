import React from 'react'
import Header from "./Header"
import Footer from "./Footer"

export default function Main() {

    return (
        <div className="h-screen flex flex-col w-full bg-slate-500">
            <Header/>
            
            <div className="grid grid-cols-3 flex-1">
                <div className="min-h-full flex flex-col w-full h-full bg-red-200">
                    <ul>
                        <li className="flex items-center justify-between py-3">
                            <div>
                                <input type="checkbox" />
                                <span className="ml-5 align-middle">할 일 1</span>
                            </div>                                
                            <div>
                                <button className="align-middle py-1 px-3 text-[#6E9DC9] font-semibold text-[14px] cursor-pointer" >수정</button>
                                <button className="align-middle py-1 px-3 rounded-[9px] bg-[#EC7A7A] text-[#ffffff] font-semibold text-[14px] cursor-pointer" >삭제</button>
                            </div>                            
                        </li>
                    </ul>
                </div>

                <div className="col-span-2 bg-indigo-500">

                </div>
            </div>
            
            <Footer/>
        </div>
    )
}