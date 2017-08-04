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


class Toggle extends React.Component{

constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

//using property initializer syntax to define an event function
handleClick= () =>{
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

render(){
  return(
   <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
  )
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

    function UserGreeting(props) {
      return <h1>Welcome back!</h1>;
    }

    function GuestGreeting(props) {
      return <h1>Please sign up.</h1>;
    }

    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }

    //Inline if with logical && operator
    function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
        return (
          <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
              <h2>
                You have {unreadMessages.length} unread messages.
              </h2>
            }
          </div>
        );
      }

    const messages = ['React', 'Re: React', 'Re:Re: React'];

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );


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
        <Toggle/>
        <Greeting isLoggedIn ={false}/>
        <Mailbox unreadMessages={messages}/>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;
