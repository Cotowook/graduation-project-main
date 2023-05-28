import React from 'react';

function Manentiremap(props) {
    return (
        <div className="main_1">
        <img className="main1_img"  src={props.img}alt="img"/>
        <div className="main1_text"><h3>{props.name}</h3>
        가격:{props.price}원
        </div>
        </div>
    );
}

export default Manentiremap;