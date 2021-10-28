import React, { Component } from "react";

export default class User extends Component {
  state = {
    avatar_url: null,
    userName: null,
    location: null,
  };
  componentDidMount() {
    console.log("componentDidMount was called");
    this.getUserData(this.props.match.params.userId);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate was called");
    const currentUserId = this.props.match.params.userId;
    const prevUserId = prevProps.match.params.userId;

    if (currentUserId !== prevUserId){
      this.getUserData(currentUserId);
    }
  }
  getUserData(userId){
    fetch(
      `https://api.github.com/users/${userId}`
    ).then((res) => res.json())
    .then(data=>
    this.setState({
      avatar_url: data.avatar_url,
      userName: data.name,
      location: data.location,
    }));
  }

  render() {
    console.log("render was called");
    const { avatar_url, userName, location } = this.state;
    if (!avatar_url || !userName || !location) {
      return null;
    }
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{userName}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}
