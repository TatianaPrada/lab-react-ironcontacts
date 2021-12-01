import './App.css';
import contacts from './contacts.json'
import { useState } from "react";

function App() {
  const [contactsToShow, setContactsToShow] = useState(contacts.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5, contacts.length))

  const checkTrophies = (price) =>{
    let trophy = price ? "🏆" : ""
    return trophy
  }

  const addRandomContact = ()=>{
    const newContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)]

    const newRemainingContacts = remainingContacts.filter((contact) => contact.id !== newContact.id)
    
    setContactsToShow([...contactsToShow, newContact])
    setRemainingContacts(newRemainingContacts)
  }

  return <div className="App">
    <h2>Iron Contacts</h2>
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button>Sort by popularity</button>
    <button>Sort by name</button>
    <table>
      <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
      </tr>
      </thead>
        <tbody>
      {contactsToShow.map((contact, index) => {
        return (
          <tr key={contact.id}>
          <td><img src={contact.pictureUrl} alt="artist" /></td>       
          <td>{contact.name}</td>       
          <td>{contact.popularity.toFixed(2)}</td> 
          <td>{checkTrophies(contact.wonOscar)}</td>     
          <td>{checkTrophies(contact.wonEmmy)}</td> 
          </tr>
        )
    })}
        </tbody>

  </table>
  </div>
}

export default App;
