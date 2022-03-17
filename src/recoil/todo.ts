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

export const todosState = atom<ITodoTypes[]>({
    key: 'todos',
    default: []
})