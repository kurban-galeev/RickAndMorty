import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

import { IFilterCharacter } from 'src/types'
import { defaultFilterCharacter } from 'src/utils/constants'

interface IFilterContext {
  filterCharacter: IFilterCharacter
  setFilterCharacter: (value: IFilterCharacter) => void
  isVisibleSearchModalName: boolean
  setIsVisibleSearchModalName: (value: boolean) => void
  isVisibleSearchModalSpecies: boolean
  setIsVisibleSearchModalSpecies: (value: boolean) => void
  idDetail: string
  setIdDetail: (value: string) => void
  isApply: boolean
  setIsApply: (isApply: boolean) => void
}
interface Props {
  children: ReactNode
}

const InitialValue: IFilterContext = {
  filterCharacter: defaultFilterCharacter,
  setFilterCharacter: noop,
  isVisibleSearchModalName: false,
  setIsVisibleSearchModalName: noop,
  isVisibleSearchModalSpecies: false,
  setIsVisibleSearchModalSpecies: noop,
  idDetail: '',
  setIdDetail: noop,
  isApply: false,
  setIsApply: noop,
}

const FilterContextCharacter = createContext(InitialValue)

export const FilterCharacterProvider = ({ children }: Props) => {
  const [filterCharacter, setFilterCharacter] = useState(defaultFilterCharacter)
  const [isVisibleSearchModalName, setIsVisibleSearchModalName] =
    useState(false)
  const [isVisibleSearchModalSpecies, setIsVisibleSearchModalSpecies] =
    useState(false)
  const [idDetail, setIdDetail] = useState('')
  const [isApply, setIsApply] = useState(false)

  const value = useMemo(
    () => ({
      filterCharacter,
      setFilterCharacter,
      isVisibleSearchModalName,
      setIsVisibleSearchModalName,
      isVisibleSearchModalSpecies,
      setIsVisibleSearchModalSpecies,
      idDetail,
      setIdDetail,
      isApply,
      setIsApply,
    }),
    [
      filterCharacter,
      setFilterCharacter,
      isVisibleSearchModalName,
      setIsVisibleSearchModalName,
      isVisibleSearchModalSpecies,
      setIsVisibleSearchModalSpecies,
      idDetail,
      setIdDetail,
      isApply,
      setIsApply,
    ],
  )

  return (
    <FilterContextCharacter.Provider value={value}>
      {children}
    </FilterContextCharacter.Provider>
  )
}

export const useFilterCharacter = () => useContext(FilterContextCharacter)
