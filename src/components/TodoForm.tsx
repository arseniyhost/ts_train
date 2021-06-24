import React, { useRef } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
  }

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('');

    // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.target.value);
    // }

    const ref = useRef<HTMLInputElement>(null);


    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = '';
            // console.log(title)
            // setTitle('');
        }
    }

    return (
        <div className="input-field mt2">
            <input
                // onChange={changeHandler}
                onKeyPress={keyPressHandler}
                // value={title}
                type="text"
                id="title"
                ref={ref}
                placeholder="Введите название дела"
            />
            <label htmlFor="title" className="active">Введите название дела</label>

        </div>
    )
}