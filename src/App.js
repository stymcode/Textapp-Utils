import './App.css';
// import About from './componenets/About';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import React, { useState } from 'react';
import Alert from './componenets/Alert';


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (meassage, type) => {
           setAlert({
            msg:meassage,
            type:type
           })
           setTimeout(()=>{
              setAlert(null);
           }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#095579';
      showAlert("Waoo Dark Mode", "danger")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Waoo Light Mode", "success")
    }
  }

  return (
    <> 
     <Navbar title='TextUtils' about='About Us' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container'>
         <TextForm showAlert={showAlert} heading="Enter The Text" my-3 mode={mode}/>
         {/* <About /> */}
        </div>
    </>
  );
}
 export default App;
