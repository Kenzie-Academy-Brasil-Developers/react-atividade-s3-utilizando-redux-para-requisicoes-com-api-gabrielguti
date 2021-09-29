import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from '../../store/modules/digimons/thunks'
const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (input) => {
    setError(false);
    dispatch(addDigimonsThunk(input));
    setInput("");
  };

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite aqui seu digimon"
        />

        <button onClick={() => handleSearch(input)}>Pesquisar</button>
      </div>
    </div>
  );
};

export default Search;
