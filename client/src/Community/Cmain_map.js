import React from 'react';

import './Cmain_map.css';
const Cmain_map=(props)=>{
    return (
          <div className="crud_first">
                    <h3>{props.name}</h3>
                   <img src={props.logo} alt="ad"/>
                    <div className="crud_list">{props.list}</div>
                    <div className="crud_list">작성자:{props.writer}</div>
                    <div className="crud_button">
                    <button>게시물 보러 가기</button>
                    </div>
                </div>
               

        
    );
}

export default Cmain_map;