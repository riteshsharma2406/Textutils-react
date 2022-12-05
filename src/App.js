import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


// let name = "Ritesh";
function App() {
  const[mode, setmode] = useState('light'); //whether dark mode is enable or not

  const[alert, setAlert] = useState(null); //alert state variable

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#121212';
      showAlert("Dark Mode has been enabled", "success")
      // setInterval(() => {
      //   document.title = "Install textutils now!"
      // }, 1000);

      // setInterval(() => {
      //   document.title = "Textutils - Home"
      // }, 2000);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light Mode has been enabled", "success")
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="Textutils" mode = {mode} toggleMode = {toggleMode}></Navbar>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Textform heading = "Enter text to analyze" mode ={mode} showAlert = {showAlert}></Textform>
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
        
          {/* <Route exact path="/" element={<Textform heading = "Enter the text to analyze" mode = {mode} showAlert = {showAlert}/>}/> */}
        {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    
    </>
  );
}

export default App;
