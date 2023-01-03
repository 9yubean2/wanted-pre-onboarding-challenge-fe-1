import axios from "axios";
import React from 'react';
import {useNavigate} from "react-router-dom";
import { useState } from "react";

export default function Auth() {

    let navigate = useNavigate();

    const [authMode,setAuthMode]=useState(true);
    
    const [email,setEmail]=useState('');
    const [isEmail,setIsEmail]=useState(false);
    
    const [pw,setPw]=useState('');
    const [isPw,setIsPw]=useState(false);
    
    const btnAuth=()=>{
        setAuthMode(!authMode);
        setEmail('');
        setPw('');
        setIsEmail(false);
        setIsPw(false);
    }

    const btnLogin=()=>{
        alert(`Login! ${email},${pw}`);
        axios.post('http://localhost:8080/users/login',{
            "email":email,
            "password":pw
        }).then((res)=>{
            alert(res.data.message);
            localStorage.clear();
            localStorage.setItem('token', res.data.token);
            navigate("/");
        }).catch((err)=>{
            console.log(err)
        })
    }

    const btnSingup=()=>{
        axios.post('http://localhost:8080/users/create',{
            "email":email,
            "password":pw
        }).then((res)=>{
            alert(res.data.message);
            btnAuth();
        }).catch((err)=>{
            console.log(err)
        })
    }

    const inputEmail=(e)=>{
        //console.log(e.target.value);
        if(!(e.target.value.includes('@')&&e.target.value.includes('.'))) {
            setEmail(e.target.value);
            setIsEmail(false);
        }
        else {
            setEmail(e.target.value);
            setIsEmail(true);
        }
    }

    const inputPw=(e)=>{
        //console.log(e.target.value);
        if(!(e.target.value.length>=8)) {
            setPw(e.target.value);
            setIsPw(false);
        }
        else {
            setPw(e.target.value);
            setIsPw(true);
        }
    }

  return (
    <div className="grid grid-cols-3 min-h-screen flex flex-col w-full h-full content-center">
        <div className="place-self-center font-semibold text-[56px]">✅ Todos</div>
        <div className="col-span-2">
            <div className="m-[20px] px-[20px] py-[70px] border-[2px] border-[#DADADA]">
            {
            authMode
            ?
            <div>
                <span className="px-[10px] pt-[10px] font-semibold text-[32px] border-b-[4px] border-[#A3CEA7] text-center align-middle cursor-pointer" onClick={btnAuth}>로그인</span>
                <span className="px-[10px] pt-[10px] font-semibold text-[32px] text-[#A6A6A6] text-center align-middle cursor-pointer" onClick={btnAuth}>회원가입</span>
            </div>
            
            :
            <div>
                <span className="px-[10px] pt-[10px] font-semibold text-[32px] text-[#A6A6A6] text-center align-middle cursor-pointer" onClick={btnAuth}>로그인</span>
                <span className="px-[10px] pt-[10px] font-semibold text-[32px] border-b-[4px] border-[#A3CEA7] text-center align-middle cursor-pointer" onClick={btnAuth}>회원가입</span>
            </div>
            }    
                <form className="group relative">
                    <svg width="21" height="20" fill="currentColor" className="absolute left-1 top-1/2 -mt-2 text-[#A6A6A6] pointer-events-none group-focus-within:text-[#A3CEA7]" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.4751 0.039917H2.51503C1.41777 0.039917 0.529995 0.937672 0.529995 2.03493L0.52002 14.005C0.52002 15.1022 1.41777 16 2.51503 16H18.4751C19.5724 16 20.4701 15.1022 20.4701 14.005V2.03493C20.4701 0.937672 19.5724 0.039917 18.4751 0.039917ZM17.4776 14.005H3.51254C2.96391 14.005 2.51503 13.5561 2.51503 13.0075V4.02994L9.43772 8.35911C10.0861 8.76809 10.904 8.76809 11.5524 8.35911L18.4751 4.02994V13.0075C18.4751 13.5561 18.0262 14.005 17.4776 14.005ZM10.4951 7.02245L2.51503 2.03493H18.4751L10.4951 7.02245Z" />
                    </svg>
                    <input type="text" className="w-full my-[20px]  text-[16px] text-[#000000] leading-6 border-0 border-b-[2px] border-[#CACACA] bg-[#ffffff]/[0] 
                    placeholder:font-suit placeholder:font-medium placeholder:text-[16px]  pl-10 placeholder:text-[#767676]
                    focus:border-b-[2px] focus:border-[#A3CEA7] focus:ring-0" placeholder="이메일" onChange={inputEmail} value={email}/>
                </form>
                <form className="group relative">
                    <svg width="21" height="20" fill="currentColor" className="absolute left-2 top-1/2 -mt-2 text-[#A6A6A6] pointer-events-none group-focus-within:text-[#A3CEA7]" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.8267 6.91333H12.839V4.93809C12.839 2.21227 10.6268 0 7.90095 0C5.17512 0 2.96286 2.21227 2.96286 4.93809V6.91333H1.97524C0.888857 6.91333 0 7.80219 0 8.88857V18.7648C0 19.8511 0.888857 20.74 1.97524 20.74H13.8267C14.913 20.74 15.8019 19.8511 15.8019 18.7648V8.88857C15.8019 7.80219 14.913 6.91333 13.8267 6.91333ZM4.93809 4.93809C4.93809 3.29865 6.2615 1.97524 7.90095 1.97524C9.5404 1.97524 10.8638 3.29865 10.8638 4.93809V6.91333H4.93809V4.93809ZM13.8267 18.7648H1.97524V8.88857H13.8267V18.7648ZM7.90095 15.8019C8.98733 15.8019 9.87619 14.913 9.87619 13.8267C9.87619 12.7403 8.98733 11.8514 7.90095 11.8514C6.81457 11.8514 5.92571 12.7403 5.92571 13.8267C5.92571 14.913 6.81457 15.8019 7.90095 15.8019Z" />
                    </svg>
                    <input type="password" className="w-full my-[20px]  text-[16px] text-[#000000] leading-6 border-0 border-b-[2px] border-[#CACACA] bg-[#ffffff]/[0] 
                    placeholder:font-suit placeholder:font-medium placeholder:text-[16px]  pl-10 placeholder:text-[#767676]
                    focus:border-b-[2px] focus:border-[#A3CEA7] focus:ring-0" placeholder="비밀번호" onChange={inputPw} value={pw}/>
                </form>
                {
                    authMode
                    ?
                    isEmail&&isPw
                    ?
                    <div>
                        <p className="py-[8px] mt-[18px] rounded-[3px] bg-[#A3CEA7] text-[#000000] font-bold text-[18px] text-center align-middle cursor-pointer" onClick={btnLogin}>로그인</p>
                        <p className="select-none text-[#000000] font-bold text-[18px] text-center align-middle cursor-pointer"></p>
                    </div>
                    
                    :
                    <div>
                        <p className="py-[8px] mt-[18px] rounded-[3px] bg-[#A6A6A6] text-[#000000] font-bold text-[18px] text-center align-middle cursor-pointer">로그인</p>
                        <p className="text-[#EC7A7A] font-bold text-[18px] text-center align-middle cursor-pointer">이메일은 @와 .을 포함하고, 비밀번호는 8글자 이상이어야 합니다!</p>
                    </div>
                    :
                    isEmail&&isPw
                    ?
                    <div>
                        <p className="py-[8px] mt-[18px] rounded-[3px] bg-[#A3CEA7] text-[#000000] font-bold text-[18px] text-center align-middle cursor-pointer" onClick={btnSingup}>회원가입</p>
                        <p className="select-none text-[#000000]/0 font-bold text-[18px] text-center align-middle" >이메일은 @와 .을 포함하고, 비밀번호는 8글자 이상이어야 합니다!</p>
                    </div>
                    :
                    <div>
                        <p className="py-[8px] mt-[18px] rounded-[3px] bg-[#A6A6A6] text-[#000000] font-bold text-[18px] text-center align-middle cursor-pointer">회원가입</p>
                        <p className="text-[#EC7A7A] font-bold text-[18px] text-center align-middle cursor-pointer">이메일은 @와 .을 포함하고, 비밀번호는 8글자 이상이어야 합니다!</p>
                    </div>
                }
            </div>
        </div>
    </div>
  )
  }
