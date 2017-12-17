import React from 'react';
import Interpreter from "../utils/brainfuck";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import {addProgram, deleteProgram, removeAllProgram} from "../redux/modules/actions";

class Program extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: this.props.currentCode,
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
                                    <div>
                                        <CodeMirror
                                            value={this.props.currentCode}
                                            options={{
                                                mode: 'string',
                                                theme: 'material',
                                                lineNumbers: true
                                            }}
                                            onChange={(editor, data, value) => {
                                                this.setState({
                                                    code: value,
                                                });
                                                this.props.setCurrentCode(value);
                                            }}
                                        />
                                        <div id="run">
                                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"  onClick={
                                                (e)=>{
                                                    this.run();
                                                }
                                            }>
                                                <i className="material-icons">play_arrow</i>
                                            </button>
                                        </div>
                                        <div id="console">
                                            <div className="title">
                                                <i className="material-icons icon_console">build</i>
                                                <span>Console</span>
                                            </div>
                                            <p className="result">{this.state.result}</p>
                                        </div>

                                    </div>
                    </div>

                    <div id="left" className="column">
                        <ul className="left-list mdl-list">
                        {this.props.lists.map((item, id) => {
                            if (!item.deleted) {
                                let tmp = id===this.props.currentId?"mdl-list__item list_active":"mdl-list__item";
                                return(
                                                            <li className={tmp} key={id}>
                                                                <div className="mdl-list__item-primary-content">
                                                                  <i className="material-icons file">insert_drive_file</i>
                                                                  <a className="mdl-navigation__link"  href="#" onClick={(e)=>{
                                                                      this.props.setCurrentId(id);
                                                                      this.props.setCurrentCode(item.text);
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
