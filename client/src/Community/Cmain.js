import React from 'react';
import './Cmain.css';
import Cmain_map from './Cmain_map';
import {Link,Route,Routes} from "react-router-dom";
import loone from '../img/loone.png';
import lotwo from '../img/lotwo.png';
import lothree from '../img/lothree.png';
import Cbest from './Cbest';
function Cmain() {
    const names=[["체중감량","신세경의 다이어트 비법","이현우",lotwo],
    ["근력강화","헬린이들 이거보면서 운동하세요","김해인",lothree],
    ["체중 감량","20kg감량한 썰 푼다","임욱",lotwo],
    ["식단 조절","당뇨 환자의 식단 꿀팁","권해수",loone],
    ["체중 감량","20kg감량한 썰 푼다","임욱",lotwo],
    ["근력강화","헬린이들 이거보면서 운동하세요","김해인",lothree],
    ["식단 조절","당뇨 환자의 식단 꿀팁","권해수",loone],
    ["근력강화","헬린이들 이거보면서 운동하세요","김해인",lothree]
]
    
    
   const nameList=names.map((v)=>(<Cmain_map name={v[0]} list={v[1]} writer={v[2]} logo={v[3]}/>))
   
    return (
        <div className="Cmain">
            
        <div className="cmain_main">
      
            <div className="cmain_ab">
            <div className="cmain_a"/>
            </div>
            
            <div className="cmain_crud">
                
                <div className="cmain_button">
                <Link to="/Community/Cbest" style={{ textDecoration: "none" ,color:"black"}}>
            <button className="cmain_bt">글 작성</button>
            </Link>
            </div>
            
            <hr/>
            <div className="crud_main">
             <div className="crud_map">{nameList}</div>
             
            </div>
           
        </div>
        <div className="cmain_next"><button>이전</button>1 2 3 4 5<button>다음</button></div>
        </div>
        
        <Routes>
            <Route path="Cbest" element={<Cbest/>} />
            </Routes>
        
        </div>
    );
}

export default Cmain;