import React, { Component } from 'react';
import './SkiResorts.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formOpen: false,
      skiResorts: [
        {
          name: 'Górka Szczęśliwicka',
          height: '152 m',
          price: '50 PLN',
          opening_hours: '10:00-20:00',
          opinion: 'Great place for beginners',
        }
      ],
    }
  }

  toggleForm() {
    this.setState(prevState => ({ formOpen: !prevState.formOpen }))
  }

  renderNewResortButton() {
    return (
      <button className='newResort' onClick={() => this.toggleForm()}>
        +
      </button>
    )
  }

  renderSkiResort(resort) {
    return (
      <li className='topLevel' key={resort.name}>
        <header>{resort.name}</header>
        <ul>
          <li>
            <span className='label'>Height:</span>{resort.height}
          </li>
          <li>
            <span className='label'>Price:</span>{resort.price}
          </li>
          <li>
            <span className='label'>Opening hours:</span>{resort.opening_hours}
          </li>
          <li>
            <span className='label'>Opinion:</span>{resort.opinion}
          </li>
        </ul>
      </li>
    )
  }

  render() {
    return (
      <div className="SkiResortsWrapper">
        <ul className="SkiResortsList">
          {this.state.skiResorts.map(resort => this.renderSkiResort(resort))}
          <li className='topLevel'>
            {this.state.formOpen ? null : this.renderNewResortButton()}
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
