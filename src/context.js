import React, {Component} from 'react';

const Context = React.createContext();

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
    ]
  }
  
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;