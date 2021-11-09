import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleIssues } from '../testData/sampleIssues';

const Issues = () => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    setIssues(sampleIssues);
  }, []);

  return (
    <div>
      <ul>
        {issues.map((issue) => (
          <li>
            <Link to={`issues/${issue.id}`}>{issue.error.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Issues;
