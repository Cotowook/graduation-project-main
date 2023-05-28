import React from 'react';
import './Productsmain.css';
import advertisement from '../img/coad.jpg';
import Productsmainbest from './Productsmainbest';
function Productsmain() {
    const bests=[["상품이름",4512],["상품이름",4512],["상품이름",4512],["상품이름",4512],["상품이름",4512],["상품이름",4512]];
    const bestlist=bests.map((v)=>(<Productsmainbest name={v[0]} price={v[1]}/>));
    const news=[["상품이름",4512],["상품이름",4545452],["상품이름2",4512],["상품이름",4512],["상품이름",4512],["상품이름",4512]];
    const newlist=news.map((v)=>(<Productsmainbest name={v[0]} price={v[1]}/>));
    return (
        <div className="Productsmain">
            <div className="advertisement">
                <img src={advertisement} alt="advertisement"/>
                <h1>BEST</h1>
                <div className="main_best"> 
                <div className="main_bestscroll">                
               {bestlist}
                </div>
                </div>
                <div className="prototype"></div>
                <h1>New</h1>
                <div className="main_new">
                    <div className="main_newscroll">
                       {newlist}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productsmain;