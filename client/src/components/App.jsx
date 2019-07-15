import React from 'react';
import axios from 'axios'
import './styling.css';
import Button from './Button.jsx'
import Rankings from './Rankings.jsx'
import SeeReviews from './seeReviews.jsx'
import Reviews from './reviews.jsx'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      id: 5,
      reviews: []
    }
  }

  componentDidMount() {
    const self = this
    axios.get(`http://ec2-52-15-94-164.us-east-2.compute.amazonaws.com:3004/id/${self.state.id}`)
      .then(function (response) {
      self.setState({ reviews: response.data})
    })
      .catch(function (error) {
      console.log(error)
    })
    // document.addEventListener('testEvent', data => {
    //   console.log('Item view received this id: ', data)
    // });
  }



  // setCurrentItem (item) {
  //   // create a detail object to pass to your event with
  //   // your data as the value
  //   const detail = { detail: item }
    
  //   // create a custom event with an agreed-upon event
  //   // name (in this case, 'setCurrentItem')
  //     const event = new CustomEvent('setCurrentItem', detail);
    
  //   // add an event dispatcher to the document object, so
  //   // others can 'listen' for this event no matter who
  //   // dispatches it
  //     document.dispatchEvent(event);
  // }


  // componentDidMount () {
  //   // create a callback that executes some behavior when
  //   // the event fires
  //   const callback = (data) => this.setState({ foo: data });
    
  //   // create an event listener that matches the event
  //   // name you're listening for on the document
  //     document.addEventListener('setCurrentItem', callback);
  // }



  render () {
    return (
      <div>
      <div className="headcontainerR">
      <div id="titleR" >Ratings and Reviews</div>
      <div></div>
      <div> <Button /></div>
      </div>
      <hr></hr>
      <br></br>
      <div><Rankings /></div>
      <hr></hr>
      <div className="containerR">
      <div id="subtitleR" >Most Relevant Reviews</div>
      <div></div>
      <SeeReviews />
      </div>
      <br></br>
      <Reviews list={this.state.reviews}/>
      </div>
    )
  }
}

export default App;