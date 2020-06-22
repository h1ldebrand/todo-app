import React, {FC} from 'react';
import './TodoListItem.css';
import {ITodoWithoutId} from "../../types";

interface ITodoListItem extends ITodoWithoutId {
    onDeleted: () => void
    onToggleDone: () => void
    onToggleImportant: () => void
}

const TodoListItem: FC<ITodoListItem> = (props) => {

    const {label,
            onDeleted,
            onToggleDone,
            onToggleImportant,
            done,
            important
        } = props;

    const classNames = [
        'todoListItem',
        done ? 'done' : '',
        important ? 'important' : ''
    ].join(' ');

    return(
        <span className={classNames}>
        <span
            className="todoListItem__label"
            onClick={onToggleDone}
        >
            {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}
        >
            <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}
        >
            <i className="fa fa-trash-o" />
        </button>
    </span>
    );
}

export default TodoListItem;
