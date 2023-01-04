import React from 'react'
import ListItem from "./ListItem"

export default function List() {
    return (

        <div className="min-h-full flex flex-col w-full h-full px-3">
            <ul>
                <ListItem/>
                        
                <li className="flex items-center py-3">
                    <button className="w-full align-middle p-1 rounded-[5px] bg-[#A3CEA7] text-[#00000] font-semibold text-[16px] cursor-pointer" >+ Todo 추가하기</button>
                </li>
            </ul>
        </div>
    )
}
