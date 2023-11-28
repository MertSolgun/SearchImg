import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setvalueInput] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    search(valueInput);
  };
  const handleChange = (event) => {
    setvalueInput(event.target.value);
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="What are u looking for?"
          value={valueInput}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchHeader;
