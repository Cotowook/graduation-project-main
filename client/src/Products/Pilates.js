import React from 'react';
import Rmain from "./Rmain";
function Pilates(props) {
    const names=[["이름3","8112",1231],["이름3","8112",1231],
    ["이름3","8112",1231],["이름3","8112",1231],
    ["이름3","8112",1231],["이름3","8112",1231],
    ["이름3","8112",1231],["이름3","8112",1231]];
    const namelist=names.map((v)=>(<Rmain name={v[0]} number={v[1]} price={v[2]}/>));
    return (
        <div className="Rap_main">
           {namelist}
        </div>
    );
}

export default Pilates;