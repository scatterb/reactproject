import React, { Component } from 'react';
import ReactDOM from 'react-dom'; // Needed for THE FORM

export default class Content extends Component {
    render() {
        return (
            <div>
                <p>Jussin puolikas</p>
                <ChecklistApp />
            </div>
        );
    }
}

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
