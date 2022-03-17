import React from 'react';
import { useRecoilState } from 'recoil';
import { todoIdState } from '../../recoil/todo';
import { GiWireCoil } from 'react-icons/gi';
import './TodoTitle.scss';

const TodoTitle: React.FC = () => {
    const [todoId, setTodoId] = useRecoilState<number>(todoIdState);

    return (
        <div className="TodoTitle">
            <GiWireCoil className="TodoTitle-Icon"/>
            <div className="TodoTitle-Title" onClick={() => {setTodoId(todoId + 1)}}>TodoList With Recoil</div>
        </div>
    )
}

export default TodoTitle;