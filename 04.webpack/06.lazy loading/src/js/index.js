document.getElementById('btn').onclick = function () {
  import( /* webpackChunkName: "module1", webpackPrefetch: true */ './module1.js').then(({
    default: module1
  }) => {
    module1();
  })
}