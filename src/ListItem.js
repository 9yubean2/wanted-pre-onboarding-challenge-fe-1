import React from 'react'

export default function ListItem() {
    return (
        <li className="flex items-center align-middle justify-between py-3">
            <div>
                <input type="checkbox" />
                <span className="ml-5 align-middle text-[18px]">할 일 1</span>
            </div>                                
            
            <div>
                <button className="align-middle py-1 px-3 text-[#6E9DC9] font-semibold text-[14px] cursor-pointer" >수정</button>
                <button className="align-middle py-1 px-3 rounded-[9px] bg-[#EC7A7A] text-[#ffffff] font-semibold text-[14px] cursor-pointer" >삭제</button>
            </div>                            
        </li>
    )
}
