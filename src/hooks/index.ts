import { useNavigation } from '@react-navigation/native'

interface Props {
  setIsApply: (value: boolean) => void
}

export const useFilter = ({ setIsApply }: Props) => {
  const { goBack } = useNavigation()

  const pressOnApply = () => {
    setIsApply(true)
    goBack()
  }

  return {
    pressOnApply,
  }
}

export const useCheckIsFilterEmpty = (object: any) => {
  const IsFilterEmpty = () => {
    for (const value in object) {
      if (object[value].length > 0) {
        return false
      }
    }

    return true
  }

  return {
    IsFilterEmpty,
  }
}
