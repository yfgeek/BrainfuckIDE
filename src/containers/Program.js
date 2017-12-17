import React from 'react';
import Interpreter from "../utils/brainfuck";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import {addProgram, deleteProgram, removeAllProgram} from "../redux/modules/actions";

class Program extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            result: '',
        };
    }

    run(){
        let i = new Interpreter(this.state.code,[]);
        this.setState(
            {
                result: i.toString()
            }
        )
    }

    render() {
        const { dispatch } = this.props;

        return (
            <main className="mdl-layout__content">
                <div id="container">
                    <div id="center" className="column">
                        {this.props.lists.map((item, id) => {
                            if (!item.deleted && id === this.props.currentId) {
                                return(
                                    <div key={id}>
                                        <CodeMirror
                                            value={item.text}
                                            options={{
                                                mode: 'string',
                                                theme: 'material',
                                                lineNumbers: true
                                            }}
                                            onChange={(editor, data, value) => {
                                                this.setState({
                                                    code: value,
                                                });
                                            }}
                                        />
                                        <div id="run">
                                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"  onClick={
                                                (e)=>{
                                                    if(!this.state.code){
                                                        this.setState({
                                                            code: item.text,
                                                        });
                                                    }
                                                    this.run();
                                                }
                                            }>
                                                <i className="material-icons">play_arrow</i>
                                            </button>
                                        </div>
                                        <p className="result">{this.state.result}</p>

                                    </div>
                                );
                            }
                        })}
                    </div>

                    <div id="left" className="column">
                        <ul class="left-list mdl-list">
                        {this.props.lists.map((item, id) => {
                            if (!item.deleted) {
                                return(
                                                            <li className="mdl-list__item"  key={id}>
                                                                <div className="mdl-list__item-primary-content">
                                                                  <i className="material-icons mdl-list__item-avatar">cloud</i>
                                                                  <a className="mdl-navigation__link"  href="#" onClick={(e)=>{
                                                                      this.props.setCurrentId(id);
                                                                  }}>{item.filename}</a>
                                                                </div>
                                                                <span className="mdl-list__item-secondary-content">
                                                                  <a className="mdl-list__item-secondary-action" href="#" onClick={(e)=>{
                                                                      dispatch(deleteProgram(id))
                                                                  }}>
                                                                      <i className="material-icons">delete</i></a>
                                                                </span>
                                                            </li>
                                                        );
                                                    }
                        })}
                        </ul>
                    </div>
                </div>

            </main>
        )
    }
}

export default Program;
