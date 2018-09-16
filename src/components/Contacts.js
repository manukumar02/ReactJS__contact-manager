import React, {Component, Fragment} from 'react';
import Contact from "./Contact";
import {Consumer} from '../context';

class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  
  deleteContact = (id) => {
    const {contacts} = this.state;
    
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    })
  }
  
  render() {
    
    return (
      <Consumer>
        {value => {
          const {contacts} = value;
          return <Fragment>
            {contacts.map(contact => (
              <Contact
                key={contact.id}
                contact={contact}
                deleteClickHandler={this.deleteContact.bind(this, contact.id)}
              />
            ))}
          </Fragment>
        }}
      </Consumer>
    )
  }
  
}

export default Contacts;