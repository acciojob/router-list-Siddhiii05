import React from "react";
import './../styles/App.css';
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import { Redirect, Switch, Route } from "react-router-dom"; 

const App = () => {
  return (
    <div>
        

        <Switch>
          <Route exact path="/">
            <Redirect to="/items" />
          </Route>
          <Route exact path='/items' component={ItemList}/>
          <Route path='/items/:id' component={ItemDetail}/>
        </Switch>
    </div>
  )
}

export default App
