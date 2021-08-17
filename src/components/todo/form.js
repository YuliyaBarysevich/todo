import React, { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import useForm from '../../hooks/form';

function TodoForm(props) {

  const [ handleSubmit, handleChange ] = useForm(todo)

  function todo(form){
    props.handleSubmit(form);
  }


  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Card>
        <Card.Img src="https://images.pexels.com/photos/4359106/pexels-photo-4359106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image"/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Add To Do Item</Card.Title>

          <Form.Group>
            <Form.Label>New Task*</Form.Label>
            <Form.Control size="lg" name="text"  placeholder="What do you need to do?" onChange={handleChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Notes</Form.Label>
            <Form.Control name="notes" type="text"  placeholder="Additional Info" onChange={handleChange}/>
          </Form.Group>

          {/* <Form.Group>
            <Form.Label>Priority</Form.Label> */}
            {/* {['checkbox'].map((type) => ( <div key={`inline-${type}`}  className="mb-3">
            <Form.Check
            inline
            label="High !!!"
            name="priority"
            type={type}
            id={`inline-${type}-1`}
           
            />
            <Form.Check
            inline
            label="Medium !!"
            name="priority"
            type={type}
            id={`inline-${type}-2`}
           
           />
           <Form.Check
            inline
            label="Low !"
            name="priority"
            type={type}
            id={`inline-${type}-2`}
            
           />
           <Form.Check
            inline
            label="None"
            name="priority"
            type={type}
            id={`inline-${type}-2`}
           
           />
          </div>
          ))} */}
            {/* <Form.Control defaultValue="1" name="priority" type="range" min="1" max="4" onChange={handleChange}/>
          </Form.Group> */}
          <Form.Group>
          <Form.Label>Priority*</Form.Label>
          
          <Form.Control as="select" size="sm" name="priority" onChange={handleChange}>
          <option>Choose priority of the task</option>
          <option value="High !!!">High !!!</option>
          <option value="Medium !!">Medium !!</option>
          <option value="Low !">Low !</option>
          <option value="None">None</option>
            
          </Form.Control>

          </Form.Group>

          <Button variant="primary" size="lg" type="submit">Add New Task</Button>

        </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </Form>
    </>
  )
}

export default TodoForm;

