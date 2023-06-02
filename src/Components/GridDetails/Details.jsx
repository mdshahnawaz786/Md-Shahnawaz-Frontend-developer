import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./details.css";

const Details = () => {
  const { id } = useParams();
  // console.log(id);

  const [detail, setDetail] = useState("");

  const { gridData } = useSelector((initial) => {
    return initial;
  });
  // console.log(gridData);

  useEffect(() => {
    setDetail(
      gridData.filter((ele) => {
        if (ele.capsule_serial === id) {
          return ele;
        }
      })
    );
  }, []);

  console.log(detail);

  return (
    <div className="details">
      {detail &&
        detail.map((ele) => {
          return (
            <>
              <div className="detailsContainer">
                <p>
                  <b>Capsule Id: {ele.capsule_id}</b>
                </p>
                <p>
                  <b>Capsule Serial No: </b>
                  {ele.capsule_serial}
                </p>
                <p>
                  <b>Capsule Type: </b>
                  {ele.type}
                </p>
                <p>
                  <b>Capsule Details: </b>
                  {ele.details}
                </p>
                <p>
                  <b>Capsule Status: </b>
                  {ele.status}
                </p>
                <p>
                  <b>No. of Landings: </b>
                  {ele.landings}
                </p>
                <p>
                  {" "}
                  <b>Launch Details:</b>
                  {ele.original_launch}
                </p>
                <p>
                  <b>Missions:</b>
                  {ele.missions.length}
                </p>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Details;
