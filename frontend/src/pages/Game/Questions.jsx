import { useState } from "react";

function Questions({ players, showQuestions, setShowQuestions, setShowVote }) {
    const [start, setStart] = useState(false);
    const [numQ, setNumQ] = useState(1);

    let randQuestioner = Math.floor(Math.random() * players.length);
    const [currentQuestioner, setCurrentQuestioner] = useState(players[randQuestioner]);

    let randAnswerer;
    do {
        randAnswerer = Math.floor(Math.random() * players.length);
    } while (randAnswerer === randQuestioner);
    const [currentAnswerer, setCurrentAnswerer] = useState(players[randAnswerer]);


    const handleNext = () => {
        setCurrentQuestioner(currentAnswerer);

        let rand;
        do {
            rand = Math.floor(Math.random() * players.length);

        } while (players[rand].id === currentAnswerer.id);
        setCurrentAnswerer(players[rand]);
        setNumQ(numQ + 1);
    }

    if (showQuestions) {
        if (!start) {
            return (
                <div>
                    <h2>wanna start the questions?</h2>
                    <button onClick={() => setStart(true)}>Start</button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>
                        {currentQuestioner.name} Ask {currentAnswerer.name}
                    </h1>
                    <button onClick={handleNext}>Next</button>
                    {players.length < numQ ?
                        <button onClick={() => {
                            setShowQuestions(false);
                            setShowVote(true);
                        }}>Vote</button>
                        : ''}
                </div>
            );
        }
    }
}

export default Questions;