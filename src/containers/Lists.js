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
            <div id="left" className="column">
                <button href="#" onClick={
                    (e)=>{
                        dispatch(addProgram('new.bf','++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.',''));
                    }
                }>Add</button>
                <button href="#" onClick={
                    (e)=>{
                        dispatch(removeAllProgram());
                    }
                }>Delete All</button>
                {this.props.lists.map((item, id) => {
                if (!item.deleted) {
                    return <li key={id}>
                        <a href="#" onClick={(e)=>{
                        this.props.setCurrentId(id);
                    }}>{item.filename}</a>
                        <a href="#" onClick={(e)=>{
                      dispatch(deleteProgram(id))
                    }}> Delete</a></li>;
                }
                })}
            </div>
        )
    }

}

export default Lists;
