import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Todoform from './modules/Todo/Components/TodoForm';

import Todo from './modules/Todo/Components/Todo';
import RealPost from './modules/Posts/Components/RealPost';
import './index.css';

import UserFetching from './modules/Users/Components/UserFetching';

function App() {
  return (
    <Router>

      <div className="App">
        <div className="nav">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/todo">To Do List</Link>
          <Link className="link" to="/userlist/users">User List</Link>
          <Link className="link" to="/posts">Posts</Link>

        </div>
        <div className="content">
          <Switch>

            <Route path="/todo">
              <div className="wrap">
                <h1>To Do Tasks:</h1>
                <div className="box">
                  <ul>
                    <Todoform />
                    <Todo />
                  </ul>
                </div>

              </div>

            </Route>

            <Route path="/userlist">

              <UserFetching
                key={Math.random()}
              />
            </Route>

            <Route path="/posts">
              <RealPost />
            </Route>

          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
