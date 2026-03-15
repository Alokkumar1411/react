import React, { useState } from "react";

const App = () => {
  const [first, setfirst] = useState("");
  const btnclicked = (e) => {
    e.preventDefault();
    console.log("clicked");
    setfirst("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          btnclicked(e);
        }}
      >
        <input
          type="text"
          value={first}
          onChange={(e) => {
            setfirst(e.target.value);
          }}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
