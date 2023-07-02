import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../../style/gameplay.css'


function Result({ players, showResult, setShowResult }) {
    const [showObt, setShowObt] = useState(false);
    if (showResult) {
        return (
            <div className="gameContainer result">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ width: "33.33%" }}>Name</div>
                    <div style={{ width: "33.33%" }}>Votes</div>
                    <div style={{ width: "33.33%" }}>Score</div>
                    {players.map((item) => {
                        return <>
                            <div style={{ width: "33.33%" }}>{item.name}</div>
                            <div style={{ width: "33.33%" }}>{item.votes}</div>
                            <div style={{ width: "33.33%" }}>{showObt ? item.score : "??"}</div>
                        </>
                    })}

                </div>

                {showObt ? <div>
                    <h2 className="normal" style={{padding:'0'}}>The obtrusives are :</h2>
                    <ul>
                        {players.map((item) => {
                            if (item.isObtrusive) {
                                return <li className="title">{item.name}</li>
                            }
                        })}
                    </ul>
                    <div>
                        <Link onClick={()=> {window.location.reload(false);}} className="nextBtn">Play again</Link>
                        <Link to="/create_offline_room" className="nextBtn">Reset room</Link>
                    </div>
                </div> : <div>
                    <button onClick={() => setShowObt(true)}>Show Obtrusives</button>
                </div>}
            </div>
        );
    }
}

export default Result;