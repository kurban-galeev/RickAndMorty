import React, { useState } from 'react'
import { FlatList } from 'react-native'
import Modal from 'react-native-modal'
import styled from 'styled-components/native'

import { useFilterContext } from 'src/modules/filter-context'
import { colors } from 'src/theme/colors'
import { Back } from 'src/ui/back'

import { Input } from './input'

interface PropSearch {
  title: string
  isVisibleModal: boolean
  setIsVisibleModal: (isVisibleModal: boolean) => void
  data: string[]
  isName: boolean
}
const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 320px;
  background: ${colors.white[0]};
`
const TextTitle = styled.Text`
  padding-top: 15px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${colors.greenDark};
`
const ContainerInput = styled.View`
  margin: 17px 16px 8.5px 16px;
`
const Header = styled.View`
  border-bottom-width: 1px;
  border-color: ${colors.grey[2]};
`

const TextDescription = styled(TextTitle)`
  padding: 0;
  text-align: left;
`
const ContainerItem = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: ${colors.grey[2]};
  margin: 0 16px;
  padding: 8px 0 8px 0;
`

export const Search = ({
  title,
  isVisibleModal,
  setIsVisibleModal,
  data,
  isName,
}: PropSearch) => {
  const closeModal = () => {
    setIsVisibleModal(false)
    isName
      ? setFilterContext({ ...filterContext, name: textInput })
      : setFilterContext({ ...filterContext, species: textInput })
  }

  const { setFilterContext, filterContext } = useFilterContext()
  const defaultValueInput = isName ? filterContext.name : filterContext.species
  const [textInput, setTextInput] = useState(defaultValueInput)

  return (
    <Modal
      isVisible={isVisibleModal}
      style={{ margin: 0 }}
      onBackdropPress={closeModal}
      useNativeDriver>
      <Container>
        <Header>
          <Back closeModal={closeModal} />
          <TextTitle>{title}</TextTitle>
          <ContainerInput>
            <Input value={textInput} setValue={setTextInput} />
          </ContainerInput>
        </Header>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <ContainerItem onPress={() => setTextInput(item)}>
              <TextDescription>{item}</TextDescription>
            </ContainerItem>
          )}
        />
      </Container>
    </Modal>
  )
}
