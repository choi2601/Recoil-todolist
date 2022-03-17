import { atom } from 'recoil';

export interface ITodoTypes {
    id: number;
    contents: string;
    isCompleted: boolean;
}

export const inputState = atom<string>({
    key: 'inputState',
    default: ''
})

export const todoIdState = atom<number>({
    key: 'todoId',
    default: 1
})

export const todosState = atom<ITodoTypes[]>({
    key: 'todos',
    default: []
})