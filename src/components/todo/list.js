import React, { useState } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/';
import Card from 'react-bootstrap/Card';

function TodoList(props) {

  return (
    <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item variant={!item.complete ? "danger" : "success"} className={`complete-${item.complete.toString()}`}
        key={item._id}>
          <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
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

