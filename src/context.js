import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
          contact.id !== action.payload
        )
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '555-444-3333'
      },
      {
        id: 2,
        name: 'Manu Sharma',
        email: 'mshar@gmail.com',
        phone: '555-455-444'
      },
      {
        id: 3,
        name: 'Kiran SH ',
        email: 'kshar@gmail.com',
        phone: '555-422-1111'
      }
    ],
    dispatch: action => this.setState(state =>
      reducer(state, action))
  }
  
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const
  Consumer = Context.Consumer;