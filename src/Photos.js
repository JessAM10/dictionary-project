import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map( (photo, index) =>  (
            <div className="col-md-6" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.landscape} alt="" className="img-fluid mr-5 mb-3" /></a>
              </div>
            )
    )}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
