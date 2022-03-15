import React from 'react';
import './TodoTemplate.scss';
import TodoTitle from '../TodoTitle/TodoTitle';
import TodoList from '../TodoList/TodoList';
import TodoInput from '../TodoInput/TodoInput';

const TodoTemplate: React.FC = () => {
    return (
        <div className="TodoTemplate">
            <div className="TodoTemplate-Contents">
                <TodoTitle />
                <TodoList />
                <TodoInput />
            </div>
        </div>
    )
}

export default TodoTemplate;