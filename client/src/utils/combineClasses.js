export default (...classes) =>
  classes
    .filter(e => e)
    .join(" ")
    .trim();
