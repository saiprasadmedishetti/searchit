import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PhotoGrid from "./components/PhotoGrid";
import Overlay from "./components/Overlay";
import Form from "./components/Form";

function App() {
  const [pic, setPic] = useState({});
  const [search, setSearch] = useState("");
  const handlePic = (pic) => {
    setPic(pic);
  };
  const closeOverlay = () => {
    setPic({});
  };

  const handleSearch = (val) => {
    console.log(val);
    setSearch(val);
  };

  return (
    <Router>
      <div className="wrapper">
        <Form handleSearch={handleSearch} />
        <PhotoGrid search={search} handlePic={handlePic} />
        {Object.keys(pic).length > 0 && (
          <Overlay pic={pic} closeOverlay={closeOverlay} />
        )}
      </div>
    </Router>
  );
}

export default App;
