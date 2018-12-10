import React, { Component } from 'react'


class Home extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            info: '这是Home组件！'
        }
    }

    render() {
        return (
            <div>
                <h2>子组件 ==> { this.state.info } </h2>
            </div>
        )
    }


}

export default Home;
