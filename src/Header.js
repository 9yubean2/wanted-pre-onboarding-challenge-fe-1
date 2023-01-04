import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    const btnLogout = () => {
        if (window.confirm('로그아웃하시겠습니까?')) {
            localStorage.clear();
            navigate('/auth');
        }
    }

    return (
        <nav className="bg-white drop-shadow-[4px_2px_2px_rgba(0,0,0,0.11)] z-40">
                <div className="mx-auto max-w-full px-4 sm:px-6 md:px-6 lg:px-10 xl:px-10 2xl:px-10">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="items-center flex flex-shrink-0 cursor-pointer select-none" >
                                <p className="text-[#000000] font-suit font-bold text-[26px] mx-3 sm:mx-3">✅ Todos</p>
                            </div>
                        </div>
                    
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button className="py-[6px] px-3 rounded-[3px] bg-[#A3CEA7] text-[#000000] font-semibold text-[14px] cursor-pointer" onClick={btnLogout}>로그아웃</button>
                            </div>
                        </div>

                        <div className="flex md:hidden">
                            <button className="py-[6px] px-3 rounded-[3px] bg-[#A3CEA7] text-[#000000] font-semibold text-[14px] cursor-pointer" onClick={btnLogout}>로그아웃</button>
                        </div>
                    </div>
                </div>
            </nav>
    )
}
