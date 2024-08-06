import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";


//importing materialUI icons ::::>
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

// Data for pie chart passed to below line --------------------------->
//creating sub array from existing array of objects
//creates new array which will contain only label names
const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        //data aaega from watchlist -> for each stock in holding we want their price as:
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  
  // --------------------- 1st: printing watchlist ------------------>
  return (
    <div className="watchlist-container">

      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      {/* now to display list data, we create a new component named WatchListItem */}
      <ul className="list">
        {watchlist.map((stock, index) => {
        {/* passing stock & key params inside that component */}
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

{/* --------------- PIE CHART -------------------------> */}
      <DoughnutChart data={data} />

    </div>
  );
};

export default WatchList;

// --------------------- 2. creating new component named watchlist: ------------------>

//why create comp? we are using MUI so to make things less complex we write it separate!

const WatchListItem = ({ stock }) => {

  //states created!!! by default kuch bhi show nhi karna hai, so usestate false. 
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  //creating 2 event handler, one will show & other will hide.
  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };
  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  //now we'll be returning a list of items:
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      <div className="item">

            {/* style: green class=down, red class=up -----> */}
            <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

            {/* style: itemInfo in css ----> (right half part)*/}
            <div className="itemInfo">

                {/* ------------> 1st span item: */}
                <span className="percent">{stock.percent     }</span>

                {/* ------------> 2nd span item: */}
                {/* using materialUI icons KeyboardArrowUp & down, giving styling too. */}
                {stock.isDown ? (
                  <KeyboardArrowDown className="down" />
                ) : (
                  <KeyboardArrowUp className="up" />
                )}

                {/* ------------> 3rd span item: */}
                <span className="price"> {      stock.price}</span>

            </div>

      </div>

{/* IMPORTANT: it means that when showWatchlistActions is true, then only watchlistactions will work */}
      {showWatchlistActions && <WatchListActions uid={stock.name} />}

    </li>
  );
};


// ------------------ 3. creating new comp: watchlistactions ------------------>
// visible only when WatchListItem is hovered! requires item's uid

const WatchListActions = ({ uid }) => {
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
      generalContext.openBuyWindow(uid);
    };

    return (

      <span className="actions">
          <span>

            {/* 1st button: BUY ==============> */}
            <Tooltip
              title="Buy (B)"
              placement="top"
              arrow
              TransitionComponent={Grow}
              onClick={handleBuyClick}
            >
              <button className="buy">Buy</button>
            </Tooltip>

            
            {/* 2nd button: SELL ==============> */}
            <Tooltip
              title="Sell (S)"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button className="sell">Sell</button>
            </Tooltip>


            {/* 3rd button: GRAPH ==============> */}
            <Tooltip
              title="Analytics (A)"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button className="action">
                {/* using icon not text */}
                <BarChartOutlined className="icon" />
              </button>
            </Tooltip>


            {/* 4th button: MORE ==============> */}
            <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
              <button className="action">
                {/* using icon not text */}
                <MoreHoriz className="icon" />
              </button>
            </Tooltip>

          </span>
      </span>

  );
};
