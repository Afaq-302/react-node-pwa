import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {

  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [time, setTime] = useState('');
  const [lastFetchedTime, setLastFetchedTime] = useState('');

  useEffect(() => {
    console.log("run2")
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }

    function sendOfflineNotification() {
      console.log("navigator.onLine", navigator.onLine)
      if (navigator.onLine === false) {
        if (Notification.permission === "granted") {
          console.log("granted")
          new Notification("Offline Notification", {
            body: "You are currently offline. Check your internet connection.",
          });
        }
      }
    }
    sendOfflineNotification()

  }, [navigator.onLine])




  async function fetchTime() {
    try {

      const response = await axios.get('http://localhost:8080/time');
      const currentTime = response.data;
      console.log("currentTime", currentTime)
      setLastFetchedTime(currentTime); // Update the last fetched time
      setTime(currentTime);

    }
    catch (error) {
      setTime(lastFetchedTime); // Display the last fetched time when offline
      console.error('Error fetching time:', error);
      console.log('lastFetchedTime', lastFetchedTime);
    }
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
    <div className='mx-auto '>

      <div className='text-center text-xl py-6'>
        <h1 className='text-3xl font-bold'>
          Click to get time
        </h1>

        {time && <p className='mt-3 text-blue-500 font-semibold'>{time}</p>}
        <button className='text-white bg-blue-400 rounded-md px-4 py-2 mt-4' onClick={fetchTime}>Get Time</button>
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
