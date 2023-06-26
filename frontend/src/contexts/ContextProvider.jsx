import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { },
})
export const ContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "test",
    });

    useEffect(() => {

        const getToken = async () => {
            if (localStorage.getItem('ACCESS_TOKEN')) {
                const headers = {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
                }
                const data = await axios.get('http://127.0.0.1:8000/api/token', {
                    headers: headers
                });
                console.log(data);
                if (data) {
                    setUser((old)=>{return {...old, name:data.data.name}});
                    console.log(data.data.name);
                }
            }
        }
        getToken();
    }, [])

    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    useEffect(() => {

    })




    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        }
        else {
            localStorage.removeItem("ACCESS_TOKEN")
        }
    }



    return (

        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)