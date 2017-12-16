import React from 'react';
import {addProgram, deleteProgram, removeAllProgram} from "../redux/modules/actions";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentId: this.props.currentId,
        };
    }

    componentDidMount() {
    }

    render() {
        const { dispatch } = this.props;
        return (
            <header className="mdl-layout__header mdl-layout__header--transparent">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Brainfuck</span>
                    <div className="mdl-layout-spacer"/>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href="#"  onClick={
                            (e)=>{
                                dispatch(addProgram('new.bf','++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.',''));
                            }
                        }>Add</a>
                        <a className="mdl-navigation__link" href="#"  onClick={
                            (e)=>{
                                dispatch(removeAllProgram());
                            }
                        }>Delete All</a>
                    </nav>
                </div>
            </header>
        )
    }

}

export default Header;
