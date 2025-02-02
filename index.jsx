import React, { useState } from "react";
import "./App.css";

function App() {
  const [clothes, setClothes] = useState([]);
  const [combinations, setCombinations] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setClothes([...clothes, { id: Date.now(), imageUrl, category: "shirt" }]);
  };

  const generateCombinations = () => {
    // Example logic: Randomly pair shirts and pants
    const shirts = clothes.filter((item) => item.category === "shirt");
    const pants = clothes.filter((item) => item.category === "pants");
    const newCombinations = shirts.map((shirt) => ({
      shirt,
      pants: pants[Math.floor(Math.random() * pants.length)],
    }));
    setCombinations(newCombinations);
  };

  return (
    <div className="App">
      <h1>My Wardrobe</h1>
      <input type="file" onChange={handleUpload} />
      <button onClick={generateCombinations}>Generate Outfits</button>

      <div className="clothes-grid">
        {clothes.map((item) => (
          <img key={item.id} src={item.imageUrl} alt="clothing" className="clothing-item" />
        ))}
      </div>

      <div className="combinations-grid">
        {combinations.map((combo, index) => (
          <div key={index} className="outfit-combo">
            <img src={combo.shirt.imageUrl} alt="shirt" className="outfit-item" />
            <img src={combo.pants.imageUrl} alt="pants" className="outfit-item" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;