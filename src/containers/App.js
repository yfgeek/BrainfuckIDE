import React from 'react';
import Lists from './Lists';
import Program from './Program';
import { connect } from 'react-redux';

class App extends React.Component {
render() {
    const { dispatch, programs, settings } = this.props;
    return (
            <div>
                <Lists lists={programs} />
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