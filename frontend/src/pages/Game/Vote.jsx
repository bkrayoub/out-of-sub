import { useEffect, useState } from "react";

function Vote({ showVote, setShowVote, players, setPlayers, setShowResult }) {

    const [index, setIndex] = useState(0);
    useEffect(() => {
        console.log(players[0]);
    })

    const handleVote = (player) => {

        const newList = players.map((item) => {
            if (item.id === player.id) {
                if (item.votes) {
                    return { ...item, votes: item.votes + 1 };
                }
                return { ...item, votes: 1 };
            }
            else {
                return item;
            }
        });
        setPlayers(newList);
        if (index < players.length - 1) {
            setIndex(index + 1);
        }
        else {
            setShowVote(false);
            setShowResult(true);
        }
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