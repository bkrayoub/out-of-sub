import { useState } from "react";
import { Link } from "react-router-dom";
import subjectsJSON from "./subjects.json";
import Category from "./Category";
import ShowRole from "./ShowRole";

function Game(props) {
    const localCategory = localStorage.getItem("category");
    const [category, setCategory] = useState(localCategory);

    const [subjects, setSubjects] = useState(subjectsJSON);
    const [selectedSubject, setSelectedSubject] = useState();

    const localPlayers = JSON.parse(localStorage.getItem("localPlayers"));
    const [players, setPlayers] = useState(localPlayers);

    const randSubject = () => {
        const rand = Math.floor(Math.random() * subjects.length + 1);
        console.log(rand);
        setSelectedSubject(subjects[rand]);
    }

    const randObtrusive = () => {
        const selectedRands = [];
        let tempPlayers = players;
        let rand = Math.floor(Math.random() * players.length + 1);
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

        for (let i = 1; i < 3; i++) {
            console.log("ok ", players);
            let rand = Math.floor(Math.random() * players.length + 1);
            while (selectedRands.includes(rand)) {
                console.log(rand);
                rand = Math.floor(Math.random() * players.length + 1);
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

    if (category && !selectedSubject) {
        return <Category category={category} nextAction={() => {
            randSubject();
            randObtrusive();
        }} />
    }
    else if (selectedSubject) {
        return <ShowRole selectedSubject={selectedSubject} players={players} />
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