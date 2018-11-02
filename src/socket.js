import io from 'socket.io-client';

// const socket = io('http://localhost:5001');

const listeners = {}

// socket.on('event', data => {
//   console.log('data:', data);
// })

export const addButtonUpdateListener = (listener) => {
  if (listeners['buttonUpdate'] == null) {
    listeners['buttonUpdate'] = [];
  }
  listeners['buttonUpdate'].push(listener);
}

