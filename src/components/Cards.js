import React from "react";

export default function Cards(props) {
  return (
    <>
    <div  className="divContainer" >
      <div className="card">
        <img
          src="https://themoviesverse.cloud/wp-content/uploads/Download-Marvels-Daredevil-Season-2-Hindi-Dubbed-480p-720p-1080p.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            <b style={{color:props.mode === "light"?"white":"black"}}>
              Download DareDevils One (2025) (English Audio) Esubs Web-Dl 480p
              [300MB] || 720p [900MB] || 1080p [2.2GB]
            </b>
          </p>
        </div>
      </div>

      <div className="card">
        <img
          src="https://themoviesverse.cloud/wp-content/uploads/Download-Valiant-One-MoviesMod.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            <b style={{color:props.mode === "light"?"white":"black"}}>
              Download Valiant One (2025) (English Audio) Esubs Web-Dl 480p
              [300MB] || 720p [900MB] || 1080p [2.2GB]
            </b>
          </p>
        </div>
      </div>

      <div className="card">
        <img
          src="https://themoviesverse.cloud/wp-content/uploads/Download-The-Wheel-of-Time-S03-Hindi-MoviesMod.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            <b style={{color:props.mode === "light"?"white":"black"}}>
              Download The Wheel of Time (2025) (English Audio) Esubs Web-Dl
              480p [300MB] || 720p [900MB] || 1080p [2.2GB]
            </b>
          </p>
        </div>
      </div>

      <div className="card">
        <img
          src="https://themoviesverse.cloud/wp-content/uploads/Download-Putin-MoviesMod.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            <b style={{color:props.mode === "light"?"white":"black"}}>
              Download Putin (2025) (English Audio) Esubs Web-Dl 480p [300MB] ||
              720p [900MB] || 1080p [2.2GB]
            </b>
          </p>
        </div>
      </div>

    </div>
    
    </>

  );
}
