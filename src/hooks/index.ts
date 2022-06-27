import { useNavigation } from '@react-navigation/native'

export const useFilter = () => {
  const { goBack } = useNavigation()

  const pressOnApply = () => {
    goBack()
  }

  return {
    pressOnApply,
  }
}
