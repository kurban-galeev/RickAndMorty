import React, { ReactElement } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Title = styled.Text`
  max-width: 200px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${colors.greenDark};
`
const TextSpecies = styled(Title)`
  font-size: 13px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${colors.grey[5]};
`
const TextName = styled(Title)`
  max-width: 100%;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: ${colors.greenDark};
`
const TextStatus = styled(Title)`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: ${colors.grey[0]};
`
const DescriptionImage = styled.View`
  align-items: center;
  margin-bottom: 20px;
`
interface Props {
  status: string | undefined
  name: string | undefined
  species: string | undefined
  marginTop: number
}

export const DescriptionDetail = ({
  status,
  name,
  species,
  marginTop,
}: Props): ReactElement => {
  return (
    <DescriptionImage style={{ marginTop }}>
      <TextStatus>{status}</TextStatus>
      <TextName>{name}</TextName>
      <TextSpecies>{species}</TextSpecies>
    </DescriptionImage>
  )
}
