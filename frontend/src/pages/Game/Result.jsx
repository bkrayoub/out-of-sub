import { useState } from "react";

function Result({ players, showResult, setShowResult }) {
    const [showObt, setShowObt] = useState(false);
    if (showResult) {
        return (
            <div>
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
                    <h2>The obtrusives are :</h2>
                    <ul>
                        {players.map((item) => {
                            if (item.isObtrusive) {
                                return <li>{item.name}</li>
                            }
                        })}
                    </ul>
                </div> : <div>
                    <button onClick={() => setShowObt(true)}>Show Obtrusives</button>
                </div>}
            </div>
        );
    }
}

export default Result;