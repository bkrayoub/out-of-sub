import { useEffect, useState } from "react";

function Vote({ showVote, setShowVote, players, setPlayers, setShowResult, localNumObts }) {

    const [index, setIndex] = useState(0);
    useEffect(() => {
        console.log(players[0]);
    })

    const handleVote = (player) => {
        let score = 0;
        if (player.isObtrusive && !players[index].isObtrusive) {
            score = 50;
        }

        let playersList = players.map((item) => {
            if (item.id === player.id) {
                return { ...item, votes: item.votes + 1 };
            }
            else if (item.id === players[index].id) {
                return { ...item, score: score };
            }
            else {
                return item;
            }
        });

        if (index < players.length - 1) {
            setIndex(index + 1);
        }
        else {
            // const kicked = players.filter((item)=>item.is)
            playersList = playersList.sort((a, b) => { return b.votes - a.votes });
            let obstrusivesWon = false;
            for (let i = 0; i < localNumObts; i++) {
                if (!playersList[i].isObtrusive) {
                    obstrusivesWon = true;
                }
            }
            if (obstrusivesWon) {
                playersList = playersList.map((item) => {
                    if (item.isObtrusive) {
                        return { ...item, score: 100 }
                    }
                    return item;
                })
            }
            else {
                playersList = playersList.map((item) => {
                    if (!item.isObtrusive) {
                        return { ...item, score: item.score + 50 }
                    }
                    return item;
                })
            }
            console.log("kkk", playersList);
            setShowVote(false);
            setShowResult(true);
        }

        setPlayers(playersList);
    }

    if (showVote) {
        return (
            <div className="gameContainer">
                <h2 className="title">{players[index].name} can Vote</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    {players.map((item, i) => {
                        return <button className="nextBtn" style={{ border: "5px", color: "black" }}
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