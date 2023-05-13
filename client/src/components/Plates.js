import React from "react";
import Modal from "./Modal";
import axios from "axios";

export default function Plates(props) {
  const { user } = props;
  const [plates, setPlates] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState({
    title: "",
    description: "",
    calories: 0,
    time: new Date(),
  });

  const axiosConfig = { "headers": {"Authorization": `Token ${user.token}` }};
  React.useEffect(() => {
    if (!modal) {
      console.log(`getting plates with token ${user.token}`)
      axios
        .get("http://localhost:8000/api/plates/", axiosConfig)
        .then((res) => setPlates(res.data))
        .catch((err) => console.log(err));
    }
  }, [modal]);

  function toggle() {
    setModal(prevModal => !prevModal);
  };
  
  function handleSubmit(item) {
    if(item.id) {
      axios
        .put(`http://localhost:8000/api/plates/${item.id}/`, item)
        .then((res) => toggle())
        .catch((err) => console.log(err));
      return;
    }
    axios
      .post("http://localhost:8000/api/plates/", item)
      .then((res) => toggle())
      .catch((err) => console.log(err));
      
  };

  function handleDelete(item) {
    axios
      .delete(`http://localhost:8000/api/plates/${item.id}`)
      .then((res) => setModal(false));
  };

  function handleLogout() {
    sessionStorage.removeItem('token');
    props.setUser({name: "", token: ""});
  }

  function createItem() {
    setActiveItem({ title: "", description: "", calories: 0, user: 1, time: new Date() })
    toggle()
  };

  function editItem(item) {
    setActiveItem(item)
    toggle()
  };

  const plateElements =  plates.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className="plate-title mr-2"
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));

  return (
    <main className="container">
      <h1 className="text-blue text-uppercase text-center my-4">Calorie Counter app</h1>
      <p>Hello, {user.name}<button onClick={handleLogout}>Logout</button></p>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button
                className="btn btn-primary"
                onClick={() => createItem()}
              >
                Add plate
              </button>
            </div>
            <ul className="list-group list-group-flush border-top-0">
              {plateElements}
            </ul>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          activeItem={activeItem}
          toggle={toggle}
          onSave={handleSubmit}
        />
      )}
    </main>
  );
}