import React from "react";
import StudentList from "./Components/StudentList";
import './App.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddStudent from "./Components/AddStudent";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={StudentList}></Route>
            <Route path="/students" component={StudentList}></Route>
            <Route path="/add" component={AddStudent}/>
            <Route path="/edit-student/:id" component={AddStudent}/>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
