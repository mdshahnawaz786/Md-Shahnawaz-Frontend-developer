import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {

    const dispatch = useDispatch()

  const { gridData } = useSelector((initial) => {
    return initial;
  });
  console.log(gridData);

  const [state, setState] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchResult(
      gridData.filter((ele) => {
        if (ele.type.toLowerCase().trim().includes(state.toLowerCase())) {
          return ele;
        }
      })
    );
  }, [state]);

  return (
    
    <>
      <div className="NavBar">
        <div className="leftNav">
          <Link to="/">
            <img src="https://www.spacex.com/static/images/share.jpg" alt="" />
          </Link>
        </div>
        <div className="rightNav">
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <div className="inputNav">
            <input
              value={state}
              placeholder="search by Capsule Type: eg:-Dragon 1.1"
              type="text"
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <Link to={state ? '/search' : '/'}>
              <button
                onClick={() => {
                    
                   dispatch({
                    type:'searchedData',
                    data: searchResult
                  })
                  
                }}
              >
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
