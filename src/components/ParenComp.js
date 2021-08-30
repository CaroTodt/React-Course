import React, { Component } from 'react'
import RegComp from './ParenComp'
import PureComp from './PureComp'
class ParenComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Carolina'
        }
    }

    componentDidMount(){
        setInterval (() =>{
            this.setState({
                name:'Carolina'
            })
        
        },2000)
    }
    
    render() {
        console.log
        return (
            <div>
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParenComp
