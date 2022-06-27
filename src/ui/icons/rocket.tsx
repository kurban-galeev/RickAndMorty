import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { PropSvg } from 'src/types'

export const Rocket = ({ color }: PropSvg) => (
  <Svg width={23} height={22}>
    <Path
      d="M21.904.299a.234.234 0 0 0-.174-.18c-2.88-.704-9.531 1.804-13.135 5.406a15.582 15.582 0 0 0-1.751 2.07c-1.112-.099-2.223-.017-3.17.396C1.002 9.168.224 12.237.007 13.557a.474.474 0 0 0 .518.55l4.292-.473c.003.324.022.647.058.968a.96.96 0 0 0 .28.59l1.662 1.658c.158.16.367.258.59.28.32.036.641.056.963.059l-.47 4.286a.475.475 0 0 0 .55.518c1.317-.211 4.392-.989 5.561-3.662.413-.947.498-2.053.402-3.159a15.616 15.616 0 0 0 2.075-1.751c3.615-3.597 6.11-10.1 5.416-13.122Zm-9.023 8.83a2.359 2.359 0 1 1 3.335-3.337 2.359 2.359 0 0 1-3.335 3.338Z"
      fill={color}
    />
  </Svg>
)
