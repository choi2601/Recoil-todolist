import React from 'react';
import { GiWireCoil } from 'react-icons/gi';
import './TodoTitle.scss';

const TodoTitle: React.FC = () => {
    return (
        <div className="TodoTitle">
            <GiWireCoil className="TodoTitle-Icon"/>
            <div className="TodoTitle-Title">TodoList With Recoil</div>
        </div>
    )
}

export default TodoTitle;