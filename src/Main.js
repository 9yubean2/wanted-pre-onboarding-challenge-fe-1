import {React,useState} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import List from "./List"
import Detail from "./Detail"
import { useSearchParams } from "react-router-dom";

export default function Main({navigate}) {
    
    const [detailTodo, setDetailTodo] = useState('');
    const [searchParams, setSearchParams]=useSearchParams();
    return (
        <div className="h-screen flex flex-col w-full">
            
            <Header/>
            
            <div className="grid grid-cols-3 flex-1">

                <List setDetailTodo={setDetailTodo} setSearchParams={setSearchParams}/>                

                {/* <Detail detailTodo={detailTodo}/> */}
                <Detail detailTodo={detailTodo} setDetailTodo={setDetailTodo} searchParams={searchParams} setSearchParams={setSearchParams}/>
                {/* <Routes>
                    <Route path="detail/:id" element={<Detail detailTodo={detailTodo} setDetailTodo={setDetailTodo} searchParams={searchParams} setSearchParams={setSearchParams}/>}/>
                </Routes> */}
            
            </div>
            
            <Footer/>
        </div>
    )
}