import { useEffect, useState } from "react";

function Vote({ showVote, setShowVote, players, setPlayers }) {

    const [index, setIndex] = useState(0);
    useEffect(() => {
        console.log(players[0]);
    })

    const handleVote = (player) => {
        const newList = players.map((item) => {
            if (item.id === player.id) {
                if (item.vote) {
                    return { ...item, vote: item.vote + 1 };
                }
                return { ...item, vote: 1 };
            }
            else {
                return item;
            }
        });
        setPlayers(newList);
        setIndex(index + 1);
    }

    if (showVote) {
        return (
            <div>
                <h2>{players[index].name} can Vote</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    {players.map((item, i) => {
                        return <button style={{ border: "5px", color: "black" }}
                            onClick={() => handleVote(item)}
                        >
                            {item.name}
                        </button>
                    })}
                </div>
            </div>
        );
    }
}

export default Vote;