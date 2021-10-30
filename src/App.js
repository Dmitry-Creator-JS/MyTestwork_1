import './styles/App.css';
import Articles from "./components/articles/Articles";
import Header from "./components/header/Header";
import {Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Photos from "./components/photos/Photos";
import MyButton from "./components/sharedUI/myButton/MyButton";
import React from "react";
import MyModal from "./components/sharedUI/myModal/MyModal";


function App() {
  return (
    <div className="App">

        <div className='header'>
            <Header/>
        </div>

        <div> <MyModal/> </div>
<div>
    <div className='list-btns'>
        <div className='list-bigCard'> <MyButton> Make big cards </MyButton> </div>
        <div className='list-addCard'> <MyButton  > Add card </MyButton> </div>
    </div>
    <Switch>
        <Route path='/posts' component={Articles}/>
        <Route path='/users' component={Users}/>
        <Route path='/photos' component={Photos}/>
    </Switch>

</div>

    </div>
  );
}

export default App;
