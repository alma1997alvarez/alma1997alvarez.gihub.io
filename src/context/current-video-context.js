import React from 'react';

const CurrentVideoContext = React.createContext({
  videoDetails: { id: '', title: '', description: '' },
  setVideoDetails: function () {},
});

export default CurrentVideoContext;
