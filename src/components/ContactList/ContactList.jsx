import Contact from "../Contact/Contact"
import App from "../../App"
import style from "./contactlist.module.css"

export default function ContactList({users, onDelete}) {
    return (
        <div className={style.boxList}>
            {users.map(user => <Contact onDelete={onDelete } key={user.id} name={user.name} phone={user.number} id={user.id } />)}
    
       </div>
    )
}