import React, { Component } from 'react';

class Addform extends Component {
    state = {
        name:null,
        age:null,
        level:null
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addName(this.state);
    }
    render() { 
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="name" id="name" onChange={this.handleChange}/><br></br>
                    <label htmlFor="name">Age:</label>
                    <input type="name" id="age" onChange={this.handleChange}/><br></br>
                    <label htmlFor="name">Level:</label>
                    <input htmlFor="name" id="level" onChange={this.handleChange}/>
                    <br></br>
                    <button type="button" className="btn btn-dark">Submit</button>


                </form>
            </div>
          );
    }
}
 
export default Addform;