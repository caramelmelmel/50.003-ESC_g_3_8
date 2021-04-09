import React, { Component } from 'react';

class NCBadge extends Component {
    render() { 
        /*let classes = "badge rounded-pill bg-danger"
        let value = 1
        if (!this.props.item.resolved) value = null */
        let value = null;

        return (
            <span className="badge rounded-pill bg-danger">{value}</span>);
    }
}
 
export default NCBadge;