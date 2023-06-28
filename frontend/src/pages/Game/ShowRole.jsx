import { useState } from "react";

function ShowRole({ selectedSubject, players }) {
    const [index, setIndex] = useState(0);
    console.log(players);
    return <div>
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
        {players.length - 1 !== index ? <button onClick={() => setIndex(index + 1)}>NEXT</button> : ""}
    </div>
}

export default ShowRole;