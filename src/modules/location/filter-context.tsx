import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

import { IFilterLocation } from 'src/types'
import { defaultFilterLocation } from 'src/utils/constants'

interface IFilterContext {
  filterLocation: IFilterLocation
  setFilterLocation: (value: IFilterLocation) => void
  isVisibleSearchModalName: boolean
  setIsVisibleSearchModalName: (value: boolean) => void
  isVisibleSearchModalType: boolean
  setIsVisibleSearchModalType: (value: boolean) => void
  isVisibleSearchModalDimension: boolean
  setIsVisibleSearchModalDimension: (value: boolean) => void
  isApply: boolean
  setIsApply: (isApply: boolean) => void
}
interface Props {
  children: ReactNode
}

const InitialValue: IFilterContext = {
  filterLocation: defaultFilterLocation,
  setFilterLocation: noop,
  isVisibleSearchModalName: false,
  setIsVisibleSearchModalName: noop,
  isVisibleSearchModalType: false,
  setIsVisibleSearchModalType: noop,
  isVisibleSearchModalDimension: false,
  setIsVisibleSearchModalDimension: noop,
  isApply: false,
  setIsApply: noop,
}

const FilterContext = createContext(InitialValue)

export const FilterLocationProvider = ({ children }: Props) => {
  const [filterLocation, setFilterLocation] = useState(defaultFilterLocation)
  const [isVisibleSearchModalName, setIsVisibleSearchModalName] =
    useState(false)
  const [isVisibleSearchModalType, setIsVisibleSearchModalType] =
    useState(false)
  const [isVisibleSearchModalDimension, setIsVisibleSearchModalDimension] =
    useState(false)
  const [isApply, setIsApply] = useState(false)

  const value = useMemo(
    () => ({
      filterLocation,
      setFilterLocation,
      isVisibleSearchModalName,
      setIsVisibleSearchModalName,
      isVisibleSearchModalType,
      setIsVisibleSearchModalType,
      isVisibleSearchModalDimension,
      setIsVisibleSearchModalDimension,
      isApply,
      setIsApply,
    }),
    [
      filterLocation,
      setFilterLocation,
      isVisibleSearchModalName,
      setIsVisibleSearchModalName,
      isVisibleSearchModalType,
      setIsVisibleSearchModalType,
      isVisibleSearchModalDimension,
      setIsVisibleSearchModalDimension,
      isApply,
      setIsApply,
    ],
  )

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  )
}

export const useFilterLocation = () => useContext(FilterContext)
