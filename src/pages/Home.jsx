import React from "react";  
import Newsfeed from "../components/Newsfeed/Newsfeed"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

const Home = () => {    
  return (  
      
<div className="d-flex justify-content-center">
  <div className="w-100" style={{ maxWidth: "100%", padding: "0 1rem" }}>
    <Newsfeed />
  </div>
</div>

  );
}

export default Home;
