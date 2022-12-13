import React from "react";
import { useState, useEffect } from "react";
import Payment from "./Payment";

const Dashboard = () => {
  return (
    <div>
      <div className="h-auto w-full md:w-9/12 bg-yellow-300 p-4 flex flex-col items-center text-black" >Dashboard</div>
      <br/>
      <h4 className="text-xl p-2" >Different Batches of Yoga Classes are :</h4> <br/>
      <span>
        <div className="border-4 border-light-blue-500 border-opacity-100 p-1" >Batch A : 6-7AM</div>
        <div className="border-4 border-light-blue-500 border-opacity-100 p-1" >Batch B : 7-8AM</div>
        <div className="border-4 border-light-blue-500 border-opacity-100 p-1" >Batch C : 8-9AM</div>
        <div className="border-4 border-light-blue-500 border-opacity-100 p-1" >Batch D : 5-6PM</div>
      </span>
        <Payment/>
    </div>
  );
};

export default Dashboard;
