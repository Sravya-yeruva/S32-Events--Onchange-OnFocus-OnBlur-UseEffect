import React, { useRef } from "react";

function TenthMarksheet() {
  let FirstNameInputRef=useRef();
  let SecondNameInputRef=useRef();
  let EngMarksInputRef=useRef();
  let TelMarksInputRef=useRef();
  let HinMarksInputRef=useRef();
  let SocMarksInputRef=useRef();
  let SciMarksInputRef=useRef();
  let MatMarksInputRef=useRef();
  

  let EngResultRef=useRef();
  let TelResultRef=useRef();
  let HinResultRef=useRef();
  let SocResultRef=useRef();
  let SciResultRef=useRef();
  let MatResultRef=useRef();

  let resultLabelRef=useRef();
 
  
   
  return (
    <div>
      <h1 className="headingH">Student Marksheet</h1>
      <hr></hr>
      <form>
         <fieldset>
          <legend>Please Enter Your Details</legend>
         
          <div>
            <label htmlFor="input">First Name:</label>
            <input id="input" type="text" ref={FirstNameInputRef} ></input>
          </div>
          <div>
            <label htmlFor="input1">Last Name:</label>
            <input id="input1"  type="text" ref={SecondNameInputRef}></input>
          </div>
          </fieldset>
          <div>
            <label htmlFor="input2">English Marks:</label>
            <input id="input2" type="number" ref={EngMarksInputRef}
             onFocus={()=>{
              console.log("Eng on focus");
              EngMarksInputRef.current.style.backgroundColor="yellow";
            }}

            onChange={()=>{
              console.log("Eng on change");
              EngMarksInputRef.current.style.backgroundColor="blue";

             let marks=EngMarksInputRef.current.value;
              EngResultRef.current.innerHTML= marks >=35? "pass":"Fail";

              EngMarksInputRef.current.style.backgroundColor= marks >= 35? "green" : "red";
            }}

            onBlur={()=>{
              console.log("Eng on blur");
              EngMarksInputRef.current.style.backgroundColor="brown";

            }}
            ></input>
            <label ref={EngResultRef}>result</label>
          </div>
          <div>
            <label  htmlFor ="input3">Telugu Marks:</label>
            <input id="input3" type="number" ref={TelMarksInputRef}
            onFocus={()=>{
              console.log("Tel on focus");
              TelMarksInputRef.current.style.backgroundColor="yellow";
            }} 
            onChange={()=>{
              console.log("Tel on change");
              TelMarksInputRef.current.style.backgroundColor="green";
              let marks=TelMarksInputRef.current.value;
              TelResultRef.current.innerHTML= marks >=35? "😎":"😔";
            }}

            onBlur={()=>{
              console.log("Tel on blur");
              TelMarksInputRef.current.style.backgroundColor="blue";
            }}
            ></input>
            <label ref={TelResultRef}>result</label>
          </div>
          <div>
            <label  htmlFor="input4">Hindi Marks:</label>
            <input id="input4" type="number" ref={HinMarksInputRef}
             onFocus={()=>{
              console.log("Hin on focus");
              HinMarksInputRef.current.style.backgroundColor="yellow";
            }} 
            onChange={()=>{
              console.log("Hin on change");
              HinMarksInputRef.current.style.backgroundColor="green";
              let marks=HinMarksInputRef.current.value;
              HinResultRef.current.innerHTML= marks >=35? "pass":"Fail";
            }}

            onBlur={()=>{
              console.log("Hin on blur");
              HinMarksInputRef.current.style.backgroundColor="blue";
            }}
            
            ></input>
            <label ref={HinResultRef}>result</label>
          </div>
          <div>
            <label  htmlFor="input5">Social Marks:</label>
            <input id="input5" type="number" ref={SocMarksInputRef} 
             onFocus={()=>{
              console.log("Soc on focus");
              SocMarksInputRef.current.style.backgroundColor="yellow";
            }} 
            onChange={()=>{
              console.log("Soc on change");
              SocMarksInputRef.current.style.backgroundColor="green";
              let marks=SocMarksInputRef.current.value;
              SocResultRef.current.innerHTML= marks >=35? "pass":"Fail";
            }}

            onBlur={()=>{
              console.log("Soc on blur");
              SocMarksInputRef.current.style.backgroundColor="lightgreen";
            }}
            ></input>
            <label ref={SocResultRef}>result</label>
          </div>
          <div>
            <label htmlFor="input6">Science Marks:</label>
            <input id="input6" type="number" ref={SciMarksInputRef}
             onFocus={()=>{
              console.log("Sci on focus");
              SciMarksInputRef.current.style.backgroundColor="yellow";
            }} 
            onChange={()=>{
              console.log("Sci on change");
              SciMarksInputRef.current.style.backgroundColor="green";
              let marks=SciMarksInputRef.current.value;
              SciResultRef.current.innerHTML= marks >=35? "pass":"Fail";
            }}

            onBlur={()=>{
              console.log("Sci on blur");
              SciMarksInputRef.current.style.backgroundColor="orange";
            }}
            ></input>
            <label ref={SciResultRef}>result</label>
          </div>
          <div>
            <label htmlFor="input7">Maths Marks:</label>
            <input id="input7" type="number" ref={MatMarksInputRef}
             onFocus={()=>{
              console.log("Mat on focus");
              MatMarksInputRef.current.style.backgroundColor="yellow";
            }} 
            onChange={()=>{
              console.log("Mat on change");
              MatMarksInputRef.current.style.backgroundColor="green";
              let marks=MatMarksInputRef.current.value;
              MatResultRef.current.innerHTML= marks >=35? "pass":"Fail";
            }}

            onBlur={()=>{
              console.log("Mat on blur");
              MatMarksInputRef.current.style.backgroundColor="lightblue";
            }}
            ></input>
            <label ref={MatResultRef}>result</label>
          </div>
          <button type="button" onMouseMove={()=>{
            let FirstName=FirstNameInputRef.current.value;
            let SecondName=SecondNameInputRef.current.value;
            let EngMarks=Number(EngMarksInputRef.current.value);
            let TelMarks=Number(TelMarksInputRef.current.value);
            let HinMarks=Number(HinMarksInputRef.current.value);
            let SocMarks=Number(SocMarksInputRef.current.value);
            let SciMarks=Number(SciMarksInputRef.current.value);
            let MatMarks=Number(MatMarksInputRef.current.value);
            let totalMarks=EngMarks+TelMarks+HinMarks+SocMarks+SciMarks+MatMarks
            resultLabelRef.current.innerHTML=`${FirstName} ${SecondName} got total marks ${totalMarks}`

            // EngResultRef.current.innerHTML= EngMarks >=35? "pass":"Fail";
            // TelResultRef.current.innerHTML= TelMarks >=35? "pass":"Fail";
            // HinResultRef.current.innerHTML= HinMarks >=35? "pass":"Fail";
            // SocResultRef.current.innerHTML= SocMarks >=35? "pass":"Fail";
            // SciResultRef.current.innerHTML= SciMarks >=35? "pass":"Fail";
            // MatResultRef.current.innerHTML= MatMarks >=35? "pass":"Fail";


           console.log(EngMarks >=35? "pass":"Fail");
           console.log(TelMarks >=35? "pass":"Fail");
           console.log(HinMarks >=35? "pass":"Fail");
           console.log(SocMarks >=35? "pass":"Fail");
           console.log(SciMarks >=35? "pass":"Fail");
           console.log(MatMarks >=35? "pass":"Fail");

            alert(`Final Result ${totalMarks}`);

            
           
            


          }}>Result</button>
          <div>
            <label style={{width:"500px"}} ref={resultLabelRef}>Total Marks are</label>
          </div>
      
      </form>
    </div>
  );
}

export default TenthMarksheet;
