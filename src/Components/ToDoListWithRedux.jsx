import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, updateToDo, deleteTodo } from "../slices/todoSlice";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ToDoListWithRedux = () => {
  const [addedItem, setAddedItem] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.todo.todoList);
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [currentDesc, setCurrentDesc] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");

  const handleClose = () => setShow(false);
  const handleUpdate = () => {
    dispatch(
      updateToDo({
        description: currentDesc,
        id: currentId,
        status: currentStatus,
      })
    );
    setShow(false);
  };
  const handleShow = (item) => {
    setCurrentId(item.id);
    setCurrentDesc(item.description);
    setCurrentStatus(item.status);
    setShow(true);
  };
  return (
    <div>
      <input
        type="text"
        value={addedItem}
        onInput={(e) => setAddedItem(e.target.value)}
      />
      <input
        type="text"
        value={searchTerm}
        placeholder="search"
        onInput={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(
            addToDo({
              id: "a" + Math.floor(Math.random() * 1300),
              description: addedItem,
              status: "new",
            })
          )
        }
      >
        Add
      </button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {toDoList &&
            toDoList
              .filter((item) => item.description.includes(searchTerm))
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                  <td>
                    <button onClick={() => dispatch(deleteTodo(item.id))}>
                      delete
                    </button>
                  </td>
                  <td>
                    {" "}
                    <Button variant="primary" onClick={() => handleShow(item)}>
                      Update
                    </Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="desc">Description</Form.Label>
          <Form.Control
            id="desc"
            aria-describedby="Description"
            value={currentDesc}
            onChange={(e) => setCurrentDesc(e.target.value)}
          />
          <Form.Label htmlFor="status">Status</Form.Label>
          <Form.Control
            id="status"
            aria-describedby="status"
            value={currentStatus}
            onChange={(e) => setCurrentStatus(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ToDoListWithRedux;
