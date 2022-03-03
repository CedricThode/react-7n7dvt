import React, { useState } from 'react';
import axios from 'axios';

function Things() {
  const [Jokes, setJokes] = useState([]);

  function fetchRandomData() {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then((response) => {
        setJokes(response.data.results);
        console.log(response.data.value);
      })

      .catch((error) => console.log(error));
    // window.alert(Joke);
  }
  return (
    <div>
      <button onClick={fetchRandomData}>Fetch Random Data</button>
      <div>
        {Jokes &&
          Jokes.map((joke) => (
            <>
              <p>joke: {joke.value}</p>
            </>
          ))}
      </div>
    </div>
  );
}

export default Things;
