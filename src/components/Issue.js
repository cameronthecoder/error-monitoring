import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sampleIssues } from '../testData/sampleIssues';

function Issue() {
  const [issue, setIssue] = useState({
    error: { name: 'default error' },
    frames: [],
  });
  const { issueID } = useParams();

  useEffect(() => {
    const newIssue = sampleIssues.find((issue) => issue.id === issueID);
    setIssue(newIssue);
  }, [issueID]);

  const framesElements = issue.frames.map((frame) => (
    <div>
      <pre>{frame.code}</pre>
    </div>
  ));
  return (
    <div>
      <h2>{issue.error.name}</h2>
      {framesElements}
    </div>
  );
}

export default Issue;
