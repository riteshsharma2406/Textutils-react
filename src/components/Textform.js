import React, { useState } from "react";

export default function Textform(props) {

   //state variable
   const [text, setText] = useState("Enter text here");

  
  //handle on change
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  //upper case button function
  const handleUpClick = () => {
    console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); // updated text variable using setText
    props.showAlert("Converted to upper case", "success")
  };

  //lower case button function
  const handleDownClick = () => {
    console.log("lower case was clicked");
    let newText = text.toLowerCase();
    setText(newText); 
    props.showAlert("Converted to lower case", "success")
  };

  //clear button function
  const handleClearClick = () => {
    console.log("Clear was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success") 
  };

  //download button function
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob ([text],{type:"text/plain"});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("Downloaded", "success")
  }

  //copy button function
  const handleCopy =() => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success")
  }

  

 

  return (
    <>
    <div style={{color: props.mode==='dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          style={{backgroundColor: props.mode==='dark' ? '#202830' : 'white' , color: props.mode==='dark' ? 'white' : 'black'}}
          value={text}
          onChange={handleOnChange}
          rows="8"
        />
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to upper case
      </button>

      <button className="btn btn-primary mx-2" onClick={handleDownClick}>
        Convert to lower case
      </button>

      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>

      <button className="btn btn-primary mx-2" onClick={handleDownload}>Download</button>

      <buttton className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text</buttton>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
      <h2> Your text summary </h2>
      <p>{text.length==="" ? 0 : text.split('').length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter something in above textbox to preview it."}</p>
      </div>
    </>
  );
}

