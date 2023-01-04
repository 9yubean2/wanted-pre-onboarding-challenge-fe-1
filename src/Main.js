import {React} from 'react'
import Header from "./Header"
import Footer from "./Footer"
import List from "./List"
import Detail from "./Detail"


export default function Main({navigate}) {


    return (
        <div className="h-screen flex flex-col w-full">
            
            <Header/>
            
            <div className="grid grid-cols-3 flex-1">

                <List/>                

                <Detail/>
            
            </div>
            
            <Footer/>
        </div>
    )
}