import React, { Component } from "react";
import Pagination from "./Pagination.jsx";
import User from "./User.jsx";

export default class UserList extends Component {
  state = {
    pageNumber: 1,
    usersPerPage: 3,
  };
  handlePrev = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };
  handleNext = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };
  render() {
    const {users} = this.props
    const { pageNumber, usersPerPage } = this.state;
    const startIndex = (pageNumber - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToRender =users.slice(startIndex, endIndex);
    return (
      <div>
        <Pagination
          usersPerPage={3}
          usersCount={users.length}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          pageNumber={pageNumber}
        />

        <ul className="users">
          {usersToRender.map((user) => (
            <User key={user.id} user={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}
