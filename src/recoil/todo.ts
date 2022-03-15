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
    default: [
        {
            id: 1,
            contents: 'Recoil 학습하기',
            isCompleted: false
        },
        {
            id: 2,
            contents: '설거지 하기',
            isCompleted: false
        },
        {
            id: 3,
            contents: '이빨 닦기',
            isCompleted: false
        },

    ]
})