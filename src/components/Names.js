import React from 'react';

const Names = ({names,deleteName}) => {
    
    const nameList= names.map(name =>{
        return(
            <div className="name" key={name.id}>
            <div><h4>Name: {name.name} </h4></div><br></br>
            <div>Age: {name.age} </div>
            <div>Level: {name.level}</div>
            <button type="button" className="btn btn-danger" onClick={() =>{deleteName(name.id)}}> Delete name</button>
            </div>

        )
    })
        return ( 
            <div className="name-list">
                {nameList}
            </div>
          
         );
    }

 
export default Names;