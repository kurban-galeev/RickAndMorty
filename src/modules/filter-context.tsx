import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

import { ICharacterItems } from 'src/types'

interface IFilterContext {
  isVisibleFilterCharacter: boolean
  setIsVisibleFilterCharacter: (isVisibleFilterCharacter: boolean) => void
  characterItems: ICharacterItems[]
  setCharacterItems: (item: ICharacterItems[]) => void
}
interface Props {
  children: ReactNode
}

const defaultCharacterItem = [
  {
    id: 0,
    name: '',
    status: '',
    image: '',
  },
]

const InitialValue: IFilterContext = {
  isVisibleFilterCharacter: false,
  setIsVisibleFilterCharacter: noop,
  characterItems: defaultCharacterItem,
  setCharacterItems: noop,
}

const FilterContext = createContext(InitialValue)

export const FilterProvider = ({ children }: Props) => {
  const [isVisibleFilterCharacter, setIsVisibleFilterCharacter] =
    useState(false)
  const [characterItems, setCharacterItems] = useState(defaultCharacterItem)

  const value = useMemo(
    () => ({
      isVisibleFilterCharacter,
      setIsVisibleFilterCharacter,
      characterItems,
      setCharacterItems,
    }),
    [
      isVisibleFilterCharacter,
      setIsVisibleFilterCharacter,
      characterItems,
      setCharacterItems,
    ],
  )

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)
