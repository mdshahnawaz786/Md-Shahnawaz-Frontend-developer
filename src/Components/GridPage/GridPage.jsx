import React from "react";
import "./gridpage.css";
import { Link } from "react-router-dom";

const GridPage = ({gridData}) => {
  
  console.log(gridData);
  return (
    <>
      <div className="gridPage">
        {gridData &&
          gridData.map((ele) => {
            return (
              <>
                <Link to={`/details/${ele.capsule_serial}`}>
                  <div className="gridData">
                    <div className="overLay">
                    <p className="p">
                      <b>Capsule Id: </b>
                      {ele.capsule_id}
                    </p>
                    <p>
                      <b>Serial Number: </b>
                      {ele.capsule_serial}
                    </p>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
};

export default GridPage;
