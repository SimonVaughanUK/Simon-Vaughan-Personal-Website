import React from "react";
import combineClasses from "./combineClasses";

export default newClassName => component => ({ className, ...props }) =>
  React.createElement(component, {
    className: combineClasses(newClassName, className),
    ...props
  });
