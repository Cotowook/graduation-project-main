import React from 'react';
import './Productsmanentire.css';
import Manentiremap from './Manentiremap';
function Productsmanpants() {
    const pants=[["https://andar.co.kr/web/product/small/202303/bbfe47bb11413fcc1f24283eaf759442.jpg","손목보호대","123154"],
    ["https://andar.co.kr/web/product/medium/202010/cffb58d95d0a3361257758c977b2bbd9.jpg","마사지 볼","123154"],
    ["https://andar.co.kr/web/product/small/202303/3549915671c81d71e228982dc0e11b5a.jpg","요가 매트","123154"],
    ["https://andar.co.kr/web/product/small/202303/72a0fbd95c55b96d2bb1b9d653fe6192.jpg","폼 롤러","123154"],
    [ "https://andar.co.kr/web/product/medium/202205/df3cad6a6a569883caf64053e40ad5a3.jpg","마사지 공","123154"],
    [ "https://andar.co.kr/web/product/medium/202106/040e4f46d500cdc1703517abb2b0aa0a.jpg","요가 매트2","123154"],
    [ "https://andar.co.kr/web/product/medium/202106/978174afe45f488b1d1a302c7743ed39.jpg","스트레칭","123154"],
    [ "https://andar.co.kr/web/product/medium/202010/5d7b977366b8421328037815ad0fb68d.jpg","마사지 볼2","123154"],
    [ "https://andar.co.kr/web/product/medium/202009/71deeb07387c1b613bb926245afaf511.jpg","밴드","123154"],
    [ "https://andar.co.kr/web/product/medium/202110/166932e49adf5bcf8af2684b298f652f.jpg","교정기","123154"],
    [ "https://andar.co.kr/web/product/medium/202207/3971b0546166625f12d65c03d7e1c7e3.jpg","매트3","123154"],
    [ "https://andar.co.kr/web/product/medium/202106/a3026968bfe87689ad61ff206677b934.jpg" ,"스쿼트 보조","123154"]];
    const manpants=pants.map((v)=>(<Manentiremap img={v[0]} name={v[1]} price={v[2]}/>));
    return (
        <div className="Productsmanentire">
    
    <div className="shopping_main">
      <div className="shopping_1">
{manpants}
</div>
    </div>
    </div> 
    );
}

export default Productsmanpants;