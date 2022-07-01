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
