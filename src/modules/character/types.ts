import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { CharacterParamList } from 'src/types'

export type CharcterProp = NativeStackNavigationProp<CharacterParamList>
export interface PropCheckbox {
  textTitle?: string
  textDescription?: string
  isLast?: boolean
  isStatus?: boolean
  isName?: boolean
}
