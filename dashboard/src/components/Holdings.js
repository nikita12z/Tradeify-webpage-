import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";

// import { holdings } from "../data/data";

const Holdings = () => {

//------------------------------------------->
  //creating a variable to store data then we connect using api calls to fetch.
  //useState setup:
  const [allHoldings, setAllHoldings] = useState([]);

//------------------------------------------->
  //useEffect hook:
  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

// Data for bar chart passed to below line --------------------------->
//creating sub array from existing array of objects
//creates new array which will contain only label names
const labels = allHoldings.map((subArray) => subArray["name"]);

const data = {
  labels,
  datasets: [
    //sample dataset
    {
      label: "Stock Price",
      //for each stock in holding we want their price as:
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

//------------------------------------------->
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">

        {/* HEADINGS IN TABLE -------------------------------------------> */}
        <table>
          <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
          </tr>

          {/* DATA FETCHED THEN PRINTED (DATA INSIDE TABLE) -------------> */}

          {/*dynamic data which will come from file/apis*/}
          {allHoldings.map((stock, index)=>{
            const curValue = stock.price * stock.quant;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return(
              <tr key={index}>
                <td> {stock.name} </td>    {/* Instrument */}
                <td> {stock.qty} </td>    {/* Qty. */}
                <td> {stock.avg.toFixed(2)} </td>    {/* Avg. cost */}
                <td> {stock.price.toFixed(2)} </td>    {/* LTP */}
                <td> {curValue.toFixed(2)} </td>    {/* Cur. val */}

                <td className={profClass}> 
                  {(curValue - stock.avg * stock.qty).toFixed(2)} 
                </td>    {/* P&L */}

                <td className={profClass}> {stock.net} </td>    {/* Net chg. */}
                <td className={dayClass}> {stock.day} </td>    {/* Day chg. */}
             </tr>
             
            );
          })}
        </table>
      </div>
      
{/* // ----------------------------------------------------> */}
      <div className="row">

        <div className="col">
            <h5>
              29,875.<span>55</span>{" "}
            </h5>
            <p>Total investment</p>
        </div>

        <div className="col">
            <h5>
                31,428.<span>95</span>{" "}
            </h5>
            <p>Current value</p>
        </div>

        <div className="col">
            <h5>
                1,553.40
            </h5>
            <p>P&L</p>
        </div>
      </div>
      {/* upper data passed here */}
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
