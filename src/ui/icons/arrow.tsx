import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

export const Arrow = () => (
  <Svg width={6} height={8} fill="none">
    <Path
      d="M5.936 4.115 1.199 7.641l-.342-.42 2.618-3.106L.857.58 1.2.297l4.737 3.818Z"
      fill={colors.grey[2]}
    />
  </Svg>
)
