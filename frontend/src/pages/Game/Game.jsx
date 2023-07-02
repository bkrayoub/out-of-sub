import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import subjectsJSON from "./subjects.json";
import Category from "./Category";
import Role from "./Role";
import Questions from "./Questions";
import Vote from "./Vote";
import Result from "./Result";

function Game(props) {
    const localCategory = localStorage.getItem("category");
    const [category, setCategory] = useState(localCategory);

    const [subjects, setSubjects] = useState(subjectsJSON);
    const [selectedSubject, setSelectedSubject] = useState(false);

    const localPlayers = JSON.parse(localStorage.getItem("localPlayers"));
    const allPlayers = localPlayers.map((item) => {
        return { ...item, isObtrusive: false, votes: 0, score: 0 };
    })
    const [players, setPlayers] = useState(allPlayers);

    /************ Change Sections *************/
    const [showCat, setShowCat] = useState(true);
    const [showRole, setShowRole] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);
    const [showVote, setShowVote] = useState(false);
    const [showResult, setShowResult] = useState(false);

    /********** Update Local Storage whenever "players" is changed *********/
    useEffect(() => {
        const PlayersJson = JSON.stringify(players);
        localStorage.setItem("localPlayers", PlayersJson);
    }, [players]);


    const randSubject = () => {
        const rand = Math.floor(Math.random() * subjects.length + 1);
        console.log(rand);
        setSelectedSubject(subjects[rand]);
        setShowCat(false);
        setShowRole(true);
    }

    const randObtrusive = () => {
        const selectedRands = [];
        let tempPlayers = players;
        let rand = Math.floor(Math.random() * players.length);
        selectedRands.push(rand);
        console.log("temp", rand);
        const newList = tempPlayers.map((item) => {
            if (item.id === tempPlayers[rand].id) {
                return { ...item, isObtrusive: true };
            }
            else {
                return item;
            }
        })
        tempPlayers = newList;

        for (let i = 1; i < 2; i++) {
            console.log("ok ", players);
            let rand = Math.floor(Math.random() * players.length);
            while (selectedRands.includes(rand)) {
                console.log(rand);
                rand = Math.floor(Math.random() * players.length);
            }
            selectedRands.push(rand);
            const newList = tempPlayers.map((item) => {
                if (item.id === tempPlayers[rand].id) {
                    return { ...item, isObtrusive: true };
                }
                else {
                    return item;
                }
            })
            tempPlayers = newList;
        }
        console.log(selectedRands);
        setPlayers(tempPlayers)
    }

    return (
        <div>
            <Category
                category={category} showCat={showCat}
                setShowCat={setShowCat}
                nextAction={() => {
                    randSubject();
                    randObtrusive();
                }}
            />

            <Role
                selectedSubject={selectedSubject} players={players}
                showRole={showRole} setShowRole={setShowRole}
                setShowQuestions={setShowQuestions}
            />

            <Questions
                players={players} showQuestions={showQuestions}
                setShowQuestions={setShowQuestions} setShowVote={setShowVote}
            />

            <Vote players={players} setPlayers={setPlayers}
                showVote={showVote} setShowVote={setShowVote}
                setShowResult={setShowResult}
            />

            <Result
                players={players} showResult={showResult}
                setShowResult={setShowResult}
            />
        </div>
    );

    if (category && !selectedSubject) {
        return <Category category={category} nextAction={() => {
            randSubject();
            randObtrusive();
        }} />
    }
    else if (selectedSubject) {
        return
    }

    else if (!category) {
        return (
            <div>


                <div>
                    <Link to={"/create_offline_room"}>Create a room</Link>
                </div>

            </div>
        );
    }
}

export default Game;