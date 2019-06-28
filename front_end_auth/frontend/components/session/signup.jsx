import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value 
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let that = this;
    this.props.createNewUser(this.state)
      .then(() => {
        return that.props.history.push('/chirps');
      });
  }
  
  render () {
    return (
      <div className="session-form">
        <h2>Signup</h2>
        <form>
          <label>Username: 
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.handleInput('username')}/>
          </label>
          <br/>
          <label>Email: 
            <input 
              type="text" 
              value={this.state.email} 
              onChange={this.handleInput('email')}/>
          </label>
          <br/>
          <label>Password: 
            <input 
              type="text" 
              value={this.state.password} 
              onChange={this.handleInput('password')}/>
          </label>
          <button onClick={this.handleSubmit}>Sign up</button>
        </form>
      </div>
    );
  }
};

export default SignUp;