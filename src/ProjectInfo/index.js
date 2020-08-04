import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import Styles from "./index.module.css";
import { withRouter } from "react-router-dom";

function ProjectInfo(props) {
  const [state, setState] = useState({});
  let { projectId } = useParams();
  console.log(props);
  projectId = projectId[2];
  useEffect(() => {
    setState(data[projectId - 1]);
  }, [projectId]);
  return (
    <div className={Styles.container}>
      {/* <Link to="/">← Go Back</Link> */}
      <a
        onClick={() => {
          props.history.push("/");
        }}
      >
        ← Home
      </a>
      <h1>{state.name}</h1>
      <h2>Description</h2>
      <p>{state.desc}</p>
      <h2>Tech Stack</h2>
      <p>{state.stack}</p>
      <h2>Preview</h2>
      <p>
        <img src={state.image} alt={state.name} />
      </p>
      <h2>Link</h2>
      <p>
        <a href={state.link} target="_blank" rel="noopener noreferrer">
          {state.link}
        </a>
      </p>
      <br />
      <div className={Styles.bottomBar}>
        <a
          onClick={() => {
            if (parseInt(projectId) - 1 > 0) {
              props.history.push(`/project/00${parseInt(projectId) - 1}`);
            }
          }}
        >
          ← Back
        </a>
        <a
          onClick={() => {
            if (parseInt(projectId) + 1 < 10) {
              props.history.push(`/project/00${parseInt(projectId) + 1}`);
            }
          }}
        >
          Next →
        </a>
      </div>
    </div>
  );
}

export default withRouter(ProjectInfo);
