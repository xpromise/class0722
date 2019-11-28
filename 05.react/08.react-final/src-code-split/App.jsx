import React, { Component, Suspense, Fragment } from "react";
import Loadable from "react-loadable";

const A = React.lazy(() => import("./components/a"));

const Loading = function() {
  return <div>loading...</div>;
};
const B = Loadable({
  loader: () => import("./components/b"),
  loading: Loading
});

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Suspense fallback={<div>loading...</div>}>
          <A />
        </Suspense>
        <B />
      </Fragment>
    );
  }
}
