import React, { Component } from 'react'
import { Form, Input, Button } from 'reactstrap'

export default class ToDoIndex extends Component {
    constructor (props) {
        super(props)
        this.state = {
            newTask: '',
            taskList: [],
            taskToDelete: ''
        }
    }

    addTask(e) {
        e.preventDefault();
        this.setState({ taskList: [...this.state.taskList, this.state.newTask] })
        this.setState({ newTask: ''});
        
    }
    
    deleteItem(e, index) {
        e.preventDefault();
        let taskListCopy = this.state.taskList
        taskListCopy.splice(index, 1)
        this.setState({ taskList: taskListCopy })
        console.log(this.state.taskList)
    }


    render() {
        return(
        <div>
            <div>
            <Form >
            <Input type="text" value={this.state.newTask} onChange={(e) => {this.setState({ newTask: e.target.value })}}/>
            <Button onClick={(e) => this.addTask(e)}>Submit</Button>
            </Form>
            </div>
            <div>
                <h2>To-Do List:</h2>
                {(this.state.taskList.length === 0) ? <p>Nothing to do right now!</p> :
                this.state.taskList.map((task, index) => {
                    return(
                        <>
                        <li key={index}>{task}</li>
                        <Button onClick={(e) => this.deleteItem(e, index)}>Done!</Button>
                        </>
                    )
                })
          }
            </div>
        </div>
        )
    }
}

