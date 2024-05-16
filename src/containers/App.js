import React,{Component} from "react";
import CardList from "../components/CardList.js";
import { robots } from '../robots.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js'

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
        console.log('constructor');
    }


   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{ this.setState({robots:robots})});
    
   
    console.log('componentDidMount');
   }


    onSearchChange=(event)=>
        {
            this.setState({searchfield:event.target.value})
        

        // console.log(filteredRobots);
    }

     render(){
            
        const {robots,searchfield}=this.state;
        const filteredRobots=robots.filter(robots=>{
           return robots.name.toLowerCase().includes(searchfield.toLowerCase());
         })
         console.log('render');
            return !robots.length ?
           <h1>Loading</h1>:
            (
                <div className="tc">
                    <h1 className="f1">  RobotFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
        
           );
       }

    }




export default App;