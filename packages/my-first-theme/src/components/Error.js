import { connect } from "frontity";
import React from "react";

function Error({ state }) {
  return (
    <>
      <h2>404 Error</h2>
      <p>
        The path <em>{state.router.link}</em> cannot be found.
      </p>
    </>
  );
}
export default connect(Error);
