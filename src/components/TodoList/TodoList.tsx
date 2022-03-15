import React from 'react';
import './TodoList.scss';

const TodoList: React.FC = () => {
    return (
        <div className="TodoList">
            <div className="TodoList-NoList">할 일이 없습니다. 자유롭게 추가해보세요!</div>
        </div>
    )
}

export default TodoList;