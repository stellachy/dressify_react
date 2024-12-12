import React from 'react'

function MyNavigation() {
    return (
        <header className="navbar fixed-top" style={{ backgroundColor: '#ebe3e0' }}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="img"><a href="./modify.html"><img src="src/assets/img/icon/setting.svg" width="30px"
                    alt="setting" /></a>
                </div>
                <span className="text-xl"><b>Dressify</b></span>
                <div></div>
            </div>
        </header>
    )
}

export default MyNavigation