import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactPaint from 'react-paint';
 
export const props = {
  style: {
    background: '#000',
  },
  brushCol: '#ffffff',
  lineWidth: 10,
  className: 'react-paint',
  height: 500,
  width: 500,
  onDraw: () => { console.log('Piirtely toimi!'); },
};

const pops = {
  content: 'asd',
};

export const Paintter = () => <ReactPaint {...props}/>;
