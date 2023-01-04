import React from 'react';

function ListItem({item}) {

    
    const btnEdit = () => {

    }


    const btnDelete = () => {
        
    }

    const btnDetail = () => {
        
    }

    return (
        <li id={item.id} className="flex items-center align-middle justify-between py-3">
            <div>
                <input type="checkbox" className="rounded bg-white/0 border-[#767676] border-[2px]
                focus:border-[#A6A6A6] focus:bg-white/0 text-[#A3CEA7] focus:ring-1 focus:ring-offset-2 focus:ring-[#A3CEA7]/[0.5]"/>
                <span className="ml-5 align-middle text-[18px] cursor-pointer" onClick={btnDetail}>{item.title}</span>
            </div>                                
            
            <div>
                <button className="align-middle py-1 px-3 text-[#6E9DC9] font-semibold text-[14px] cursor-pointer" onClick={btnEdit}>수정</button>
                <button className="align-middle py-1 px-3 rounded-[9px] bg-[#EC7A7A] text-[#ffffff] font-semibold text-[14px] cursor-pointer" onClick={btnDelete}>삭제</button>
            </div>                            
        </li>
    )
}
export default React.memo(ListItem)