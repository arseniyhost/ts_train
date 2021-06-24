import React, { FC } from 'react'
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div>
            <div>
                <input type="checkbox" checked={todo.completed} />
            </div>
            {todo.id}. {todo.title}
        </div>
    )
}

export default TodoItem;
