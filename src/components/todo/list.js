import React, { useState } from 'react';

// import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TodoList(props) {

  return (
    <>
    {props.list.map(item => (
    <Card border={!item.complete ? "danger" : "success"} className="todo-list">
      <Card.Header as="h5">
        {item.assignee}
        <Button onClick={() => props.handleDelete(item._id)} className="delete">X</Button>
      </Card.Header>
        <Card.Body  className={`complete-${item.complete.toString()}`}
        key={item._id}>
          <Card.Text onClick={() => props.handleComplete(item._id)}>
              {item.text}
          </Card.Text>
          <Card.Text>
          Difficulty: {item.difficulty}
          </Card.Text>
          
        </Card.Body>
        </Card>
      ))}
      </>
    
  )
}

export default TodoList;

// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

