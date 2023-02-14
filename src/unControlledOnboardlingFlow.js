import React, {useState} from "react";

export const UncontrolledOnboardingFlow=({children,onFinish})=>{
    const [onboardingData,setonboardingData]=useState({});
    const [currentIndex,setcurrentIndex]=useState(0);

    
    const gotoNext=stepData=>{
        const nextIndex=currentIndex + 1;
        const updatedData={
            ...onboardingData,
            ...stepData,
        };
        console.log(updatedData);
        if (nextIndex<children.length){
            setcurrentIndex(nextIndex);
        }
        else{
            onFinish(updatedData);
        }
       setonboardingData(updatedData);

    }
    const currentChild=React.Children.toArray(children)[currentIndex];
    
     if(React.isValidElement(currentChild)){

        return React.cloneElement(currentChild,{gotoNext});
    }
return currentChild;
}
