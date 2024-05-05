import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRent({ fill = "#fff" }, props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={31.11111111111111}
      viewBox="0 0 576 512"
      {...props}
    >
      <Path 
        fill={fill}
        d="M543.8 287.6c17 0 32-14 32-32.1 1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24 0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64h320.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM288 160a64 64 0 110 128 64 64 0 110-128M176 400c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16"
      />
    </Svg>
  );
}

export default SvgRent;