import React from 'react';

class Program extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.lists.map((item, id) => {
                    if (!item.deleted && id === this.props.currentId) {
                        return <p key={id}>程序：{item.text}</p>;
                    }
                })}
            </div>
        )
    }
}

export default Program;
