import React from 'react';
import {addProgram, deleteProgram, removeAllProgram} from "../redux/modules/actions";

class Lists extends React.Component {

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
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Files</span>
                    <nav className="mdl-navigation">
                        {this.props.lists.map((item, id) => {
                            if (!item.deleted) {
                                return <span key={id}>
                                        <a className="mdl-navigation__link"  href="#" onClick={(e)=>{
                                            this.props.setCurrentId(id);
                                        }}>{item.filename}</a>
                                        <a href="#" onClick={(e)=>{
                                            dispatch(deleteProgram(id))
                                        }}> Delete</a></span>;
                            }
                        })}
                    </nav>
                </div>

        )
    }

}

export default Lists;
