import React, { useState, useContext } from 'react';
import { SettingContext } from '../../context/context.js'
import Pagination from './pagination.js'

// import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';

function TodoList(props) {

  const context = useContext(SettingContext);
  const [currentPage, setCurrentPage] = useState(1)



  const filteredList = props.list.sort((leftItem, rightItem) => {
    if(rightItem.complete > leftItem.complete){
      return -1;
    }else if(rightItem.complete < leftItem.complete){
      return 1;
    }else{
      return 0;
    }
  })

  const indexOfLastTask = currentPage * context.displayCount;
  const indexOfFirstTask = indexOfLastTask - context.displayCount;
  const currentTasks = filteredList.slice(indexOfFirstTask, indexOfLastTask);
  context.setTotalTasks(filteredList.length);

  const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section>
          <ul>
            {currentTasks.map(item => (
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
          <Pagination
          tasksPerPage={context.displayCount}
          totalTasks={context.totalTasks}
          paginate={paginate} />
      </section>
      
    )
}

export default TodoList;



