import React from 'react';
import Interpreter from "../utils/brainfuck";

class Program extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
        };
    }

    run(text){
        let i = new Interpreter(text,[]);
        this.setState(
            {
                result: i.toString()
            }
        )
    }

    render() {
        return (
            <div>
                {this.props.lists.map((item, id) => {
                    if (!item.deleted && id === this.props.currentId) {
                        return(
                            <div key={id}>
                            <button href="#" onClick={
                                (e)=>{
                                    this.run(item.text);
                                }
                            }>运行</button>
                                <p>程序：{item.text}</p>
                                <p>运行结果：{this.state.result}</p>
                            </div>
                            );
                    }
                })}
            </div>
        )
    }
}

export default Program;
