import React from 'react';
import Program from './Program';
import { connect } from 'react-redux';
import '../public/style.css';
import '../public/header.css';
import Header from "./Header";
import {saveProgram} from "../redux/modules/actions";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: 0,
            currentCode: '',
        };
    }

    render() {
        const { dispatch, programs, settings } = this.props;
        return (
            <div>
                <div className="demo-layout-transparent mdl-layout mdl-js-layout">
                    <Header  dispatch={dispatch}
                             saveProgram={(e)=>{
                                 dispatch(saveProgram(this.state.currentId,this.state.currentCode));
                             }}
                    />
                    <Program lists={programs} currentId={this.state.currentId} dispatch={dispatch}
                             setCurrentId={(id)=>{
                                this.setState({
                                    currentId: id,
                                 });
                                }}
                             setCurrentCode={(code)=>{
                                this.setState({
                                currentCode: code,
                                });
                             }}
                    />
                </div>
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