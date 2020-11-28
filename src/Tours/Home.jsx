import React, { useEffect, useState } from "react";
import List from "./List";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  const [loading, setloading] = useState(true);
  const [tour, settour] = useState([]);
  const url = "https://course-api.com/react-tours-project";
  const myfetchdata = async () => {
    setloading(false);
    const response = await fetch(url);
    const data = await response.json();
    settour(data);
  };
  const removeme = (id) => {
    console.log(id, "i am remove in home");
    console.log(tour);
    const finaltour = tour.filter((myid) => {
      console.log(myid, id);
      return myid.id !== id;
    });
    settour(finaltour);
  };
  useEffect(() => {
    myfetchdata();
  }, []);
  if (loading) {
    return (
      <div className="body">
        <section>
          <h3 className="mt-5">Loading....</h3>
        </section>
      </div>
    );
  }

  return (
    <div className="body">
      <section>
        <h3 className="mt-5">Your are on tour page</h3>
        <List tour={tour} removeme={removeme} />
      </section>
    </div>
  );
};

export default Home;
