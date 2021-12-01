import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

const contactsArr = contacts.slice(0, 5)

const checkTrophies = (price) =>{
  let trophy = price ? "🏆" : ""
  return trophy
}
function App() {
  return <div className="App">

  <h2>Iron Contacts</h2>
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
      {contactsArr.map((contact, index) => {
        return (
        <tbody>
          <tr>
          <td><img src={contact.pictureUrl} alt="artist" /></td>       
          <td>{contact.name}</td>       
          <td>{contact.popularity.toFixed(2)}</td> 
          <td>{checkTrophies(contact.wonOscar)}</td>     
          <td>{checkTrophies(contact.wonEmmy)}</td> 
          </tr>
        </tbody>
        )
    })}

  </table>
  </div>
}

export default App;
