import { useState } from "react";

function Result({ players, showResult, setShowResult }) {
    const [showObt, setShowObt] = useState(false);
    if (showResult) {
        return (
            <div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ width: "50%" }}>Name</div>
                    <div style={{ width: "50%" }}>Votes</div>
                    {players.map((item) => {
                        return <>
                            <div style={{ width: "50%" }}>{item.name}</div>
                            <div style={{ width: "50%" }}>{item.votes}</div>
                        </>
                    })}
                </div>
                <div>
                    <button onClick={()=>setShowObt(true)}>Show Obtrusives</button>
                </div>
                {showObt ? <div>
                    <h2>the btrusives are :</h2>
                    <ul>
                        {players.map((item)=>{
                            if(item.isObtrusive){
                                return <li>{item.name}</li>
                            }
                        })}
                    </ul>
                </div> : ""}
            </div>
        );
    }
}

export default Result;