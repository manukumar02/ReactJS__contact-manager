import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

    state = {
        showContactInfo: false
    };

    onShowClick = (e) => {
        const enableContactInfo = this.state.showContactInfo;
        this.setState({showContactInfo: !enableContactInfo})
    }

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }

    render() {
        const {name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>{name} <i onClick={this.onShowClick} className="fas fa-angle-down"></i>
                    <i onClick={this.onDeleteClick} className="fas fa-times" style={{float: 'right'}}></i>
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">{'Email: ' + email}</li>
                        <li className="list-group-item">{'Phone: ' + phone} </li>
                    </ul>
                ) : null}
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;
