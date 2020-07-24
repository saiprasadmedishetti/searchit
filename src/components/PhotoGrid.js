import React, { useState, useEffect } from "react";
import api from "../Axios";

function PhotoGrid({ handlePic, search }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const getPhotos = () => {
    setLoading(true);
    api.get(`/photos/?page=${page}&per_page=9&query=${search}`).then((res) => {
      setLoading(false);
      setData(res.data);
    });
  };
  useEffect(() => {
    getPhotos();
    return () => {
      getPhotos();
    };
  }, [search, page]);

  const handleClick = (pic) => {
    handlePic(pic);
  };

  const handleMore = () => {
    setPage((page) => page + 1);
  };
  return (
    <div className="container mt-n13">
      <div className="row">
        {data.length > 0 &&
          data.map((pic) => (
            <div className="col-3" key={pic.id}>
              <div
                className="col card"
                style={{ backgroundColor: `${pic.color}` }}
                onClick={() => handleClick(pic)}
              >
                <img
                  className="card-img"
                  src={pic.urls?.["small"]}
                  alt={pic.alt_description}
                />
              </div>
            </div>
          ))}
      </div>
      <div className="my-2 text-center">
        <button type="button" className="btn btn-primary" onClick={handleMore}>
          {loading ? "Loading......" : "Load more"}
        </button>
      </div>
    </div>
  );
}

export default PhotoGrid;
