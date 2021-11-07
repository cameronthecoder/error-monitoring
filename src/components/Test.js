import React, { useState, useEffect } from "react";

const APIKEY = "f825c4f8";

function Test() {
  const [movie, setMovie] = useState({});
  const [userInput, setUserInput] = useState("Monty Python and the Holy Grail");
  let ratingsElement = [];

  const handleChange = (event) => {
    const { value } = event.target;
    setUserInput(value);
  };

  const getData = async () => {
    const url = `https://www.omdbapi.com/?t=${userInput}&apikey=${APIKEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  };

  const sendData = async () => {
    const url = "http://127.0.0.1:5000/api/projects/";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: movie.Title }),
    });
    const data = await response.json();
    console.log(data);
  };

  if (movie.Ratings) {
    ratingsElement = movie.Ratings.map((rating) => (
      <div>
        <h2>{rating.Source}</h2>
        <p>{rating.Value}</p>
      </div>
    ));
  }

  const movieElement = (
    <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      {ratingsElement}
    </div>
  );

  useEffect(() => {
    getData(userInput);
  }, []);

  return (
    <div>
      <h1>Test Component</h1>
      <input
        type="text"
        name="userInput"
        placeholder="Search for a movie"
        onChange={handleChange}
      />
      <button onClick={getData}>Submit</button>
      <button onClick={sendData}>Send to database</button>
      {movieElement}
    </div>
  );
}

export default Test;
