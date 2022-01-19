import { SpinnerDotted } from "spinners-react";

const Loader = ({ size, color = "#5D89EEFF", classProps = "" }) => {
  return (
    <SpinnerDotted
      size={size}
      thickness={100}
      speed={100}
      color={color}
      className={classProps}
    />
  );
};

export default Loader;
