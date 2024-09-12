import React , {useState} from 'react';


const TextForm = (props) => {
  const handleUpClick = () => {
        // console.log("button is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success','Converted to Uppercase');
       
  };
  const handleLoClick = () => {
    // console.log("button is clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('success','Converted to Lowercase'); 
};
const clearText = () => {
  // console.log("button is clicked" + text);
  let newText = "";
  setText(newText);
  props.showAlert('success','Textarea is Cleared');
};
const copyText = () => {
  // console.log("button is clicked" + text);
  let text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert('success','Copied to Clipboard');
};
const reverseText = () => {
  // console.log("button is clicked" + text);
  let element;
  for (let i = text.length ; i >= 0 ; i--) {
   element = text[i];
   setText(element);
    }
    
}; 

  const handleOnChange = (e) => {
    // console.log("On change");
    setText(e.target.value);
};
    // const darkModeEnable = () => {
    //   if(darkModeEnabler === "Enable Dark Mode"){
    //     setMyStyle({ 
    //       color: "white",
    //       backgroundColor: "black"
    // });
    // setMyDarkModeEnabler("Enable Light Mode");
    //   }else{
    //     setMyStyle({
    //       color: "black",
    //       backgroundColor:"White"
    // });
    // setMyDarkModeEnabler("Enable Dark Mode");
    //   }
    // }
// const [darkModeEnabler , setMyDarkModeEnabler] = useState("Enable Dark Mode");
// const [myStyle , setMyStyle] = useState({
//   color: "black",
//   backgroundColor: "white"
// });
 const [text, setText] = useState("Assalam O Aliekum!");
  // text ="rowshan"  this is wrong way to update a var in react
    // setText("Rowshan");  this is right way to update a var in react
    return <>
  {/* <button className="btn btn-primary mx-2 my-2" onClick={darkModeEnable} >{darkModeEnabler}</button> */}
  <button className="btn btn-primary mx-2 my-2" onClick={props.toggleMode} >{props.mode==="light"?"Enable Dark Mode":"Enable Light Mode"}</button>
     <div className={`container ${props.mode!=="light"?"text-light":"text-dark"}`} >
      {/* style={props.myStyle} paste above */}
        <form>
        <h1>{props.heading}</h1> 
  <div className="form-group">
    <textarea className={`form-control outline-dark ${props.mode!=="light" ?`${props.mode} dashed`:"bg-light"} ${props.mode==="dark" ?"bg-dark":"light"} ${props.mode!=="light"?"text-light":"text-dark"}`}  placeholder='Enter Your text Here' value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
    {/* style={props.myStyle} paste above */}
  </div>
</form>
<button disabled={text.length===0} className={`btn btn-${props.mode!=="light" ?`${props.mode} text-light border font-weight-bold`:"primary"} mx-1`} onClick={handleUpClick}>Change To Uppercase</button>
<button disabled={text.length===0} className={`btn btn-${props.mode!=="light" ?`${props.mode} text-light border font-weight-bold`:"primary"} mx-1`} onClick={handleLoClick}>Change To Lowercase</button>
<button disabled={text.length===0} className={`btn btn-${props.mode!=="light" ?`${props.mode} text-light border font-weight-bold`:"primary"} mx-1`} onClick={copyText}>Copy Text</button>
<button disabled={text.length===0} className={`btn btn-${props.mode!=="light" ?`${props.mode} text-light border font-weight-bold`:"primary"} mx-1`} onClick={clearText}>Clear</button>
<button disabled={text.length===0} className={`btn btn-${props.mode!=="light" ?`${props.mode} text-light border font-weight-bold`:"primary"} mx-1`} onClick={reverseText}>Reverse</button>
    </div>
    <div className={`container ${props.mode!=="light"?`${props.mode}`:"dark"} ${props.mode!=="light"?"text-light":"text-dark"}`}>
      {/* style={props.myStyle} paste above */}
      <h2 className='my-2'>Your Text Summary</h2>
       <p>Your entered letters are {text.length} and {text.split(" ").filter((element)=>{return element.length!==0}).length} Words</p>
       <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
       <h2 className="my-2">Perview</h2>
       <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
}
// const propTypes = {};

// const defaultProps = {heading: "Set heading prop"};


// TextForm.propTypes = propTypes;
// TextForm.defaultProps = defaultProps;
export default TextForm;