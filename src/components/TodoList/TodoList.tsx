import React, {FC} from 'react';
import TodoListItem from "../TodoListItem";
import './TodoList.css'
import {ITodo} from "../../types";

interface ITodoList {
    todos: Array<ITodo>
    onDeleted: (id: number) => void
    onToggleDone: (id: number) => void
    onToggleImportant: (id: number) => void
}

const TodoList: FC<ITodoList> = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

    const elements = todos.map(todo => {

        const {id, ...items} = todo

        return (
            <li className="list-group-item" key={id}>
                <TodoListItem
                    { ...items }
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        )
    })

    return (
        <ul className="list-group todoList">
            { elements }
        </ul>
    )
}

export default TodoList;
