import { useState } from "react";
import styles from '../../style/gameplay.css'

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
                <div className="gameContainer">
                    <h2 className="bigTitle">Q&A</h2>
                    <p className="normal">From now the players can ask each other about the subject and trying to find who the obtrusive is</p>
                    <button className="nextBtn" onClick={() => setStart(true)}>Start</button>
                </div>
            );
        }
        else {
            return (
                <div className="gameContainer">
                    <h1 className="title">
                        {currentQuestioner.name} Ask {currentAnswerer.name}
                    </h1>
                    <div className="btns">
                        <button className="nextBtn" onClick={handleNext}>Next</button>
                        {players.length < numQ ?
                            <button className="voteBtn" onClick={() => { setShowQuestions(false); setShowVote(true); }}>
                                Vote
                            </button> : ''}
                    </div>
                </div>
            );
        }
    }
}

export default Questions;