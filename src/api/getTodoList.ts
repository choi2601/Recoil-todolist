import axios from 'axios';

export const getTodoList = async () => {
    await new Promise(r => setTimeout(r, 1000));
    
    return await axios.get('http://localhost:3000/data/todoList.json');
}