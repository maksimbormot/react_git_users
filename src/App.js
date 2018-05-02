import React from 'react';
import {Router, Route, Redirect, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store/configureStore';
import history from './history';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MainLayout from './layouts/MainLayout';
import UsersPage from './pages/usersPage';
import InfoPage from './pages/infoPage';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <MainLayout path='/' component={MainLayout}>
            <Switch>
              <Route exact path='/' component={() => <Redirect to="/users"/>}/>
              <Route exact path='/users' component={UsersPage}/>
              <Route exact path='/user/:name' component={InfoPage}/>
              <Route component={NotFound}/>
            </Switch>
          </MainLayout>
        </Router>
      </Provider>
    );
  }
}

export default App;
