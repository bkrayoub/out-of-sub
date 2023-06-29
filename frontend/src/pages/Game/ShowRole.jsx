import { useState } from "react";

function ShowRole({ selectedSubject, players }) {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    console.log(players);
    return <div>
        {show ? <>
            {!players[index].isObtrusive ?
                <div>
                    <p>
                        {players[index].name}
                    </p>
                    <h1>
                        Subject:
                    </h1>
                    <p>
                        {selectedSubject.name}
                    </p>
                </div> :
                <div>
                    ydk fih jhjhhjhjhjhj
                </div>
            }
        </> : <div>
            give the device to {players[index].name}
        </div>
        }
        {show ? <div>
            {players.length - 1 !== index ? <button onClick={() => {
                setIndex(index + 1);
                setShow(false);
            }}>NEXT</button> : ""}
        </div> : <div>
            <button onClick={() => setShow(true)}>NEXT</button>
        </div>
        }
    </div>
}

export default ShowRole;