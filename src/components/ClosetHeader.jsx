import React, {useState} from 'react'
import AddPop from './AddPop';

function ClosetHeader({isActive}) {
  const [activeBtn, setActiveBtn] = useState(isActive);
  const handleBtnActive = (btnName) => { setActiveBtn(btnName) }
  return (
    <>
      <div className="container-fluid fixed-top bg-light my-5" style={{top: '14px'}}>
        <div className="row align-items-center">
          <a href="/Closet" className="col-2 ms-2 my-2 btn rounded-pill" 
              style={{backgroundColor: activeBtn === '單品' ? 'var(--color-highlight)' : 'var(--color-base)', color: activeBtn === '單品' ? 'var(--color-white)' : 'var(--color-black)'}} 
              onClick={() => {handleBtnActive('單品')}}>
            <b>單品</b>
          </a>
          <a href="/ClosetMatch" className="col-2 ms-2 my-2 btn rounded-pill"
              style={{backgroundColor: activeBtn === '穿搭' ? 'var(--color-highlight)' : 'var(--color-base)', color: activeBtn === '穿搭' ? 'var(--color-white)' : 'var(--color-black)'}}
              onClick={() => {handleBtnActive('穿搭')}}>
            <b>穿搭</b>
          </a>

          <a href="#" className="col-6"><img src="src/assets/img/icon/add.svg" style={{width: '25px'}} alt="add"/>
          </a>

          <a href="./closet_search.html" className="col-1 ms-2"><img src="src/assets/img/icon/pic-search.svg" style={{width: '25px'}} alt="search"/></a>

        </div>
      </div>
      <AddPop/>
    </>
  )
}

export default ClosetHeader