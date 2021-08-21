import React from "react";
import "../App.css";

const Welcome = () => {
  return (
    <div className="helloContainer">
      <div className="helloMessage">
        Welcome!
        <br />
        <br />
        Here you will find exciting new cocktails you can make by yourself at
        home. <br />
        The app includes many many cocktails - and lets you know the amount of
        calories each includes.
        <br />
        🍸
        <br />
        Search an ingredient (like a spice or fruit) <br /> View results
        <br />
        Save cocktails you want to make by clicking on the 'save' button. <br />
        🍸
        <br />
        Please Check the Info section for tips on how to drink and diet wizely.
        <br />
        If you don't like choosing we can randomize a surprise for you - Try
        navigating to 'Surprise' and see what happens.
        <br />
        Enjoy!
        <br />
        🍸
      </div>
    </div>
  );
};

export default Welcome;
