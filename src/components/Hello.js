import React from "react";

const Hello = () => {

    // return(
    //     <div className="dummyClass1">
    //         <h1>Hello Paul</h1>
    //     </div>
    // )
    return React.createElement(
    'div', 
     {id:'hello',className:'dummyClass'},   
    React.createElement('h1',null,'Hello paul'))
}

export default Hello;