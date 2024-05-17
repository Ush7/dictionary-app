import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row m-2 pt-3">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 mb-4" key={index}>
                <a href={photo.src.original} target="_blank">
                  <img
                    className="img-fluid rounded"
                    src={photo.src.landscape}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
