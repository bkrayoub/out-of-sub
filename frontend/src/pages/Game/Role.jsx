import { useState } from "react";
import styles from '../../style/gameplay.css'



function Role({ selectedSubject, players, showRole, setShowRole, setShowQuestions }) {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    console.log(players);
    if (showRole) {
        return <div className="gameContainer">
            {show ? <>
                {!players[index].isObtrusive ?
                    <div>
                        <p>
                            <span className="ferstCap title">{players[index].name}</span>
                        </p>
                        <p className="title fontGloosy strok-thin category">
                            {selectedSubject.name}
                        </p>
                    </div> :
                    <div className="title">
                        You are the obtrusive
                    </div>
                }
            </> : <div className="normal">
                <h1 className="bigTitle">
                    <span className="ferstCap">{players[index].name}</span>
                </h1>
                <p>give the device to <span className="ferstCap">{players[index].name}</span>.
                <br />
                <br />
                <span className="ferstCap">{players[index].name}</span> don’t let your friends see the the screen while you inspect your rule </p>
            </div>
            }
            {show ? <div className="btnContainer">

                {players.length - 1 !== index ? <button onClick={() => {
                    setIndex(index + 1);
                    setShow(false);
                }}>NEXT</button> :
                    <button className=".nextBtn" onClick={() => {
                        setShowRole(false);
                        setShowQuestions(true);
                    }}>
                        Next
                    </button>
                }
            </div> : <div>
                <button onClick={() => setShow(true)} className="nextBtn">NEXT</button>
            </div>
            }
        </div>
    }
}

export default Role;