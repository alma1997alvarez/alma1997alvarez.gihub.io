import React from 'react';

const CurrentVideoContext = React.createContext({
  videoDetails: { id: '', title: '', description: '', imgsrc: '' },
  setVideoDetails: function () {},
});

export default CurrentVideoContext;
