import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map((photo, index) =>
         <img key={index} src={photo.src.small} alt="" />
        )}
      </section>
    );
  } else {
    return null;
  }
}
