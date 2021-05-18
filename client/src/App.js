import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import Spec from "./documentation/spec";

function App() {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [error, setError] = useState("");

  // const DisableTryItOutPlugin = () => {
  //   return {
  //     statePlugins: {
  //       spec: {
  //         wrapSelectors: {
  //           allowTryItOutFor: () => () => false,
  //         },
  //       },
  //     },
  //   };
  // };

  const createShortLink = async () => {
    try {
      const body = { longURL };
      const res = await fetch("/api/url/shrink", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await res.json();

      if (res.status === 200) {
        setError("");
        setShortURL(parseRes.shortURL);
      } else {
        setError(parseRes);
        setShortURL("");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="App">
      <div className="content-div">
        <Header />
        <InputBar
          longURL={longURL}
          setLongURL={setLongURL}
          createShortLink={createShortLink}
          shortURL={shortURL}
          setShortURL={setShortURL}
          error={error}
        />
        <SwaggerUI spec={Spec} />
      </div>
    </div>
  );
}

export default App;
