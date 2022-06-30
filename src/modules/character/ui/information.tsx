import React, { ReactElement } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export interface PropInformation {
  title: string
  description: string | undefined
  isLast?: boolean | undefined
}

const Container = styled.View<{ isLast: boolean }>`
  border-bottom-width: ${({ isLast }) => (isLast ? 0 : 1)}px;
  border-color: ${colors.grey[2]};
  margin: 0 16px;
`
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

export const Information = ({
  title,
  description,
  isLast = false,
}: PropInformation): ReactElement => {
  return (
    <Container isLast={isLast}>
      <TextTitle>{title}</TextTitle>
      <TextDescription>{description}</TextDescription>
    </Container>
  )
}
