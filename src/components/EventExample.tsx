import React, { FC, useState } from "react";

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [drag, setDrag] = useState<boolean>(false);

    const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(true);
    }

    const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
    }

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrag(false);
        console.log('DROP')
    }

    return (
        <div>
            <input value={value} placeholder="text" onChange={valueHandler} type="text" />
            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div onDrop={dropHandler}
             onDragLeave={onDragLeaveHandler}
             onDragOver={onDragOverHandler}
             style={{width: 200, height: 200, background: drag ? 'blue' : 'red', marginTop: 20}}></div>
        </div>
    )
}

export default EventExample;