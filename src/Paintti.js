import React from 'react';
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

export const Paintter = () => <ReactPaint {...props}/>;