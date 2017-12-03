import React from 'react';

class Lists extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
    }


    loadLists() {
            this.props.program.map((item, index) => {
                if (!item.deleted) {
                    return <p>item.index item.filename</p>;
                }
            })
    }


    render() {
        return (
            <div>
                <a href="#">点我添加</a>
                <p>{this.loadLists}</p>
            </div>
        )
    }

}

export default Lists;
