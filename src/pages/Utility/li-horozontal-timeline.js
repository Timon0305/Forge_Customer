import React, { Component } from 'react';

class LiHorizontalTimeline extends Component {

    render() {
        return (
            <React.Fragment>

                                                <div className={this.props.event.id === 3 ? "item event-list active" : "item event-list"} key={this.props.key} style={{width : 279}}>
                                                    <div>
                                                        <div className="event-date">
                                                            <div className="text-primary mb-1">{this.props.event.date}</div>
                                                            <h5 className="mb-4">{this.props.event.title}</h5>
                                                        </div>
                                                        <div className="event-down-icon">
                                                            <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                                                        </div>

                                                        <div className="mt-3 px-3">
                                                            <p className="text-muted">{this.props.event.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
            </React.Fragment>
        );
    }
}

export default LiHorizontalTimeline;
