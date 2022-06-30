import { useNavigation } from '@react-navigation/native'

import { useFilterContext } from 'src/modules/filter-context'

export const useFilterCharacter = () => {
  const { goBack } = useNavigation()
  const { filterContext, setFilterContext } = useFilterContext()

  const pressOnApply = () => {
    setFilterContext({ ...filterContext, isApply: true })
    goBack()
  }

  return {
    pressOnApply,
  }
}
