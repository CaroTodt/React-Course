import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <form action="">
                    <div>
                        <input type="text" name="userId"/>
                    </div>
                    <div>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <input type="text" name="body" />
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm
