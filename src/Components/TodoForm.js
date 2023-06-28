import React, {useState, useContext} from 'react';
import {FormGroup, Input, Button, Form, InputGroup} from "reactstrap";
import { TodoContext } from '../Context/TodoContext';
import { ADD_TODO } from '../Context/action.types';
import {v4} from "uuid";

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === '') {
            return alert('Please Enter a todo');
        }

        const todo = {
            todoString,
            id : v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type='text' name='todo' id='todo' placeholder='Your Next Todo'
                    value={todoString} onChange={e=>setTodoString(e.target.value)} />
                    <div className="input-group-append">
                        <Button color='warning'>Add</Button>
                    </div>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;