import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { FaPen } from 'react-icons/fa';
import { inputState, todosState } from '../../recoil/todo';
import { ITodoTypes } from '../../recoil/todo';
import './TodoInput.scss';

const TodoInput: React.FC = () => {
    const [contents, setContents] = useRecoilState<string>(inputState);
    // const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todosState);

    // useRecoilValue = get 변수
    // useStateRecoilState = setter 지정
    // 아래와 같이 get과 setter를 분리하여 사용하는 방법
    const todos = useRecoilValue<ITodoTypes[]>(todosState);
    const setTodos = useSetRecoilState<ITodoTypes[]>(todosState);

    const addTodo = useCallback((): void => {
        if(!contents.trim()) return;

        const nextId: number = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

        const todo: ITodoTypes = {
            id: nextId,
            contents,
            isCompleted: false
        };

        const addedTodos = [...todos, todo];
        setTodos(addedTodos);

        setContents('');
    }, [contents, setContents, setTodos, todos])

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target as HTMLInputElement;
        setContents(value);
    }, [setContents]);

    const onKeyUp = useCallback((e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') addTodo();
    }, [addTodo]);

    return (
        <div className="TodoInput">
            <input 
                type="text"
                className="TodoInput-Input"
                value={contents}
                onChange={onChange}
                onKeyUp={onKeyUp}
                placeholder="Todo를 입력해보세요!"
            />
            <FaPen className="TodoInput-Button" onClick={addTodo}/>
        </div>
    )
}

export default TodoInput;