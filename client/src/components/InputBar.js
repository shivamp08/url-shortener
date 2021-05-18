import React, { Fragment } from "react";
import "./stylesheets/InputBar.css";

const InputBar = (props) => {
  const handleCopyClick = () => {
    const el = document.createElement("textarea");
    el.value = props.shortURL;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <Fragment>
      <div
        className="input-group mb-3 mt-5"
        style={{ width: "auto", minWidth: "70%" }}
      >
        <input
          type="url"
          className="form-control"
          placeholder="Enter Long URL..."
          onChange={(e) => props.setLongURL(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-dark ms-2 btn-block customBtnSize"
            type="button"
            onClick={(e) => props.createShortLink()}
          >
            <i
              className="fas fa-compress-arrows-alt"
              style={{ marginRight: "10px" }}
            ></i>
            Shrink
          </button>
        </div>
      </div>
      <div
        className="input-group mt-2 mb-5"
        style={{ width: "auto", minWidth: "70%" }}
      >
        <input
          type="url"
          className="form-control red-placeholder"
          placeholder={props.error}
          value={props.shortURL}
          disabled
        />
        <div className="input-group-append">
          <button
            className="btn btn-success ms-2 customBtnSize"
            type="button"
            disabled={props.shortURL === ""}
            onClick={handleCopyClick}
          >
            <i className="far fa-clipboard" style={{ marginRight: "10px" }}></i>
            Copy
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default InputBar;
