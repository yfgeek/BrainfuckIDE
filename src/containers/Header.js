import React from 'react';
import {addProgram, deleteProgram, removeAllProgram} from "../redux/modules/actions";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentId: this.props.currentId,
        };
        this.counter = 0;
    }

    componentDidMount() {
    }

    addNewProgram(){
        const { dispatch } = this.props;
        dispatch(addProgram('new-'+ this.counter + '.bf' ,'++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.',''));
        this.counter++;
    }

    removeAllProgram(){
        const { dispatch } = this.props;
        dispatch(removeAllProgram());
    }

    render() {
        return (
            <div>
                <header className="mdl-layout__header mdl-layout__header--transparent">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Brainfuck Online</span>
                        <div className="mdl-layout-spacer"/>
                        <nav className="mdl-navigation">
                            <a className="mdl-navigation__link file_link" href="#"  onClick={(e)=>this.addNewProgram()}>
                                <i className="material-icons nav_file">add</i>
                                Add</a>
                            <a className="mdl-navigation__link file_link" href="#"  onClick={(e)=>this.removeAllProgram()}>
                                <i className="material-icons nav_file">delete_forever</i>
                                Delete All</a>
                            <a className="mdl-navigation__link file_link" href="#"  onClick={(e)=>this.props.saveProgram()}>
                                <i className="material-icons nav_file">save</i>
                                Save</a>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer-button">
                    <i className="material-icons logo">cloud</i>
                </div>
            </div>
        )
    }

}

export default Header;
