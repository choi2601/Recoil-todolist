import React, { useCallback, useState } from 'react';
import './TodoItem.scss';
import { SetterOrUpdater } from 'recoil';
import { FaPen } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import type { ITodoTypes } from '../../../recoil/todo';

interface TodoItemPropsType {
    id: number;
    contents: string;
    isCompleted: boolean;

    onComplete: (id: number) => void;
    onDelete: (id: number) => void;

    todos: ITodoTypes[];
    setTodos: SetterOrUpdater<ITodoTypes[]>
}

const TodoItem: React.FC<TodoItemPropsType> = ({
    id,
    contents,
    isCompleted,
    onComplete,
    onDelete,
    todos,
    setTodos
}: TodoItemPropsType) => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [modifyContents, setModifyContents] = useState<string>('');

    const onModify = useCallback((): void => {
        setIsModal(true);
        setModifyContents(contents);
    }, [contents]);

    const onModifyTodo = useCallback((): void => {
        if(!modifyContents.trim()) return;

        const updatedTodos = todos.map((todo: ITodoTypes) => {
            return todo.id === id ? { ...todo, contents: modifyContents } : todo;
        })

        setTodos(updatedTodos);
        setIsModal(false);
    }, [id, modifyContents, setTodos, todos])

    return (
        <>
            <div className="TodoItem">
                <div 
                    title={contents}
                    className={isCompleted ? 'TodoItem-Completed' : ''}
                    onClick={() => onComplete(id)}
                >
                    {contents}
                </div>

                <div className="TodoItem-Icons">
                    <FaPen className="TodoItem-Icons-Pen" onClick={onModify}/>
                    <MdClose className="TodoItem-Icons-Close" onClick={() => onDelete(id)}/>
                </div>
            </div>
        </>
    )
}

export default TodoItem;