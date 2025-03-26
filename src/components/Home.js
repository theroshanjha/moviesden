import React from "react";
import AppAlert from "./AppAlert";
import Cards from "./Cards";
import Carousel from "./Carousel";

function Home(props) {
  return (
    <div className="container">
      <div className="my-2">
        <AppAlert className="mx-2" alert={props.alert} />
      </div>
      <div className="container my-1">
        <Carousel></Carousel>
        <div className="bg-info">
          <h5 className="my-4 p-2">Top Trending Movies</h5>
        </div>
        <Cards mode={props.mode}></Cards>
      </div>
    </div>
  );
}

export default Home;
