import {useState,useEffect} from 'react';
export const ControlledForm=()=>{
    const [nameInputError,setNameInputError]=useState('')
    const {name,setName}=useState('');
    const {age,setAge}=useState('');
    const {hairColor,sethairColor}=useState('');
useEffect(()=>{
   if(name < 2){
    setNameInputError("Name has less than 2 characters");
   }

},[name]);

    return(
        <form>
            {nameInputError&&<p>{nameInputError}</p>}
            <input 
            name="name" 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={e=>setName(e.target.value)} />
                 
            <input name="age" type="text" placeholder="age" value={age} onChange={e=>setAge(e.target.value)} />
            <input name="hairColor" type="text" placeholder="haircolor" value={hairColor} onChange={e=>sethairColor(e.target.value)} />
        <button>Submit</button>
        </form>
    )
}
