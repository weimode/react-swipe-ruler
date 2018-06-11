import React, { Component } from 'react';
import './SwipeRuler.css';

const space = 13;
const DEFAULT_RANGE = [0, 10];

export default class SwipeRuler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentX: null,
      moveLeft: 0,
      value: 0,
    };
  }
  onTouchStart = (event) => {
    const e = event || window.event;
    const { pageX: x } = e.touches[0];
    this.setState({ currentX: x });
  }
  onTouchMove = (event) => {
    const { currentX, moveLeft } = this.state;
    const e = event || window.event;
    const { pageX: x } = e.touches[0];
    const left = moveLeft + (x - currentX);
    this.setState({ currentX: x, moveLeft: left });
  }
  onTouchEnd = () => {
    const { range = DEFAULT_RANGE } = this.props;
    const { moveLeft } = this.state;
    const remainder = moveLeft % space;
    const r = parseInt(moveLeft / space, 10);
    // console.log(e.changedTouches[0]);
    // console.log('onTouchEnd', moveLeft, remainder, r);
    let ultiVal;
    if (remainder < space / 2) {
      ultiVal = r;
    } else {
      ultiVal = r + 1;
    }
    ultiVal = Math.max(ultiVal, (0 - range[1] * 10));
    ultiVal = Math.min(0, ultiVal);
    const value = Math.abs(ultiVal) / 10;
    this.setState({ moveLeft: space * ultiVal, value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }
  render() {
    const { moveLeft, value } = this.state;
    const { range = DEFAULT_RANGE } = this.props;
    const total = (range[1] - range[0]) * 10 + 1;
    if (total <= 0) return;
    const sticks = new Array(total).fill('');
    return (
      <div className="swiperuler">
        <div className="sticksWrap">
          <div className='sticks' style={{ left: `${moveLeft}px` }} onTouchStart={this.onTouchStart.bind(this)} onTouchMove={this.onTouchMove.bind(this)} onTouchEnd={this.onTouchEnd.bind(this)}>
            {
              sticks.map((item, i) => {
                const halfPoint = (i + 10) % 5 === 0;
                const intPoint = (i + 10) % 10 === 0;
                const color = intPoint && value === i / 10 ? '#5199f7' : '';
                return (
                  <span className="singleStick" key={i} style={{ marginLeft: i === 0 ? '0' : '', height: halfPoint ? '44px' : '' }}>
                    <i style={{ display: intPoint ? '' : 'none', color }}>{`${i * 0.1}.0`}</i>
                  </span>
                );
              })
            }
          </div>
        </div>
        <span className="standardLine" />
      </div>
    );
  }
}
