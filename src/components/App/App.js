import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter'
import ItemAddForm from '../ItemAddForm'

import './App.css';

export default class App extends Component{

    maxId = 100;

    createTodoItem(text) {
        return {
            label : text,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            todoData : [
                this.createTodoItem("Drink coffee"),
                this.createTodoItem("Make awesome app"),
                this.createTodoItem("Have a lunch"),
            ],
            searchText: '',
            filter: 'all'

        };

        this.onDeleted = this.onDeleted.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.onToggleImportant= this.onToggleImportant.bind(this);
        this.setSearchText = this.setSearchText.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    onDeleted(id) {
        this.setState(({todoData}) => (
            { todoData: todoData.filter(data => data.id !== id) }
        ))
    }

    onAddItem(data) {
        this.setState(({todoData}) => {
            const newData = this.createTodoItem(data);
            return {todoData: [...todoData, newData]}
        })
    }

    onToggle(arr, id, param) {
        return arr.map(data => {
            if(data.id === id){
                const {[param] : temporary, ...others} = data;
                return {...others, ...{[param]: !temporary}};
            }
            return data
        })
    }

    onToggleImportant(id) {
        this.setState(({todoData}) => (
            {todoData: this.onToggle(todoData, id, "important")}
        ))
    }

    onToggleDone(id) {
        this.setState(({todoData}) => (
            {todoData: this.onToggle(todoData, id, "done")}
        ))
    }

    onSearch(data, text) {
        if(!text) return data;
        return data.filter(item => (
                item.label.toLowerCase()
                    .indexOf(text.toLowerCase()) !== -1
            ))

    }

    setSearchText(text) {
        this.setState({
            searchText: text
        })
    }

    setFilter(filter){
        this.setState({filter})
    }

    todoFilter(todos, filter) {
        switch (filter) {
            case "all": return todos;
            case "active": {
                return todos.filter(todo => !todo.done)
            }
            case "done": {
                return todos.filter(todo => todo.done)
            }
            default: return todos;
        }
    }

    render() {

        const {todoData, searchText, filter} = this.state;
        const doneCount = todoData.filter(todo => todo.done).length;
        const todoCount = todoData.length - doneCount;

        const visibleTodos = this.todoFilter(this.onSearch(todoData, searchText), filter);

        return (
            <div className="todoApp">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="topPanel d-flex">
                    <SearchPanel onSearch={this.setSearchText}/>
                    <ItemStatusFilter
                        setFilter={this.setFilter}
                        isActive={filter}
                    />
                </div>

                <TodoList
                    todos={visibleTodos}
                    onDeleted={this.onDeleted}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm onAddItem={this.onAddItem}/>
            </div>
        )
    }

}

