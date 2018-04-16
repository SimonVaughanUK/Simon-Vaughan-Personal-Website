export default (...wrappers) => component => {
  let currentComponent = component;
  wrappers
    .reverse()
    .forEach(wrap => (currentComponent = wrap(currentComponent)));
  return currentComponent;
};
