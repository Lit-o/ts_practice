import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("")
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement | null>(null)


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore:next-line
        alert(inputRef.current.value)

        // alert(inputRef.current?.value) with "?" doesn't work
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        // e.dataTransfer
        console.log('it\'s dragged')
    }
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log("Drop that rectangle")
    }


    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder="Controlled input"/>
            <br/>
            <input type="text" ref={inputRef} placeholder="Out of Control input"/>
            <br/>
            <button onClick={clickHandler}>click Handler</button>
            <div onDrag={dragHandler} draggable style={{ width: 320, height: 100, background: "green", margin: 20 }}>DnD 1</div>
            <div
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                style={{ width: 320, height: 100, background: isDrag ? "red" : "green", margin: 20 }}>DnD 2</div>
        </div>
    );
};

export default EventsExample;