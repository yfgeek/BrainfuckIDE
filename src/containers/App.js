import React from 'react';
import Lists from './Lists';
import Program from './Program';
import { connect } from 'react-redux';
import '../public/style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: 0,
        };
    }
render() {
    const { dispatch, programs, settings } = this.props;
    return (
        <div>
            <div id="container">
                <Program lists={programs} currentId={this.state.currentId} dispatch={dispatch}  />
                <Lists lists={programs} currentId={this.state.currentId} dispatch={dispatch} setCurrentId={(id)=>{
                    this.setState({
                        currentId: id,
                    });
                    console.warn(this.state.currentId);
                }} />
            </div>
            <div id="footer">#footer</div>
        </div>
        )
    }
}

function select(state) {
    return {
        programs: state.reducer.program,
        settings: state.reducer.settings
    };
}
export default connect(select)(App);