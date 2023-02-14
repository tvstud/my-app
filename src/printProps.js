import { Component } from "react";

export const printPtops =Component=>{

return(props)=>{
    console.log(props);
    return <Component {...props}/>
}
}