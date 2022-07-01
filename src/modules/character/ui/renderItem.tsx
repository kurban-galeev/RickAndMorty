import React, { ReactElement } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Arrow } from 'src/ui/icons'

interface Prop {
  episode: string
  name: string
  date: string
  isLast?: boolean
}

const Container = styled.TouchableOpacity<{ isLast: boolean }>`
  border-bottom-width: ${({ isLast }) => (isLast ? 0 : 1)}px;
  border-color: ${colors.grey[2]};
  margin: 0 16px;
`
const TextEpisode = styled.Text`
  padding-top: 6.5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.greenDark};
`
const TextName = styled(TextEpisode)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.grey[5]};
`
const TextDate = styled(TextEpisode)`
  padding-top: 5px;
  padding-bottom: 11px;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: ${colors.grey[5]};
`
const ContainerArrow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const RenderItem = ({
  episode,
  name,
  date,
  isLast = false,
}: Prop): ReactElement => {
  return (
    <Container isLast={isLast} activeOpacity={0.7}>
      <TextEpisode>{episode}</TextEpisode>
      <ContainerArrow>
        <TextName>{name}</TextName>
        <Arrow />
      </ContainerArrow>
      <TextDate>{date}</TextDate>
    </Container>
  )
}
