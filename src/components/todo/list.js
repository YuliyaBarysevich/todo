import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../context/context.js'

// import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import Pagination from 'react-bootstrap/Pagination'

function TodoList(props) {

  const context = useContext(SettingsContext);
  // const [currentPage, setCurrentPage] = useState(context.startPage)

  const maxItemsOnPage = context.maxItems;

  const sortedList = props.list.sort((leftItem, rightItem) => {
    if(rightItem.difficulty > leftItem.difficulty){
      return 1;
    } else if(leftItem.difficulty > rightItem.difficulty){
      return -1;
    } else {
      return 0;
    }
  })

  const filteredList = sortedList.filter((item) => !item.complete)

    return (
      <Pagination
      list={filteredList}
      items={maxItemsOnPage}
      renderList={(list) => (
        <>
      {list.map(item => (
        <Toast key={item._id} onClose={() => props.handleDelete(item._id)}>
          <Toast.Header>
            <Badge variant={!item.complete ? "danger" : "success"} onClick={() => props.handleComplete(item._id)}>
            {!item.complete ? "Pending" : "Complete"}
            </Badge>
          </Toast.Header>
          <Toast.Body>
            {item.text}
            Difficulty: {item.difficulty}
          </Toast.Body>
        </Toast>
      ))}
      </>

      )}/>
      
    )

  // return (
  //   <>
  //   {props.list.map(item => (
  //   <Card border={!item.complete ? "danger" : "success"} className="todo-list">
  //     <Card.Header as="h5">
  //       {item.assignee}
  //       <Button onClick={() => props.handleDelete(item._id)} className="delete">X</Button>
  //     </Card.Header>
  //       <Card.Body  className={`complete-${item.complete.toString()}`}
  //       key={item._id}>
  //         <Card.Text onClick={() => props.handleComplete(item._id)}>
  //             {item.text}
  //         </Card.Text>
  //         <Card.Text>
  //         Difficulty: {item.difficulty}
  //         </Card.Text>
          
  //       </Card.Body>
  //       </Card>
  //     ))}
  //     </>
    
  // )
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

