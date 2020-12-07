import React, { Component} from "react";
import { CardList } from './components/card-list/card-list.component.js'
import  SearchBox  from './components/card-search/card-search.component.js'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({users: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const {users,searchField} = this.state;
    const filteredUsers = users.filter(user=>
      user.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return (
      <div className="App">
        <h1>My Test App</h1>
        <SearchBox onChange={(e) => {this.handleChange(e)}} placeholder="Search User" />
        <CardList users={filteredUsers}/>
      </div>
    );
  }

}
export default App;
