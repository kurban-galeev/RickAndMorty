import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { PropSvg } from 'src/types'

export const TV = ({ color }: PropSvg) => (
  <Svg width={28} height={28} fill="none">
    <Path
      d="M22 9H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Z"
      fill={color}
    />
    <Path
      d="m19 4-5 5-5-5"
      stroke={color}
      strokeWidth={1.714}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
