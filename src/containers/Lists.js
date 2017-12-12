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
            <div>
                <button href="#" onClick={
                    (e)=>{
                        dispatch(addProgram('new.bf','',''));
                    }
                }>点我添加</button>
                <button href="#" onClick={
                    (e)=>{
                        dispatch(removeAllProgram());
                    }
                }>删除所有</button>
                {this.props.lists.map((item, id) => {
                if (!item.deleted) {
                    return <li key={id}>
                        <a href="#" onClick={(e)=>{
                        this.props.setCurrentId(id);
                    }}>{item.filename}</a>
                        <a href="#" onClick={(e)=>{
                      dispatch(deleteProgram(id))
                    }}>删除</a></li>;
                }
                })}
            </div>
        )
    }

}

export default Lists;
