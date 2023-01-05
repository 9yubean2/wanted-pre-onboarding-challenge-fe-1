import React from 'react'

export default function Detail({detailTodo}) {

    return (
        <div className="col-span-2 p-3">
            <p className="self-center text-[22px] font-semibold whitespace-nowrap">✅ {detailTodo.title}</p>
            <div className="flex py-3 items-center justify-between">
                <span className="text-[#A6A6A6] text-[16px] cursor-default">생성일 | {detailTodo.createdAt}</span>
                <span className="text-[#A6A6A6] text-[16px] cursor-default">생성일 | {detailTodo.updatedAt}</span>
            </div>                    
            
            <hr className="mb-3 border-[#A6A6A6] lg:mb-3"/>
            <span className="block text-sm text-[19px] font-suit cursor-default">{detailTodo.content}</span>
        </div>
    )
}
