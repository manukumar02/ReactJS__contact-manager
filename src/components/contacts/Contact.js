import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Consumer} from '../../context';
import axios from 'axios';

class Contact extends Component {
  
  state = {
    showContactInfo: false
  };
  
  onShowClick = (e) => {
    const enableContactInfo = this.state.showContactInfo;
    this.setState({showContactInfo: !enableContactInfo})
  }
  
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id});
    } catch (e) {
      dispatch({type: 'DELETE_CONTACT', payload: id});
    }
  }
  
  render() {
    // const {id, name, email, phone, username, website, address, company} = this.props.contact;
    const {id, name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3">
              <h4>{name}
                <i onClick={this.onShowClick} className="fas fa-angle-down"/>
                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-times"
                   style={{float: 'right'}}/>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{'Email: ' + email} </li>
                  {/*<li className="list-group-item">{'UserName: ' + username} </li>*/}
                  {/*<li className="list-group-item">{'WebSite: ' + website} </li>*/}
                  {/*<li*/}
                  {/*className="list-group-item">{'Address: ' + address.street + ' ' + address.city + ' ' + address.suite + ' ' + address.zipcode} </li>*/}
                  <li className="list-group-item">{'Phone: ' + phone} </li>
                  {/*<li className="list-group-item">{'Company: ' + company.name} </li>*/}
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>
    
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;
