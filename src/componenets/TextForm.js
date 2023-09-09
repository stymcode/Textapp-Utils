import React, {useState} from 'react'



export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () =>{
        let newsText = text.toUpperCase();
         setText(newsText);
         props.showAlert("converted to Uppercase", "warning")
    }
    const handleLowClick = () =>{
        let newsText = text.toLowerCase();
        setText(newsText);
        props.showAlert("converted to Lowerercase", "success");
   }
   const handleClearClick = () =>{
    let newsText = ("");
    setText(newsText);
    props.showAlert("Cleared Text", "danger");
}
const handleCopy = () =>{
   var text = document.getElementById("my-box")
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert("Text Copied", "warning");
}
const handleSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Space Removed", "success");
}

    const handleOnChange = (event) =>{
        console.log("handleonchangeclicked");
        setText(event.target.value);
   }

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? `white`:`black`}}> 
         <h1>{props.heading}</h1>
         <div className="mb-3">
             <textarea className="form-control" onChange={handleOnChange} value={text} id="my-box" rows="8" style={{backgroundColor: props.mode === 'dark' ? `black`:`white`, color: props.mode === 'dark' ? `white`:`black`}}></textarea>
         </div>
        <button className="btn btn-primary mx-3"  onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-3 " onClick={handleLowClick}>Lowercase</button>
        <button className="btn btn-primary mx-3 " onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-3 " onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-3 " onClick={handleSpace}>Remove Space</button>
    </div>
       
       <div className='container' my-3 style={{color: props.mode === 'dark' ? `white`:`black`}}>
          <h2 className='my-3'>Your Text Summary</h2>
          <p>{text.split(" ").length} Words and {text.length} Characters</p>
          <p>{0.08 * text.split(" ").length} min. Read</p>
          <h2>Your Text Preview</h2>
          <p>{text.length>0 ? text:'Enter Text To see Preview'}</p>
       </div>
        
    </>
  )
}
