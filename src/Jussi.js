import React, { Component } from "react";

export default class Content extends Component {
    render() {
        return (
            <div>
                <p>Jussin puolikas</p>
                <TaskList />
            </div>
        );
    }
}


class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            input: "",
            tasks: [{ // Tehdään tasks-niminen taulukko.
                value: "Housut jalkaan", // Taulukossa on valmiiksi yksi arvo.
                id: Date.now() // Jokaiselle taulukon arvolle annetaan uniikki id-arvo, määrä millisekunteja päivämäärästä 1.1.1970 tähän päivään asti.
            }]
        };
        // "Sidonta" on pakollinen, jotta this-avainsanaa voidaan käyttää myöhemmin.
        this.addTask = this.addTask.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask() {
        const newTask = {
            value: this.state.input,
            id: Date.now()
        };
        this.setState(state => ({
            tasks: [...state.tasks, newTask],
            input: "" // Input täytyy "nollata" tässä, jotta uuden tehtävän lisättyä kenttään ei jää sen arvoa.
        }));
    }

    handleInput(evt) {
        if (evt.nativeEvent.key === "Enter") {
            this.addTask();
        } else {
            this.setState({
                input: evt.target.value
            });
        }
    }

    removeTask(id) {
        this.setState(state => {
            return {
                tasks: state.tasks.map(task => {
                    if (task.id !== id) {
                        return task;
                    } else {
                        return { ...task, deleted: true }
                    }
                })
            };
        });

        setTimeout(() => {
            this.setState(state => {
                return {
                    tasks: state.tasks.filter(t => t.id !== id)
                }
            });
        }, 1000);
    }

    render() {
        return (
            <div className="task-list">
                <h1>MUISTILISTA</h1>

                {this.state.tasks.map(t => <Task key={t.id} {...t} onClick={() => this.removeTask(t.id)} />)}

                <div className="controls">
                    <input type="text"
                        value={this.state.input}
                        onChange={this.handleInput}
                        onKeyDown={this.handleInput}
                        ref={(input) => { this.taskInput = input; }} />
                    <button onClick={this.addTask}>Add</button>
                </div>
            </div>
        )
    }
}

const Task = ({value, onClick, deleted}) => (
    <div className={`task ${deleted ? "deleted" : ""}`} >
        <button className="remove" onClick={onClick}>×</button>
        <div>{value}</div>

    </div>
);




/*

// CHECKLIST APP
var ChecklistApp = React.createClass({
    getInitialState: function() {
        return {items: []}; // Initially a blank list
    },
    updateItems: function(newItem) {
        var allItems = this.state.items.concat([newItem]); // Join new items to an array
        this.setState({items: allItems});
    },
    render: function() { // Renders all the below components
        return (
            <div>
                <ChecklistBanner/>
                <ChecklistList items={this.state.items}/>
                <ChecklistForm onFormSubmit={this.updateItems}/>
            </div>
        );
    }
});

// ----------------------------- // CHECKLIST BANNER \\ -----------------------------------
var ChecklistBanner = React.createClass({
    render: function() {
        return (
            <h3>MUISTILISTA</h3>
        );
    }
});

// THE LIST
var ChecklistList = React.createClass({
    render: function() {
        var createItem = function(itemText) {
            return (
                <div>
                    <ChecklistListItem>{itemText}</ChecklistListItem>  
                </div>
            );
        };
        return <ul>{this.props.items.map(createItem)}</ul>
    }
});

// THE ITEMS
var ChecklistListItem = React.createClass({
    render: function() {
        return (
            <li>{this.props.children}<button onclick> X </button></li>
        );
    }
});

// THE FORM
var ChecklistForm = React.createClass({
    getInitialState: function() {
        return {item: ""};
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.onFormSubmit(this.state.item);
        this.setState({item: ""});
        ReactDOM.findDOMNode(this.refs.item).focus();
        return;
    },
    onChange: function(e) {
        this.setState({
            item: e.target.value
        });
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Osta kaljaa" ref="item" onChange={this.onChange} value={this.state.item}/>
                <input type="submit" value=">" />
            </form>
        );
    }
});

*/