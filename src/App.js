import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 
 export default function App()
 {
  return(
  <div>
    
    <Step/>
  </div>);
 }
  function Step()
{
    const [Step,setstep] = useState(1);
    const [isopen,setisopn]=useState(true);
  function handalprevious()
  {
    if(Step>1)
      
      setstep((a)=> a-1);
  }
  function handalnext()
  {
    if(Step<3)
    // setstep(Step+1);
    setstep((a)=>a+1);
      //setTest({name:"pinu"});
  }
   return(
    <div>
   <button className="close" onClick={()=>setisopn((is)=>!is)}>&times;</button>

    { isopen && (
      
    <div className="steps">
      <div className="numbers">
         
           <div className={Step >= 1 ? "active" : ""}>1</div>
            <div className={Step >= 2 ? "active" : ""}>2</div>
            <div className={Step >= 3 ? "active" : ""}>3</div>
            
      </div>
     
      <Stepmessage  step={Step}>
        {messages[Step-1]}
     
        
      </Stepmessage>
      <div className="buttons">
          <Button bgcolor="blue" textcolor="white" onClick={handalprevious}>
                <span>👈</span>
                Previous
          </Button>
         <Button bgcolor="blue" textcolor="white" onClick={handalnext}>
             Next
             <span>👉</span>
         </Button>
       
        </div>
    </div>)}
    </div>
   );
}
function Stepmessage({Step,children})
{
  return(
    <div className="message"> 
   <h2> step{Step}</h2>
   {children}
    </div>
  );
}
function Button({textcolor,bgcolor,text,onClick,children})
{
  return(
    <div>
      <button style={{backgroundColor:bgcolor,color:textcolor}} 
      onClick={onClick} >        
        {children}
              </button>        
              </div>          
  );
}