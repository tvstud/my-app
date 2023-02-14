
import { useState } from 'react';
import './App.css';
import { ControlledForm } from './ControlledForm';
import {errorBoundary} from "./errorBoundary"
import { printPtops } from './printProps';

const StepOne=({gotoNext})=>(
<>
<h1>Step 1</h1>
<button onClick={()=>gotoNext({name: 'Harrison Tuja'})}>Next</button>
</>
);
const StepTwo=({gotoNext})=>(
  <>
  <h1>Step 2</h1>
  <button onClick={()=>gotoNext({Age: '29'})}>Next</button>
  </>
  );
const StepThree=({gotoNext})=>(
  <>
  <h1>Step 3</h1>
  <button onClick={()=>gotoNext({haircolor: 'black'})}>Next</button>
  </>
  );
function App() {
  return (
    <errorBoundary>
      <UncontrolledOnboardingFlow onFinish={data=>{ console.log(data);
        alert("Onboard Complete");}}>
       
<StepOne />
<StepTwo />
<StepThree />

      </UncontrolledOnboardingFlow>
    
    </errorBoundary>
    
  );
}

export default App;
