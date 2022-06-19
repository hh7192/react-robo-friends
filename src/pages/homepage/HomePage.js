import React, {Component} from "react";
import "./HomePage.css";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import Card from "../../components/card/Card";
import Loading from "../../components/loading/Loading";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      inputValue: "",
      currentUser: null,
      isModalVisible: false,
      isLoad: false,
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoad: true,
          users: data,
        });
        // console.log(this.state.users);
      });
  };

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
    if (!this.state.isLoad) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
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
}

export default HomePage;