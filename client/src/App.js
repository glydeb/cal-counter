import React, { Component } from "react";
import Modal from "./components/Modal";

const plates = [
  {
    id: 1,
    title: "Chicken Dinner",
    description: "Fried chicken with rice and salad",
    calories: 500,
  },
  {
    id: 2,
    title: "Burger",
    description: "Two all beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun",
    calories: 800,
  },
  {
    id: 3,
    title: "Balanced Breakfast",
    description: "Scrambled eggs, toast, and fresh fruit",
    calories: 400,
  },
  {
    id: 4,
    title: "Mini Clif Bar",
    description: "Mini Clif Bar",
    calories: 100,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeItem: {
        title: "",
        description: "",
        calories: 0
      },
      plateList: plates,
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  
  handleSubmit = (item) => {
    this.toggle();

    alert("save" + JSON.stringify(item));
  };

  handleDelete = (item) => {
    alert("delete" + JSON.stringify(item));
  };

  createItem = () => {
    const item = { title: "", description: "", calories: 0 };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const newItems = this.state.plateList

    return newItems.map((item) => (
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
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Calorie Counter app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={() => this.createItem()}
                >
                  Add plate
                </button>
              </div>
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal && (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        )}
      </main>
    );
  }
}
export default App;
