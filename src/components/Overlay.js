import React from "react";
import { Link } from "react-router-dom";

import close from "../assets/images/close.svg";
import api from "../Axios";

function Overlay({ pic, closeOverlay }) {
  console.log(pic);

  const handleDownload = (pic) => {
    console.log(pic);
    api.get(pic.links.download_location).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data.url]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `sample.${res.id}.jpg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <>
      {Object.keys(pic).length > 0 && (
        <div className="overlay">
          <div className="card">
            <div className="card-header">
              <div className="flex">
                <div className="profile-icon">
                  <img src={pic.user.profile_image.large} alt="profile" />
                </div>
                <div>
                  <h4 className="title">{pic.user.name}</h4>
                  <span className="sub-title text-muted">
                    @{pic.user.twitter_username}
                  </span>
                </div>
              </div>

              <img
                className="close-btn"
                src={close}
                alt="close"
                onClick={() => closeOverlay()}
              />
            </div>
            <div className="card-body">
              <img
                className="card-img not-hover"
                src={pic.urls.regular}
                alt={pic.alt_description}
              />
              <div className="btn-collapse">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleDownload(pic)}
                >
                  Download
                </button>
                {/* 
                <a
                  href={pic.links.download_location}
                  className="btn btn-primary"
                  arget="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download
                </a> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Overlay;
