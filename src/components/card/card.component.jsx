import React, { Component } from 'react';
import DOM from 'react-dom';
import CardFront from '../card-front/card-front.component';
import CardBack from '../card-back/card-back.component';
import './card.styles.scss';
import Flipcard from '@kennethormandy/react-flipcard';

class Card extends Component {
  constructor() {
    super()

    this.state = {
      flipped: false,
    }
  }

  render() {
    return (
      <div>
        <Flipcard type="horizontal" flipped={this.state.flipped}  onClick={e => this.setState({ flipped: !this.state.flipped })}>
          <CardFront devicon={this.props.devicon} title={this.props.title} type={this.props.type} />
          <CardBack title={this.props.title} />
        </Flipcard>
      </div>
    )
  }
}

export default Card;
        
