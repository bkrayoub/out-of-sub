import { child, get, getDatabase, onDisconnect, onValue, ref, remove, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';

export class FirebaseService {
    firebaseConfig = {
        apiKey: "AIzaSyBS3W6zk72ltYVDFhI3brbCCJluvLnFkeA",
        authDomain: "out-of-sub-967b8.firebaseapp.com",
        databaseURL: "https://out-of-sub-967b8-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "out-of-sub-967b8",
        storageBucket: "out-of-sub-967b8.appspot.com",
        messagingSenderId: "1077525312563",
        appId: "1:1077525312563:web:0863d4e9f11f6b8e21df46"
    };

    // Initialize Firebase
    app = initializeApp(this.firebaseConfig);
    db = getDatabase(this.app);

    async initRoom(roomCode, password, player) {
        const roomRef = ref(this.db, 'rooms/' + roomCode);

        set(roomRef, {
            code: roomCode,
            password: password,
            ownerID: player.id
        }).then((res) => {
            return "added"
        }).catch((err) => {
            console.log(err);
        });

        const res = await this.addPlayer(roomCode, player);
        return res;
    }
    async getRooms(setRooms) {
        return new Promise((resolve, reject) => {
            const query = ref(this.db, '/rooms/');
            onValue(query, (snapshot) => {
                let data = [];
                console.log(snapshot.val());
                let res = snapshot.val();
                for(let x in res){
                    data.push(res[x]);
                }
                console.log("snapshot is :", data);
                setRooms(data);
                resolve(data);
                
            })
            // onDisconnect(query).set()
        })
    }
    async getRoom(roomCode) {
        if (roomCode) {
            let data;
            // const query = ref(this.db, '/rooms/' + roomCode);
            let res = (await get(child(ref(getDatabase()), '/rooms/' + roomCode))).val();
            console.log(res);
            return res;
            // const getData = onValue(query, (snapshot) => {
            //     data = snapshot.val();
            //     console.log(data.players);
            // if (!data.players) {
            //     // snapshot.remove()

            // }
            // })
            // getData();
            return data;
        }
    }

    removeRoom(roomCode) {
        const query = ref(this.db, '/rooms/' + roomCode);
        remove(query).then(() => {
            console.log("deleted!");
        });
    }

    async addPlayer(roomCode, player) {
        const roomExists = await this.getRoom(roomCode);
        console.log(roomExists);
        if (roomExists) {
            const playerRef = ref(this.db, 'rooms/' + roomCode + '/players/' + player.id);
            set(playerRef, {
                id: player.id,
                name: player.name,
                score: player.score || 0
            });
            onDisconnect(playerRef).remove();
            return "success";
        }
        else {
            alert("room doesn't exist!");
            return "fail";
        }
    }

    getPlayer(roomCode, player) {
        let data;
        const query = ref(this.db, '/rooms/' + roomCode + '/players/' + player.id);

        onValue(query, (snapshot) => {
            data = snapshot.val();
        })

        onDisconnect(query).remove();

        return data;
    }

    async getPlayers(roomCode, setPlayers) {
        return new Promise((resolve, reject) => {
            const query = ref(this.db, '/rooms/' + roomCode + '/players');
            onValue(query, (snapshot) => {
                resolve(snapshot.val());
                let data = [];
                let res = snapshot.val();
                for(let x in res){
                    data.push(res[x]);
                }
                console.log("snapshot is :", data);
                setPlayers(data);
                return data;
            })
        })
    }
}