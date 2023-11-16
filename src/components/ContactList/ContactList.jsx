export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map((el) => (
                <li key={el.id}>
                    {el.name} : {el.number}   
               <button onClick={()=>deleteContact(el.id)} type="button">delete</button>     
    </li>
))}
        </ul>
    )
}

