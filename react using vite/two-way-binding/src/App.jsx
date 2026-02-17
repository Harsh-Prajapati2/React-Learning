import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName] = useState('');
  const [allUser,setAllUser] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    const oldUsers = [...allUser];
    oldUsers.push(name);
    console.log(oldUsers);
    setAllUser(oldUsers);
    setName('');
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={(e)=>{
          handleSubmit(e);
        }}>
          <label htmlFor="text">Name :</label>
          <input 
          type="text"
           placeholder='Enter Your Name'
           value={name}
           onChange={(e)=>{
            setName(e.target.value);
           }}
           />

          <button>
            Submit
          </button>
        </form>
        {
          allUser.map(function(user,index){
            return <p>{user}</p>
          })
        }
      </div>
    </>
  )
}

export default App
