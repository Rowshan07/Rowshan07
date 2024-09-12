// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js'; 
import TextForm from './Components/TextForm.js'
import React, { useState } from 'react';
import Alert from "./Components/Alert.js";
import Carousal from './Components/Carousal.js'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes
  
} from "react-router-dom";


function App() {
 const toggleTheme = (e) => {
  // 
        setMode(`${e.target.id}`);
        console.log(e.target.id);
        document.body.style.background = `${e.target.id}`;
        showAlert('success','Mode has been Changed');
 }
 const toggleMode = () => {
  if(mode === "light"){
    document.body.style.background = "black";
    setMode("dark");
    
  //  setMyStyle({backgroundColor : "black",
  //     color: "white"
  //    })
     showAlert('success','Dark Mode Enabled');
    
  }else{
    setMode("light")
    document.body.style.background = "white"
   
    // setMyStyle({backgroundColor : "white",
    //   color: "black"
    //  })
     showAlert('success','Light Mode Enabled');
     
     
  }

 }
//  const [myStyle, setMyStyle] = useState({backgroundColor : "white",
//   color: "black"
//  })
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) =>{
     setAlert({
      message : message,
      type : type
     })
     setTimeout(() => {
       setAlert(null);
     }, 1500);
  }
  return (
    <>
    <Router>
    {/* navbar component */}
    <Navbar title="TextUtils" homeText="Carousal" mode={mode} toggleTheme={toggleTheme} showAlert={showAlert} /> 
    {/*  myStyle={myStyle}  paste above */}
    <Alert alert={alert}/>
  
    <div className='container my-5'>
      {/* heading is a prop .fill it using syntax like HTML attribute */}
      <Routes>
          <Route exact path="/TextForm" element={<TextForm heading="Fill In The Form Carefully" toggleMode={toggleMode} mode={mode}  showAlert={showAlert}/>}>
          
          {/*  myStyle={myStyle}  paste above */}
          </Route>
          <Route exact path="/" element={<Carousal />}>
          
          </Route>
        </Routes>
   
    
    </div>
    </Router>
    </>
  );
}

export default App;
