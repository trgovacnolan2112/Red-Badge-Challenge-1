import React, {Component} from 'react';
import {Card, ListGroup, ListGroupItem} from 'reactstrap';


export default class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state={
            taskName: '',
            taskList: [],
        }
    }

    addTask = (e) => {
        e.preventDefault();
           this.setState({
               taskList: [...this.state.taskList, this.state.taskName],
               taskName: ''
           });
    }

    changeHandler = (e) => {
        this.setState({ taskName: e.target.value });
    };

    displayTasks = () => {
        return this.state.taskList.map((task,index) =>(
            <ListGroup key={index}>
                <ListGroupItem>{task}</ListGroupItem>
            </ListGroup>
        ));
    };

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.addTask(e)}>
                    <input placeholder='add task' value={this.state.taskName} onChange={this.changeHandler} />
                   <button type = 'submit'>Add</button>
                </form>
                <div>
                   <Card>{this.displayTasks()}</Card>
                </div>
            </div>
        )
    }
}