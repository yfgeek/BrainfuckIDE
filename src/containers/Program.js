import React from 'react';
import Interpreter from "../utils/brainfuck";
import {UnControlled as CodeMirror} from 'react-codemirror2'

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
        return (
            <div id="center" className="column">
                {this.props.lists.map((item, id) => {
                    if (!item.deleted && id === this.props.currentId) {
                        return(
                            <div key={id}>
                            <button onClick={
                                (e)=>{
                                    if(!this.state.code){
                                        this.setState({
                                            code: item.text,
                                        });
                                    }
                                    this.run();
                                }
                            }>Run</button>
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
                                <p className="result">{this.state.result}</p>
                            </div>
                            );
                    }
                })}
            </div>
        )
    }
}

export default Program;
