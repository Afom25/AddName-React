import React,{Component} from 'react';
import Names from './components/Names';
import Addform from'./components/Addform';
import './Name.css'
import './App.css';

class App extends Component {

state = {
  names :
    [
      {name: 'Hidri',age:30,level:'black',id:1},
      {name: 'Abel', age:24,level:'gren',id:2},
      {name:'sami', age: 23,level:'blue',id:3}
    ]
  }
  addName = (name) =>{
   name.id = Math.random();
   let names = [...this.state.names,name]
   this.setState({
     names:names

   })
 }
 deleteName = (id)=> {
   let names = this.state.names.filter(name =>{
     return name.id !== id
   })
   this.setState({
     names:names
   })

 }
  render(){
  
  return (
    <div className="container">
      <div className="App">
           <h2> HELLO ADD YOU NAME </h2>
           <Names deleteName={this.deleteName} names={this.state.names}/><br></br>
           <Addform addName={this.addName}/>
    </div>

    </div>
    

  );
}
}

export default App;
