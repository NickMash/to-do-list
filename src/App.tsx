import React, { useState } from 'react';
import './App.css';


let notes: any[] = [];

const App: React.FC = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const addNote = (value: any) => {
        notes.push({id: getRandomId(10000, 99999), content: value});
        setCount(count + 1);
    }

    const deleteNote = (index: number) => {
        notes.splice(index,1);
        setCount(count + 1);
    }

    return (
    <div className="main__container">
        <h1>TO DO LIST</h1>
        <form className="form">
            <input
                type="text"
                className="add_input"
                placeholder="Enter note..."
                value={input} onChange={e => setInput(e.target.value)}
            />
            <div className="add_button" onClick={() => addNote(input)}>Add</div>
        </form>
        <div className="notes_list" >{notes.map((item) => NoteItem(item, deleteNote))}</div>
    </div>
    );
}

const NoteItem: React.FC = (item: any, deleteNote) => {
    return (
        <div className="note_item" key={item.id}>
            <p>{item.content}</p>
            <div className="close" onClick={() => deleteNote(notes.indexOf(item))}>x</div>
        </div>
    );
}

const getRandomId = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default App;
