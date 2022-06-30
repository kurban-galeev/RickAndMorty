import { RoutesEnum } from 'src/navigation/routes-enum'

export type BottomTabsParamList = {
  [RoutesEnum.EPISODE]: undefined
  [RoutesEnum.LOCATION]: undefined
  [RoutesEnum.CHARACTER]: undefined
}
export type MainParamList = {
  [RoutesEnum.TAB_BAR]: undefined
}

export type CharacterParamList = {
  [RoutesEnum.CHARACTER]: undefined
  [RoutesEnum.CHARACTER_FILTER]: undefined
}

export type LocationParamList = {
  [RoutesEnum.LOCATION]: undefined
  [RoutesEnum.LOCATION_FILTER]: undefined
}

export type EpisodeParamList = {
  [RoutesEnum.EPISODE]: undefined
  [RoutesEnum.EPISODE_FILTER]: undefined
}

export interface PropSvg {
  color?: string
}

export interface ICharacterItems {
  id: number
  status: string
  name: string
  image: string
}
export interface IFilter {
  status: string
  name: string
  gender: string
  species: string
  isApply: boolean
}
