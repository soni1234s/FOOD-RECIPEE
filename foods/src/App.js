import React,{useState,useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import axios from 'axios';
function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes,setRecipes] = useState([]);
  const APP_ID="b83c5be0";
  const APP_KEY="545083471ae54e2ae659836e6c8e5d1a";
  useEffect(()=>{
    getRecipe();
  },[]);
  const getRecipe=async ()=>{
    const res=await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    

    setRecipes(res.data.hits);
  }
  const InputChange=(e)=>{
    setSearch(e.target.value);
  }
  const onSearchChange=()=>{
    getRecipe();
  }
  return ( 
    <div className="App">
     
      <Header search={search} onInputChange={InputChange} onSearchChange={onSearchChange}/>
      <div className="container">
      <Recipes recipes={recipes} /></div>
    </div>
  );
}

export default App;
