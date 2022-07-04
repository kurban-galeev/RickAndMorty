import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

import { IFilterEpisode } from 'src/types'
import { defaultFilterEpisode } from 'src/utils/constants'

interface IFilterContext {
  filterEpisode: IFilterEpisode
  setFilterEpisode: (value: IFilterEpisode) => void
  isVisibleSearchModalName: boolean
  setIsVisibleSearchModalName: (value: boolean) => void
  isVisibleSearchModalEpisode: boolean
  setIsVisibleSearchModalEpisode: (value: boolean) => void
  idEpisode: string
  setIdEpisode: (value: string) => void
  isApply: boolean
  setIsApply: (isApply: boolean) => void
}
interface Props {
  children: ReactNode
}

const InitialValue: IFilterContext = {
  filterEpisode: defaultFilterEpisode,
  setFilterEpisode: noop,
  isVisibleSearchModalName: false,
  setIsVisibleSearchModalName: noop,
  isVisibleSearchModalEpisode: false,
  setIsVisibleSearchModalEpisode: noop,
  idEpisode: '',
  setIdEpisode: noop,
  isApply: false,
  setIsApply: noop,
}

const FilterContextEpisode = createContext(InitialValue)

export const FilterEpisodeProvider = ({ children }: Props) => {
  const [filterEpisode, setFilterEpisode] = useState(defaultFilterEpisode)
  const [isVisibleSearchModalName, setIsVisibleSearchModalName] =
    useState(false)
  const [isVisibleSearchModalEpisode, setIsVisibleSearchModalEpisode] =
    useState(false)
  const [idEpisode, setIdEpisode] = useState('')
  const [isApply, setIsApply] = useState(false)

  const value = useMemo(
    () => ({
      filterEpisode,
      setFilterEpisode,
      isVisibleSearchModalName,
      setIsVisibleSearchModalName,
      isVisibleSearchModalEpisode,
      setIsVisibleSearchModalEpisode,
      idEpisode,
      setIdEpisode,

      isApply,
      setIsApply,
    }),
    [
      filterEpisode,
      setFilterEpisode,
      isVisibleSearchModalName,
      setIsVisibleSearchModalName,
      isVisibleSearchModalEpisode,
      setIsVisibleSearchModalEpisode,
      idEpisode,
      setIdEpisode,
      isApply,
      setIsApply,
    ],
  )

  return (
    <FilterContextEpisode.Provider value={value}>
      {children}
    </FilterContextEpisode.Provider>
  )
}

export const useFilterEpisode = () => useContext(FilterContextEpisode)
