import style from '../style/messageAlert.css'

export default function MessageAlert({message}) {

    return (
        <div className="messageAlert">
            <p>{message}</p>
        </div>
    )
}