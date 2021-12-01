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
  
  const compareRating = (a, b) =>{
    if (a.popularity < b.popularity) return -1
    else if (a.popularity > b.popularity) return 1
    else return 0  
  }

  const sortByPop = ()=>{
    const arraySorted = contactsToShow.sort(compareRating)
    setContactsToShow([...arraySorted])
  }

  const compareName = (a, b) =>{
    if (a.name < b.name) return -1
    else if (a.name > b.name) return 1
    else return 0  
  }

  const sortByName = ()=>{
    const arraySortedByName = contactsToShow.sort(compareName)
    setContactsToShow([...arraySortedByName])
  }

  const deleteContact = (contactToDelete) => {
    const filteredContact = contactsToShow.filter((item) => {
      return contactToDelete !== item.id;
    });

    setContactsToShow(filteredContact);
  };

  return <div className="App">
    <h2>Iron Contacts</h2>
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortByPop}>Sort by popularity</button>
    <button onClick={sortByName}>Sort by name</button>
    <table>
      <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
        <th>Actions</th>
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
          <td><button onClick={()=>deleteContact(contact.id)}>Delete</button></td> 
          </tr>
        )
    })}
        </tbody>

  </table>
  </div>
}

export default App;
