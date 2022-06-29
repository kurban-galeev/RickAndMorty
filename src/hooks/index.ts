import { makeVar } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'

import { useFilterContext } from 'src/modules/filter-context'
import { defaultFilter } from 'src/utils/constants'

export const filter = makeVar(defaultFilter)

export const useFilter = () => {
  const { goBack } = useNavigation()
  const { filterContext } = useFilterContext()

  const pressOnApply = () => {
    // console.log(filter(), 'Filter')
    filter(filterContext)
    // console.log(filter(), 'FilterContext')
    goBack()
  }

  return {
    pressOnApply,
  }
}
