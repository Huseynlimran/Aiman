const Home = () => {
  return (
    <section className="container">
      <div className="home">
        <h1>
          FASTER DATA WITH <span> AI.</span>
        </h1>

        <div className="home_boxs">
            <div className="box">
                <div className="box1">
                    <h3>240+</h3>
                    <p>PARTNERS</p>
                </div>
                <div className="box1">
                    <h3>92%</h3>
                    <p>FASTER TECHNOLOGY</p>
                </div>
            </div>
            <div className="box_right">
                <p>Better data leads to more performance models. Performant models lead to faster deployment. </p>
                <button>GET STARTED</button>
            </div>
        </div>
      </div>

      <img src="img/art4.png" className="art" alt="" />
      <img src="img/handle1.png" className="handle" alt="" />
    </section>
  );
};

export default Home;
