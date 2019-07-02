import React, { Component } from 'react'
import todosData from './todosData';
import TodoItem from './TodoItem';
import './Todo.css';

class Todo extends Component {
    constructor(){
        super()
        this.state={
            todos: todosData
        }
        this.handleChange=this.handleChange.bind(this)
    } 
    handleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(willbeChanged => {
                if(willbeChanged.id === id)
                {
                    willbeChanged.completed = !willbeChanged.completed
                }
                return willbeChanged
            })
            return{
                todos:updatedTodos
            }
        })
    }
    render() {
        const DatasOfTodoItem = this.state.todos.map(todo => 
                                            <TodoItem
                                                key={todo.id}
                                                data={todo}
                                                handleChange={this.handleChange}
                                            />
                                                    )

        return (
            <div className="todo-list">
                {DatasOfTodoItem}
            </div>
        )
    }
}
export default Todo;