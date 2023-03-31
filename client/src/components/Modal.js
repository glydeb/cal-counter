import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Plate</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="plate-title">Title</Label>
              <Input
                type="text"
                id="plate-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter plate Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="plate-description">Description</Label>
              <Input
                type="text"
                id="plate-description"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter plate description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="plate-calories">Calories</Label>
                <Input
                  type="number"
                  id="plate-calories"
                  name="calories"
                  checked={this.state.activeItem.calories}
                  onChange={this.handleChange}
                />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}