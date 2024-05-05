import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgEntertainment({fill = '#fff'},props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      viewBox="0 0 256 256"
      {...props}
    >
      <Path
        fill={fill}
        d="M176 110h-24a6 6 0 010-12h24a6 6 0 010 12m-72-12H94V88a6 6 0 00-12 0v10H72a6 6 0 000 12h10v10a6 6 0 0012 0v-10h10a6 6 0 000-12m135.84 101.5A34 34 0 01212 214a34.11 34.11 0 01-24-9.95l-.26-.28L147.38 158h-38.76l-40.31 45.76-.31.24a34 34 0 01-24 10 34 34 0 01-33.46-39.91v-.1L26.9 89.88A57.89 57.89 0 0183.89 42H172a58.07 58.07 0 0157.05 47.63v.19L245.46 174v.11a33.75 33.75 0 01-5.62 25.39M172 146a46 46 0 000-92H83.89a45.9 45.9 0 00-45.18 38 .36.36 0 000 .1l-16.38 84.13a22 22 0 0037.11 19.45l42-47.65a6 6 0 014.5-2zm61.67 30.23l-9.79-50.35A58.06 58.06 0 01172 158h-8.63l33.19 37.68a22 22 0 0037.11-19.45"
      />
    </Svg>
  )
}

export default SvgEntertainment
