import React, { ReactElement } from 'react'
import { View } from 'react-native'
import { noop } from 'lodash'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Arrow } from 'src/ui/icons'

export interface PropInformation {
  title: string
  description: string | undefined
  isLast?: boolean | undefined
  pressOnLocation?: () => void
}

const TextTitle = styled.Text`
  padding-top: 9px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.greenDark};
`

const TextDescription = styled(TextTitle)`
  padding: 0;
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.grey[0]};
`
const ContainerArrow = styled.TouchableOpacity<{ isLast: boolean }>`
  margin: 0 16px;
  border-bottom-width: ${({ isLast }) => (isLast ? 0 : 1)}px;
  border-color: ${colors.grey[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Information = ({
  title,
  description,
  isLast = false,
  pressOnLocation,
}: PropInformation): ReactElement => {
  return (
    <ContainerArrow
      isLast={isLast}
      activeOpacity={isLast ? 0.7 : 1}
      onPress={() => {
        isLast && pressOnLocation ? pressOnLocation() : noop()
      }}>
      <View>
        <TextTitle>{title}</TextTitle>
        <TextDescription>{description}</TextDescription>
      </View>
      {isLast && <Arrow />}
    </ContainerArrow>
  )
}
