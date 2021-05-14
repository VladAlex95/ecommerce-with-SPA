import { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
}from "react-router-dom";
import pozaf from './poze/Pozafundal.jpg';
import Telefoane from "./Telefoane";
import Laptopuri from "./Laptopuri";
import Televizoare from "./Televizoare";
import Console from "./Console";
import Acasa from "./Acasa";
import Contact from "./Contact";
class App extends Component{

///////////////////////

state = {
  data: null
};




componentDidMount() {
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
}
  // fetching the GET route from the Express server which matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
}
////////////////////////////
  render(){
    return (
      <HashRouter>
      <div>
         <div className ="poz1">
           <center>
             <img src ={pozaf} width ="300" height="200" alt ="eyes" />
             </center>
         </div>
        <ul className ="header">
        <li><NavLink  exact to ="/">Acasa</NavLink></li>
        <li>< NavLink to="/telefoane">Telefoane</NavLink></li>
        <li><NavLink to="/laptopuri">Laptopuri</NavLink></li>
        <li><NavLink to="/televizoare">Televizoare</NavLink></li>
        <li><NavLink to="/console">Console</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component ={Acasa}/>
          <Route path ="/telefoane" component={Telefoane}/>
          <Route path ="/laptopuri" component ={Laptopuri}/>
          <Route path ="/televizoare" component ={Televizoare}/>
          <Route path ="/console" component ={Console}/>
          <Route path ="/contact" component ={Contact}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
