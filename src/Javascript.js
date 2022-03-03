import React, { useState } from 'react';
import axios from 'axios';

function Things() {
  const [jokes, setJokes] = useState([]);

  function fetchRandomData() {
    axios.get('https://api.chucknorris.io/jokes/random')
    .then((response) => {
      setJokes(response.data.categories);
      console.log(response.data);
    })
  }
  return (
    <div>
      <button onClick={fetchRandomData}>Fetch Random Data</button>
      <div>
          {jokes &&
          jokes.map((joke) => (
            <>
              <img src={joke.icon_url} />
              <p>Joke: {joke.value}</p>
            </>
          ))}
      </div>
    </div>
  );
}
export default Things;
