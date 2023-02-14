import React from "react";

export const controlledOnboardingFlow=({children,onFinish,currentIndex,onNext})=>{
   

    
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
