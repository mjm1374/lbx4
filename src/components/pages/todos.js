import React, { Component } from 'react';
import Axios from 'axios'
 

class Todos extends Component {
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => {  
            console.log(res.data);
            //this.setState({todos: res.data})
        
            })
            
        }
          
  render(){ 
        return (
            <div>
                <h3>Todos</h3>
                <p>Hello World</p>
            </div>
        )
    } 
}

export default Todos