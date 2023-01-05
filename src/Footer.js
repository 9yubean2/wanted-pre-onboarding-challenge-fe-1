import React from 'react'
import profile from './images/dia.png'
import ic_velog from './images/ic-velogpng.png'
import ic_github from './images/ic_github.png'
function Footer() {
  const btnVelog=()=>{
    window.open(encodeURI('https://velog.io/@9yubean2'));
  }

  const btnGithub=()=>{
    window.open(encodeURI('https://github.com/9yubean2'));
  }
  return (
    <footer className="bg-[#f1f1f1] p-4 sm:px-6 md:px-6 lg:px-10 xl:px-10 2xl:px-10">
            
    <div className="sm:flex-col sm:items-center ">
        {/* <span className="self-center text-[24px] font-semibold whitespace-nowrap">✅ Todos</span> */}
        <span className="font-semibold text-[18px] cursor-default">원티드 프리온보딩 챌린지 프론트엔드 코스</span>
        <span className="font-medium text-[16px] cursor-default"> | 1월 챌린지, CRUD w React Query</span>

    </div>

    <article className="flex items-start space-x-6 py-3">
      
      <img src={profile} alt="" width="60" height="60" className="flex-none rounded-md bg-slate-100" />
      
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate">이규빈</h2>
        <dl className="mt-1 flex flex-wrap text-sm leading-6 font-medium">
          <div>
            <dt className="sr-only">SkillSet</dt>
            <dd className="mr-2 px-1.5 ring-1 ring-slate-200 rounded"># Frontend</dd>
          </div>
          <div>
            <dt className="sr-only">SkillSet</dt>
            <dd className="mr-2 px-1.5 ring-1 ring-slate-200 rounded"># CloudEngineer</dd>
          </div>
          
          
          
          {/* <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">Cast</dt>
            <dd className="text-slate-400">movie.runtime</dd>
          </div> */}
          
          
        </dl>
      </div>
    </article>


    <hr className=" border-gray-200 lg:mb-3"/>
    
    
    <div className="flex items-center justify-between">
      
        <p className="block text-sm text-gray-500 text-[18px] font-normal cursor-default">© 2023 Todos All Rights Reserved</p>
      
      
      <div className="flex space-x-3 mt-2 font-normal">
      <img src={ic_github}  alt="" width="25" height="25" className="flex-none rounded-md bg-slate-100 cursor-pointer" onClick={btnGithub}/>
        <img src={ic_velog} alt="" width="25" height="25" className="flex-none rounded-md bg-slate-100 cursor-pointer" onClick={btnVelog}/>
        
        
      </div>
      
    </div>
                
</footer>
  )
}
export default React.memo(Footer);