import React from 'react';

const SessionDetailsContext = React.createContext({
  sessionDetails: { id: '', name: '', avatarUrl: '' },
  setSessionDetails: function () {},
});

export default SessionDetailsContext;
