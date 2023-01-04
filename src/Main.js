import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import List from "./List"

export default function Main() {

    return (
        <div className="h-screen flex flex-col w-full">
            <Header/>
            
            <div className="grid grid-cols-3 flex-1">

                <List/>                

                <div className="col-span-2 bg-indigo-500">

                </div>
            </div>
            
            <Footer/>
        </div>
    )
}