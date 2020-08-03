import React, { Component } from 'react';


class Message extends Component {

    render() {
        const { message } = this.props
        return (
            <section className="container">
                <div className="message">
                    <span>{message}</span>
                </div>
            </section>
        );
    }
}

export default Message;
