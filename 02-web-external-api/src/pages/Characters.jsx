import React, { useState } from "react";
import { useEffect } from "react";
import { fetchCharacters } from "../api/fetchCharacters";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const data = await fetchCharacters();
    setCharacters(data);
  };

  useEffect(() => {
    getCharacters();
  })

  return (
    <div>
      { characters ? (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <img src={character.image} height='100px' width='100px' alt='characterImage' />
              {character.firstName} ({character.age})
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading characters...</p>
      )}
    </div>
  )
};

export default Characters;