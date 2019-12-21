import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import CommunicationsContext from '../context/OverviewContext';

const RouteLocations = (props) => {
  const communicationsData = useContext(CommunicationsContext).overviewData;

  console.log('THIS IS ROUTE TRACE: ', communicationsData);

  /*
    correlatingid: "f1f1acd9-0613-4c9a-bb46-40366389ae5d"
    currentmicroservice: "goalServer"
    id: 1
    reqtype: "GET"
    resmessage: "OK"
    resstatus: 200
    targetedendpoint: "/user/getuser/jenae"
    timesent: "2019-12-20T03:07:09.655Z"
  */
    
  const resObj = {};
  for (let i = 0; i < communicationsData.length; i+=1) {
      const element = communicationsData[i];
      if (resObj[element.correlatingid]) resObj[element.correlatingid].push(element.currentmicroservice);
      else {resObj[element.correlatingid] = [element.currentmicroservice]};
  };

  //use object values to destructure locations
  const tracePoints = Object.values(resObj);
  console.log('THIS IS TRACEPOINTES: ', tracePoints[0]);

  const resArray = [];
  for (let i = 0; i < tracePoints[0].length; i+=1) {
    resArray.push(
        <div className="RouteBox" key={i}>
        <p>{tracePoints[0][i]}</p>
        </div>
    )
  };


//   console.log('ARRAY OF LOCATIONS: ', resObj);
  return (
      <div>
    {resArray}
      </div>
  )
};

export default RouteLocations;
