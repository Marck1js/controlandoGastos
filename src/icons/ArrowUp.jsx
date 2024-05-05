import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUp({ fill = "#fff" }, props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill={fill}
        d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20z"
      />
    </Svg>
  );
}

export default SvgArrowUp;
