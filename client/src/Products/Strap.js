import React from 'react';
import './Productsmanentire.css';
import Manentiremap from './Manentiremap';
function Strap(props) {
    const Astraps=[["https://andar.co.kr/web/product/medium/202303/c9244b8bde16f8a1c69a76c2a6e369b7.jpg","셔츠","48411"],
    ["https://andar.co.kr/web/product/medium/202303/c9244b8bde16f8a1c69a76c2a6e369b7.jpg","롱슬리브","48411"],
    ["https://andar.co.kr/web/product/small/202303/b29a922033c76acf987dc00affb15314.jpg","카라반팔","48411"],
    ["https://andar.co.kr/web/product/medium/202303/967ca25b8acab37801febdb4a2896e4a.jpg","반팔","48411"],
    ["https://andar.co.kr/web/product/small/202303/de6b9f3a679debcfd7f3ac7612a67605.jpg","넥반팔","48411"],
    ["https://andar.co.kr/web/product/small/202302/10679728c6b46bb0e45f57f2f64d8aef.jpg","셔츠반팔","48411"],
    ["https://andar.co.kr/web/product/medium/202211/099c99e2acc757d33389706184f377ec.jpg","그린 반팔","48411"],
    ["https://andar.co.kr/web/product/small/202211/675e5162cbda20e958565aae4f390e21.jpg","블랙 롱 슬리브","48411"]
  ];
    const Astrap=Astraps.map((v)=>(<Manentiremap img={v[0]} name={v[1]} price={v[2]}/>));
    return (
        <div className="Productsmanentire">
    
        <div className="shopping_main">
          <div className="shopping_1">
    {Astrap}
    </div>
        </div>
        </div> 
    );
}

export default Strap;