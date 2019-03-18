import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/projectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Resume from './components/projects/CreateResume'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
     <NavBar />
     <Switch>
       <Route  exact path='/' component={Dashboard} />
       <Route path='/project/:id' component={ProjectDetails} />
       <Route path='/signin' component={SignIn} />
       <Route path='/signup' component={SignUp} />
       <Route path='/createresume' component ={Resume} />
     </Switch>
        </header>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
