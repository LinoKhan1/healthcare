import React from 'react';
import PercentageCircle from './PercentageCircle';

const RowOfCircles = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <PercentageCircle percentage={90} color="#4caf50" label="Net Promoter Score 1" />
        </div>
        <div className="col-md-4 col-sm-12">
          <PercentageCircle percentage={41} color="#2196f3" label="fewer ER visits 2" />
        </div>
        <div className="col-md-4 col-sm-12">
          <PercentageCircle percentage={43} color="#ff9800" label="reduction in anxiety levels 3" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <PercentageCircle percentage={90} color="#4caf50" label="percentile in HEDIS quality scores 4" />
        </div>
        <div className="col-md-4 col-sm-12">
          <PercentageCircle percentage={83} color="#2196f3" label="screened for depression and receive follow-up 5" />
        </div>
        <div className="col-md-4 col-sm-12">
          <PercentageCircle percentage={95} color="#ff9800" label="generic Rx powered by our algorithms 6" />
        </div>
      </div>
    </div>
  );
};

export default RowOfCircles;
