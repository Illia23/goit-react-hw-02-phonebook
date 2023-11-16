export const ContactListItem = ({data, deleteContact}) => {
    return (
               <li key={data.id}>
                    {data.name} : {data.number}   
               <button onClick={()=>deleteContact(data.id)} type="button">delete</button>     
    </li>
    )
}