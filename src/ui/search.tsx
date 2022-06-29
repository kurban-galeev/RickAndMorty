import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Modal from 'react-native-modal'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Back } from 'src/ui/back'

import { Inpute } from './input'

interface PropSearch {
  title: string
  isVisibleModal: boolean
  setIsVisibleModal: (isVisibleModal: boolean) => void
  data?: []
}
const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 250px;
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
}: PropSearch) => {
  const closeModal = () => {
    setIsVisibleModal(false)
  }

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
            <Inpute />
          </ContainerInput>
        </Header>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <ContainerItem>
              <TextDescription>{item}</TextDescription>
            </ContainerItem>
          )}
        />
      </Container>
    </Modal>
  )
}
