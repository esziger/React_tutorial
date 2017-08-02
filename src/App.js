import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


class Clock extends React.Component{

  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  //this is a lifecycle hook, runs after the component output has been rendered
  componentDidMount() {
    //setup a timer in the browser to call tick() once a second
    this.timerId = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    //React merges the object I provide to the current state
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );

  }

}

class App extends Component {
  render() {
    
    function formatName(user){
      return user.firstName + ' ' +user.lastName;
    }

    const user = {
      firstName: 'Gergely',
      lastName: 'Szilagyi'
    }

    const element = (
      <h1>
        Hello, {formatName(user)}!
      </h1>
    );
    const author ={
      name : 'Gergely',
      avatarUrl: 'http://placehold.it/75'
    }

    function Avatar(props){
      return(
              <img className="Avatar"
              src={props.user.avatarUrl}
              alt={props.user.name}
            />

      );
    }

    function UserInfo(props){
      return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
              {props.user.name}
            </div>
        </div>
      );
    }


    function Comment(props) {
      return (
        <div className="Comment">
          <UserInfo user={props.author}/>
          <div className="Comment-text">
            {props.text}
          </div>
        </div>
      );
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started with this, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {element}
        </p>
        <Welcome name="Gergely"/>
        <WelcomeClass/>
        <Comment author={author}/>
        <Clock/>
      </div>
    );
  }
}

export default App;
