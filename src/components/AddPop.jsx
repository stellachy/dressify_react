import React, { useRef } from 'react'
// import ClosetLayout from '../layouts/ClosetLayout'

function AddPop({close}) {
  // 之前在js裡的寫法，到react吃不到id；但是css selector選的到^_^
  // const divElemS = document.getElementById('addBtnS');

  const divElemS = useRef();
  const divElemM = useRef();
  const divPopM = useRef();
  
  function handleClickAddS() {
    // console.log(divElemS.current.childNodes[0]);  // <img> ... </img>
    
    // 圖片與文字改為黑色
    divElemS.current.childNodes[0].classList.toggle('opacity-50');
    divElemS.current.childNodes[1].classList.toggle('text-dark');
    // the following is for redirecting to Crop.jsx, ClosetEditSingle.jsx, ...(就接下來一連串的流程ㄉ第一個page)
    // location.href = './Closet';  
  }

  function handleClickAddM() {
    // 圖片與文字改為黑色
    divElemM.current.childNodes[0].classList.toggle('opacity-50');
    divElemM.current.childNodes[1].classList.toggle('text-dark');

    // 滑出popout選擇新增搭配的方式
    divPopM.current.classList.toggle('show');
  }

  // 控制overlay => 點擊後收回popup
  function handleOverlay() {
    // 如果點擊的目標不在內部元素，觸發關閉
    if (
      // 檢查是否useRef已經被建立
      divElemS.current &&
      divElemM.current &&
      divPopM.current &&

      // 如果   ref中包含了點擊的部分   以外的 （啊就是overlay的部分）
      !divElemS.current.contains(event.target) &&
      !divElemM.current.contains(event.target) &&
      !divPopM.current.contains(event.target)
    ) {
      // 關閉AddPopup
      close()
    }
  }

  return (
    // 之後可把layout刪掉 here is for checking the place
    <>
      <div id="addOverlay" onClick={handleOverlay} className="mt-5 p-2 bg-dark bg-opacity-25" style={{height: '600px'}}>
        <div className="bg-light position-fixed" style={{width: '200px', top: '125px', marginLeft: '15%'}}>
          <div ref={divElemS} onClick={handleClickAddS} className="border-bottom border-2 md-24 text-center py-3 text-secondary"><img
            src="src/assets/img/icon/add_single.svg" className="align-text-bottom opacity-50" style={{width: '26px'}}
            alt="one" /><span>&nbsp;&nbsp;新增單品</span></div>

          <div ref={divElemM} onClick={handleClickAddM} className="md-24 text-center py-3 text-secondary">
            <img src="src/assets/img/icon/add_match.svg" className="align-text-bottom opacity-50" style={{width: '30px'}} alt="set" />
            <span>&nbsp;&nbsp;新增穿搭</span></div>
        </div>
      </div>

      <div id="addPopM" ref={divPopM} className="fixed-bottom bg-light rounded-top" style={{height: '220px'}}>
        <div className="mx-5 my-3 pt-3">
          {/* <!-- href needs to be set for redirecting --> */}
          <a href="#" className="btn btn-dark md-24 p-3" style={{width: '275px'}}>
            <img src="src/assets/img/icon/add_match_closet_white.svg" className="align-text-bottom" style={{width: '26px'}} />
            <span className="md-24">&nbsp;&nbsp;衣櫃搭配</span>
          </a>
        </div>
        <div className="mx-5 my-3">
          {/* <!-- href needs to be set for redirecting --> */}
          <a href="#" className="btn btn-dark md-24 p-3" style={{width: '275px'}}>
            <img src="src/assets/img/icon/add_match_pic_white.svg" className="align-middle" style={{width: '26px'}} />
            <span className="md-24">&nbsp;&nbsp;上傳圖片</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default AddPop