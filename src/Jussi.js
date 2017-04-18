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
            input : "",
            tasks: [ // Tehdään tasks-niminen taulukko.
                // value: "Housut jalkaan", // Taulukossa on valmiiksi yksi arvo.
                // id: Date.now() // Jokaiselle taulukon arvolle annetaan uniikki id-arvo, määrä millisekunteja päivämäärästä 1.1.1970 tähän päivään asti.
            ]
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
                        ref={(input) => { this.taskInput = input; }}
                        placeholder="Osta maitoa" />
                    <button onClick={this.addTask}>Lisää</button>
                </div>
            </div>
        )
    }
}

const Task = ({value, onClick, deleted}) => (
    <div className={`task ${deleted ? "deleted" : ""}`} >
        <button className="remember"onClick={onClick}>{value}</button>

    </div>
);

