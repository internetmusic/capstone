import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FormsAndInputs from './input';
import './styles.css';



function App() {
  const [guests, setGuestBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
       'http://localhost:8000/guests'
    );

    setGuestBooks(response.data);
    console.log(response.data);
  };
  console.log(fetchData);
  console.log(setGuestBooks);

  return ( 
    <div class="App">
      <h1>Guest Book Entries</h1>
      {/* <h2>List of guests</h2> */}

      {/* Fetch data from API */}
      <div>
        <br></br>
        <div className="btn-diff">
        <button class="fetch-button" onClick={fetchData}>
          Guest history
        </button> 
        </div>

        <br />
      </div>

      {/* Display data from API */}
      <div class="guests">
        {guests &&
          guests.map((guest, index) => {
            var cleanedDate = new Date(guest.time).toLocaleDateString("en-US")
         
            const authors = guest.name;

            return (
              <div class="book" key={index}>
                <h3>Guest {index + 1}</h3>

                <div class="details">
                  <p>👨 NAME: {authors}</p>
                  <p>💭 MESSAGE: {guest.message}</p>
                  <p>⏰ TIME: {cleanedDate}</p> 
                </div>
              </div>
            );
          })}
      </div>
          <FormsAndInputs></FormsAndInputs>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
