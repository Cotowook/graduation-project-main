import React from 'react';
import './Cbest.css';
import {Link} from "react-router-dom";
function Cbest(props) {
    return (
        <div className="Cbest">
            <div className="cbest_main">
                <from className="cbest_from">
                    <h2 className="cbest_h2">게시물 올리기</h2>
                    <div className="cbest_input">
                    <h3>제목</h3>
                    <input placeholder='제목을 입력해주세요'/>
                    </div>
                    <div className="cbest_text">
                    <h3>내용</h3>
                    <textarea className="cbest_textarea" placeholder='내용을 입력해주세요'/>
                    </div>
                    <div className="cbest_button">
                    <button>등록하기</button>
                    <button><Link to="strap"style={{ textDecoration: "none" ,color:"#ffff"}}>목록으로</Link></button>
                    </div>
                </from>
            </div>
        </div>
    );
}

export default Cbest;