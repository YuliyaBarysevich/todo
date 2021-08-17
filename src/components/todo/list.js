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
  // const [currentPage, setCurrentPage] = useState(1)

  // const maxItemsOnPage = context.maxItems;

  // const sortedList = props.list.sort((leftItem, rightItem) => {
  //   if(rightItem.difficulty > leftItem.difficulty){
  //     return -1;
  //   } else if(leftItem.difficulty > rightItem.difficulty){
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // })

  // const filteredList = props.list.filter((item) => !item.complete)

  const filteredList = props.list.sort((leftItem, rightItem) => {
    if(rightItem.complete > leftItem.complete){
      return -1;
    }else if(rightItem.complete < leftItem.complete){
      return 1;
    }else{
      return 0;
    }
  })

    return (
        <section>
          <ul>
            {filteredList.map(item => (
              <li key={item._id} className={`complete-${item.complete.toString()}`}>
                <Toast>
                  <Toast.Header closeButton={false}>
                    <Badge className={!item.complete ? "completeBadge" : "pendingBadge"}>
                    {!item.complete ? "Pending" : "Complete"}
                    </Badge>
                    <strong>Priority: {item.priority}</strong>
                    <Button className="btn-close" onClick={() => props.handleDelete(item._id)}>X</Button>
                  </Toast.Header>
                  <Toast.Body onClick={() => props.handleComplete(item._id)}>
                    <h3>{item.text}</h3>
                    <small>
                    Notes:  {item.notes}
                    </small>

                  </Toast.Body>
                </Toast>
              </li>
            ))}
          </ul>
      </section>
      
    )
}

export default TodoList;



