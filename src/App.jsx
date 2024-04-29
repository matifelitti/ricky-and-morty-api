import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Pagination from "./Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchName, setSearchName] = useState("");
  const [searchError, setSearchError] = useState(false);

  const charactersUrl = "https://rickandmortyapi.com/api/character";

  const fetchresults = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setSearchError(true);
        } else {
          setCharacters(data.results);
          setInfo(data.info);
          setSearchError(false);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchresults(charactersUrl);
  }, []);

  // Pagination:
  const onPrevious = () => {
    fetchresults(info.prev);
  };

  const onNext = () => {
    fetchresults(info.next);
  };

  // Search Character:
  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    setSearchName(searchValue);

    if (searchValue === "") {
      fetchresults(charactersUrl);
    } else {
      const searchUrl = `${charactersUrl}?name=${searchValue}`;
      fetchresults(searchUrl);
    }
  };

  return (
    <div>
      <a href="/" className="navbar">
        <h2>The Rick and Morty API</h2>
      </a>

      <div className="search-container">
        <input
          type="text"
          value={searchName}
          onChange={handleInputChange}
          placeholder="Enter character name"
        />
      </div>

      {searchError && <p className="error-message">No characters found</p>}

      <div className="pagination-container">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>

      <div className="card-list">
        <Card characters={characters} />
      </div>

      <div className="pagination-container">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>

      <div class="footer">
        <div class="footer-content">
          <a href="http://rickandmortyapi.com/api/character">CHARACTERS: 826</a>
          <a href="http://rickandmortyapi.com/api/location">LOCATIONS: 126</a>
          <a href="http://rickandmortyapi.com/api/episode">EPISODES: 51</a>
        </div>
        <div class="footer-image">
          <img src="footer-image.jpg" alt="Footer Image"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
