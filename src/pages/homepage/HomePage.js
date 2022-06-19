import React, {Component} from "react";
import "./HomePage.css";
import users from "../../database";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import Card from "../../components/card/Card";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      users,
      inputValue: "",
      isModalVisible: false,
      currentUser: null,
    };
  }

  showModal = (user) => {
    this.setState({isModalVisible: true, currentUser: user});
  };

  hideModal = () => {
    this.setState({isModalVisible: false});
  };

  updateParentState = (obj) => {
    this.setState(obj);
  };

  render() {
    // console.log(this.state.inputValue);
    return (
      <div className='container'>
        <Header
          update={this.updateParentState}
          inputValue={this.state.inputValue}
        />
        <Modal
          isVisible={this.state.isModalVisible}
          hide={this.hideModal}
          users={this.state.users}
          parentState={this.state}
        />
        <Card
          users={this.state.users}
          inputValue={this.state.inputValue}
          show={this.showModal}
        />
      </div>
    );
  }
}

export default HomePage;
