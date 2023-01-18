import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import List from './components/List';
import Add from './components/Add';

function App() {
  return (
    <div>
      <>
        <div className='container-xl'>
          <div className='table-responsive'>
            <div className='table-wrapper'>
              <Router>
                <Header />
                <Switch>
                  <Route exact path='/' component={List}></Route>
                  <Route path='/employees' component={List}></Route>
                  <Route path='/add-employee' component={Add}></Route>
                  <Route path='/edit-employee/:id' component={Add}></Route>
                </Switch>
              </Router>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
