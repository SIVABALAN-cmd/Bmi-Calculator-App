import React, { useDebugValue } from 'react'
import { useState } from 'react'

const Bmi = () => {
    let finalbmi=document.getElementById("bmis")
    let finalresult=document.getElementById("finalstate")
   const [height, Setheight] = useState('')
    const [weight, Setweight] = useState("")
    const [bmi, Setbmi] = useState("null")
   const [result,Setresult] = useState(0)
   //const [errormessage,Seterrormessage] = useState("nine")
function calculatebmi()
{
    if(height&&weight)
    {
        const metre=height/100;
        const final=weight/(metre*metre);
        Setbmi(final.toFixed(2))
        if(final<18.5){
            Setresult("undeweight")
            finalresult.style.color="orange";
          //  finalbmi.style.color="yelllow";
        }
        else if(final>=18.5 && final<=24.9)
        {
            Setresult("normal weight")
            finalresult.style.color="green";
          //  finalbmi.style.color="green";
        }
        else if(final>24.9 && final<=29.9)
            {
                Setresult("over weight")
                finalresult.style.Color="red";
              //  finalbmi.style.color="red";
            }
            else if( height&&weight!==Number)
            {
                alert("plaese enter a valid data")
                Setbmi("")
                Setresult("")
            }
        else{
            Setresult("obese")
        }


    }
    else{
        Setbmi(null)
        Setresult(null)
    }
    
}
function clears()
{
   
    Setheight("")
    Setweight("")
}

  return (
    <div>
        <div className="bmi-calculator">
            <div className="box"></div>
            <div className="data">
                <h1>BMI CALCULATOR</h1>
              
                <div className="input-container">
                    <label htmlFor="height">Height (cm)</label>
                    <input type="text" name="" id="height" value={height} onChange={(e)=>{Setheight
                        (e.target.value)
                    }}></input>
                </div>
                <div className="input-container">
                    <label htmlFor="weight">Weight (kg)</label>
                    <input type="text" name="weight" id="weight" value={weight} onChange={(e)=>{Setweight
                        (e.target.value)}}></input>
                </div>
                <button onClick={calculatebmi} id="calculatebutton">calculate BMI</button>
                <button onClick={clears} id="clearbutton">CLEAR</button>
                

               {result!==""&&( <div className="result">
                    <p id="bmis">Your bmi is {bmi}</p>
                    <p id="finalstate">{result}</p>
                </div>
)} 

            </div>
        </div>
    
      
    </div>
  )
}

export default Bmi
