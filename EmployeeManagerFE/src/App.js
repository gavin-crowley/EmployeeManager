import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import Header from './components/Header';
import List from './components/List';
import Add from './components/Add';

function App() {
  return (
    <div>
      {/* <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={ListEmployeeComponent}></Route>
            <Route path='/employees' component={ListEmployeeComponent}></Route>
            <Route
              path='/add-employee'
              component={AddEmployeeComponent}
            ></Route>
            <Route
              path='/edit-employee/:id'
              component={AddEmployeeComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router> */}
      <>
        <div class='container-xl'>
          <div class='table-responsive'>
            <div class='table-wrapper'>
              <Router>
                {/* <HeaderComponent /> */}
                <Header />
                {/* <div className='container'> */}
                  <Switch>
                    <Route exact path='/' component={List}></Route>
                    <Route path='/employees' component={List}></Route>
                    <Route path='/add-employee' component={Add}></Route>
                    <Route path='/edit-employee/:id' component={Add}></Route>
                  </Switch>
                {/* </div> */}

                {/* <FooterComponent /> */}
              </Router>
            </div>
          </div>
        </div>
        {/* <div class='container-xl'>
          <div class='table-responsive'>
            <div class='table-wrapper'> */}
              {/* Header */}
              {/* <List /> */}
            {/* </div>
          </div>
        </div> */}
      </>
    </div>
  );
}

export default App;
