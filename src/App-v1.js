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
  function heandalprevioues()
  {
    if(Step>1)
      //setstep(Step-1);
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
      <p className="message"> 
       step{Step}:{messages[Step-1]}
       
      </p>
      <div className="buttons">
        <button style={{backgroundColor:'blue',color:'white'}} 
            onClick={heandalprevioues}>    Previous       
        </button>
        <button style={{backgroundColor:'blue',color:'white'}} onClick={handalnext}>
          Next         
        </button>
      </div>
    </div>)}
    </div>
   );
}