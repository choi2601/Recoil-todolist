import React, { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';
import { FaPen } from 'react-icons/fa';
import './TodoModal.scss';

interface TodoModalPropsType {
    setIsModal: Dispatch<SetStateAction<boolean>>;
    modifyContents: string;
    setModifyContents: Dispatch<SetStateAction<string>>;
    onModifyTodo: () =>  void
}

const TodoModal: React.FC<TodoModalPropsType> = ({
    setIsModal,
    modifyContents,
    setModifyContents,
    onModifyTodo
}: TodoModalPropsType) => {
    const onCloseModal = useCallback((): void => {
        setIsModal(false);
    }, [setIsModal]);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target as HTMLInputElement;
        setModifyContents(value);
    }, [setModifyContents]);

    return (
        <>
      <div className='TodoModal-Overlay' onClick={onCloseModal}></div>
      <div className='TodoModal'>
        <div className='TodoModal-Title'>
          <div>할 일 수정하기</div>
          <FaPen />
        </div>

        <div className='TodoModal-Contents'>
          <input
            type='text'
            className='TodoModal-Contents-Input'
            value={modifyContents}
            onChange={onChange}
            placeholder='Todo 입력'
          />

          <button
            className='TodoModal-Contents-Button'
            onClick={onModifyTodo}
          >
            수정하기
          </button>
        </div>
      </div>
    </>
    )
}

export default TodoModal;