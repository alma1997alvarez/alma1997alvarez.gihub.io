import React from 'react';

const SessionDetailsContext = React.createContext({
  sessionDetails: { id: '', name: '', avatar: '' },
  setSessionDetails: function () {},
});

export default SessionDetailsContext;
