import React, { useCallback } from 'react';
import './TodoList.scss';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { todosState } from '../../recoil/todo';
import type { ITodoTypes } from '../../recoil/todo';
import { getTodoList } from '../../api/getTodoList';
import TodoItem from './TodoItem/TodoItem';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todosState);
    const { isLoading, isError, data, error } = useQuery("todos", getTodoList, {
        refetchOnWindowFocus: false, 
        retry: 0,
        onSuccess: res => {
            console.log(res)
        },
        onError: (e: Error) => {
            console.log(e.message)
        }    
    })

    const onComplete = useCallback((id: number): void => {
        const updatedTodos = todos.map((todo: ITodoTypes) => {
            return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
        })
        setTodos(updatedTodos);
    }, [setTodos, todos]);

    const onDelete = useCallback((id: number) => {
        const deletedTodos = todos.filter((todo: ITodoTypes) => todo.id !== id);
        setTodos(deletedTodos);
    }, [setTodos, todos]);

    if(isError) {
        return <span>Error: {error?.message}</span>
    }

    return (
        <div className="TodoList">
            {
                todos.length > 0 ? todos.map((todo: ITodoTypes) => {
                    const { id, contents, isCompleted } = todo;

                    return (
                        <TodoItem
                            key={id}
                            id={id}
                            contents={contents}
                            isCompleted={isCompleted}
                            onComplete={onComplete}
                            onDelete={onDelete}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    )
                }) : <div className="TodoList-NoList">{isLoading ? <p>Loading...</p> : <>할 일이 없습니다. <p>자유롭게 추가해보세요!</p></>}</div>
            } 
            
        </div>
    )
}

export default TodoList;