import React, { Component } from "react";
import "./TodoApp.css";

export class TodoApp extends Component {
  state = {
    input: "",
    items:[]
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    
  };

  storeItems = event=>{
    event.preventDefault()
    const {input} = this.state
    // const allItems = this.state.items

    // allItems.push(input)

    this.setState({
      // items:allItems
      items:[...this.state.items,input],
      input:''
    })
  }

  deleteItem = key =>{
    // const allItems = this.state.items

    // allItems.splice(key,1)
    this.setState({
      // items:allItems
      items:this.state.items.filter((data,index)=>index !== key)
    })
  }

  editItem = key =>{
    const filteredItems = this.state.items.filter((data,index)=>index !== key);
    const selectedItem = this.state.items.find((data,index)=> index === key)
    this.setState({ 
      input: selectedItem ,
      items:filteredItems
     
    })
   
  }

  render() {
    const { input,items } = this.state;
  
    return (
      <div className="todo-container">
        <form className="input-section " onSubmit={this.storeItems}>
          <h1>Todo App</h1>

          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter items..."
          />
          <button  onSubmit={this.storeItems}>
            <i className="fa-solid fa-plus fa-2x"></i>
          </button>
        </form>

        <ul>
         {items.map((data,index)=>(
              <li key={index}>{data}<i onClick={() => this.deleteItem(index)} className="fa-solid fa-trash-can fa-1x delete"></i><i onClick={() => this.editItem(index)} className="fa-solid fa-pen-to-square fa-1x edit"></i></li>
    ))}
        
        </ul>
      </div>
    );
  }
}

export default TodoApp;
