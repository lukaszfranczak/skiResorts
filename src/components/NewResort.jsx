import React, { Component } from 'react';
import './NewResort.css';

class NewResort extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resort: {},
    }
  }

  handleChange(attr, value) {
    this.setState(prevState => ({
      resort: { ...prevState.resort, [attr]: value }
    }))
  }

  submitForm(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state.resort)
  }

  render() {
    return (
      <form className='newResortForm'>
        <div>
          <label>Name:</label>
          <input onChange={(e) => this.handleChange('name', e.target.value)} />
        </div>
        <div>
          <label>Height:</label>
          <input onChange={(e) => this.handleChange('height', e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input onChange={(e) => this.handleChange('price', e.target.value)} />
        </div>
        <div>
          <label>Opening hours:</label>
          <input onChange={(e) => this.handleChange('opening_hours', e.target.value)} />
        </div>
        <div>
          <label>Opinion:</label>
          <input onChange={(e) => this.handleChange('opinion', e.target.value)} />
        </div>
        <button
          className='submitButton'
          onClick={(e)=>this.submitForm(e)}
          type='submit'
        >
          Submit
        </button>
      </form>
    )
  }
}

export default NewResort;
