import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {

  const [state, setState] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const getRequest = async () => {
    const res = await axios.get("http://localhost:8080/time");
    setState(res.data)
    console.log("Result", res)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/message?message=${message}`);

      if (response.status === 200) {
        setResponse(response.data);
      } else {
        console.error('Error sending message');
      }
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  return <>
    <Navbar />
    <div className='mx-auto'>

      <div className='text-center text-xl py-6'>
        <h1 className='text-3xl font-bold'>
          Click to get time
        </h1>
        {state && <p className='mt-3 text-blue-500 font-semibold'>{state}</p>}
        <button className='text-white bg-blue-400 rounded-md px-4 py-2 mt-4' onClick={getRequest}>Get Time</button>

      </div>


      {/* message  */}
      <div className='text-center bg-slate-50 p-6 mt-6'>
        <h2 className='text-3xl font-semibold '>Send a Message</h2>
        <form onSubmit={handleSubmit} className='py-4'>
          <input
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-[300px] mx-auto block py-2 px-2  rounded-lg'
          />
          <button className='text-white bg-blue-400 rounded-md px-4 py-2 mt-4 mb-3' type="submit">Send Message</button>
        </form>
        <div>
          <p>Response from server: {response}</p>
          <p></p>
        </div>
      </div>
    </div>

  </>
}

export default App;
