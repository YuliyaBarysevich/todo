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
    {/* <Form onSubmit={handleSubmit}>
      <Card>
        <Card.Img src="https://images.pexels.com/photos/4359106/pexels-photo-4359106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image"/>
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title>Add ToDo Item</Card.Title>
              <Form.Group>
                <Form.Label>New Task*</Form.Label>
                <Form.Control size="lg" name="text" required  placeholder="What do you need to do?" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Notes</Form.Label>
                <Form.Control name="notes" type="text" placeholder="Additional Info" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Priority*</Form.Label>
                <Form.Control as="select" size="sm" name="priority" required onChange={handleChange}>
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
    </Form> */}
    <Card>
      <Card.Img src="https://images.pexels.com/photos/4359106/pexels-photo-4359106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image"/>
      <Card.ImgOverlay>
        <Card.Title>Add ToDo Item</Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group>
                <Form.Label>New Task*</Form.Label>
                <Form.Control size="lg" name="text" required  placeholder="What do you need to do?" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Notes</Form.Label>
                <Form.Control name="notes" type="text" placeholder="Additional Info" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Priority*</Form.Label>
                <Form.Control as="select" size="sm" name="priority" required onChange={handleChange}>
                  <option>Choose priority of the task</option>
                  <option value="High !!!">High !!!</option>
                  <option value="Medium !!">Medium !!</option>
                  <option value="Low !">Low !</option>
                  <option value="None">None</option> 
                </Form.Control>
              </Form.Group>
              <Button variant="primary" size="lg" type="submit">Add New Task</Button>
          </Form>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
    </>
  )
}

export default TodoForm;

