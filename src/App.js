import React, {useState} from 'react';
import './App.css';
import MenuCards from './components/MenuCards';
import Navbar from './components/Navbar';
import Menu from './components/menuApi';

const categories = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All"
];

function App() {

  const [item, setItem] = useState(Menu);

  const filterItem = (category) => {
    if(category === "All") {
      setItem(Menu);
      return;
    }
    const updatedItems = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setItem(updatedItems);
  }

  return (
    <div className="App">
      <Navbar categories={categories} filterItem={filterItem} />
      <MenuCards item={item} />
     </div>
  );
}

export default App;
