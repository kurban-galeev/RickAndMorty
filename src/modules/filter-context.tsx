import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

import { IFilter } from 'src/types'
import { defaultFilter } from 'src/utils/constants'

interface IFilterContext {
  isVisibleFilterCharacter: boolean
  setIsVisibleFilterCharacter: (isVisibleFilterCharacter: boolean) => void
  filterContext: IFilter
  setFilterContext: (value: IFilter) => void
  isVisibleSearchModalName: boolean
  setIsVisibleSearchModalName: (value: boolean) => void
  isVisibleSearchModalSpecies: boolean
  setIsVisibleSearchModalSpecies: (value: boolean) => void
}
interface Props {
  children: ReactNode
}

const InitialValue: IFilterContext = {
  isVisibleFilterCharacter: false,
  setIsVisibleFilterCharacter: noop,
  filterContext: defaultFilter,
  setFilterContext: noop,
  isVisibleSearchModalName: false,
  setIsVisibleSearchModalName: noop,
  isVisibleSearchModalSpecies: false,
  setIsVisibleSearchModalSpecies: noop,
}

const FilterContext = createContext(InitialValue)

export const FilterProvider = ({ children }: Props) => {
  const [isVisibleFilterCharacter, setIsVisibleFilterCharacter] =
    useState(false)
  const [filterContext, setFilterContext] = useState(defaultFilter)
  const [isVisibleSearchModalName, setIsVisibleSearchModalName] =
    useState(false)
  const [isVisibleSearchModalSpecies, setIsVisibleSearchModalSpecies] =
    useState(false)

  const value = useMemo(
    () => ({
      isVisibleFilterCharacter,
      setIsVisibleFilterCharacter,
      filterContext,
      setFilterContext,
      isVisibleSearchModalName,
      setIsVisibleSearchModalName,
      isVisibleSearchModalSpecies,
      setIsVisibleSearchModalSpecies,
    }),
    [
      isVisibleFilterCharacter,
      setIsVisibleFilterCharacter,
      filterContext,
      setFilterContext,
      isVisibleSearchModalName,
      setIsVisibleSearchModalName,
      isVisibleSearchModalSpecies,
      setIsVisibleSearchModalSpecies,
    ],
  )

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)
