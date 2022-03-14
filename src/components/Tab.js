import { useState, useEffect } from "react";
import "./Tab.css"
function Tab(){
    const [member, setMember] = useState(1);
    useEffect(()=>{
        if(member <= 0){
            setMember(1);
            alert("인원은 0명 이하로 내려갈수 없습니다.")
        }else if(member > 4){
            setMember(4);
            alert("인원은 5명 이상으로 올라갈수 없습니다.")
        }
    })
    return (
        <div>
            <h1 id="h1Tab">예약</h1>            
            <div id="divid">
                <button onClick={() => setMember(member+1)}>+</button>
                <span id="spanTab">{member}명</span>
                <button onClick={() => setMember(member-1)}>-</button>
            </div>
        </div>
    )
}

export default Tab;