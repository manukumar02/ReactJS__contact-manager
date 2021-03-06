import React, {Component} from 'react';
import axios from 'axios';
import {Consumer} from "../../context";
import TextInputGroup from '../layout/TextInputGroup';


class AddContact extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email: '',
      phone: '',
      errors: {}
    }
  }
  
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;
    
    if (name === '') {
      this.setState({errors: {name: 'Name is Required'}});
      return;
    }
    if (email === '') {
      this.setState({errors: {email: 'Email is Required'}});
      return;
    }
    if (phone === '') {
      this.setState({errors: {phone: 'Phone is Required'}});
      return;
    }
    
    const newContact = {
      name,
      email,
      phone
    }
    
    const result = await axios.post(`https://jsonplaceholder.typicode.com/users/`, newContact);
    dispatch({type: 'ADD_CONTACT', payload: result.data});
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
    
    this.props.history.push('/');
  }
  
  render() {
    const {name, email, phone, errors} = this.state;
    
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                Add Contact
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup label={'Name'}
                                  onChange={this.onChange}
                                  value={name}
                                  placeholder={'Enter Name...'}
                                  name={'name'}
                                  error={errors.name}/>
                  <TextInputGroup label={'Email'}
                                  onChange={this.onChange}
                                  value={email}
                                  placeholder={'Enter Email...'}
                                  name={'email'}
                                  type={'email'}
                                  error={errors.email}/>
                  <TextInputGroup label={'Phone Number'}
                                  onChange={this.onChange}
                                  value={phone}
                                  placeholder={'Enter Phone Number...'}
                                  name={'phone'}
                                  error={errors.phone}/>
                  {/*<div className="form-group">*/}
                  {/*<label htmlFor="name">Name</label>*/}
                  {/*<input type="text"*/}
                  {/*name="name"*/}
                  {/*className="form-control form-control-lg"*/}
                  {/*placeholder="Enter Name..."*/}
                  {/*value={name}*/}
                  {/*onChange={this.onChange}*/}
                  {/*/>*/}
                  {/*</div>*/}
                  {/*<div className="form-group">*/}
                  {/*<label htmlFor="email">Email</label>*/}
                  {/*<input type="text"*/}
                  {/*name="email"*/}
                  {/*className="form-control form-control-lg"*/}
                  {/*placeholder="Enter Email..."*/}
                  {/*value={email}*/}
                  {/*onChange={this.onChange}*/}
                  {/*/>*/}
                  {/*</div>*/}
                  {/*<div className="form-group">*/}
                  {/*<label htmlFor="phone">Phone Number</label>*/}
                  {/*<input type="text"*/}
                  {/*name="phone"*/}
                  {/*className="form-control form-control-lg"*/}
                  {/*placeholder="Enter Phone Number..."*/}
                  {/*value={phone}*/}
                  {/*onChange={this.onChange}*/}
                  {/*/>*/}
                  {/*</div>*/}
                  <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                </form>
              </div>
            
            </div>
          )
        }}
      </Consumer>
    )
    
  }
}

export default AddContact;