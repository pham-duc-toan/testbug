import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [check, scheck] = useState(false);
  const [data, setData] = useState ([]);
  const [tab,setTab] =useState("products");
  const res2 ="json()";
  function show () {
    scheck(!check);
  }
  useEffect(()=> {
    fetch(`https://dummyjson.com/${tab}`)
      .then (res => res.json())
      .then (res => {
        console.log( res['products'] === res.products);
        setData(res [tab]); 
      })
      
  },[tab]);
  return (
    <>
    <button onClick={() => { setTab("products") } }>product</button>
    <button  onClick={() => { setTab("posts") } }>post</button>
    <button onClick={show}>Menu</button>
    
      <ul>
        { 
          data.map(item=>(
            <li key={item.id}>
              {item.title}
            </li>
          )
            
          )
        
          
        }
      </ul>
    
    {
    check && 
    (
      <ul>
      <li>Muc 1</li>
      <li>Muc 2</li>
      <li>Muc 3</li>
    </ul>
    )
    } 
    
      
     
     </>
    
  );
}

export default App;
