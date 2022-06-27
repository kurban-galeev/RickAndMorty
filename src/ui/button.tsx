import React, { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

interface PropButton {
  isDisabled?: boolean
  colorBackground?: string
  width?: number
  colorBorder?: string
  marginTop?: number
}
interface PropText {
  colorText?: string
}
const ButtonBlock = styled.TouchableOpacity<PropButton>`
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
  background: ${({ colorBackground }) => colorBackground ?? 'transparent'};
  width: ${({ width }) => width + 'px' ?? 'auto'};
  opacity: ${ifProp('isDisabled', '0.55', '1')};
  padding: 14px;
  border-radius: 10px;
  border: 2px solid ${({ colorBorder }) => colorBorder ?? 'transparent'};
`

const Title = styled.Text<PropText>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: ${({ colorText }) => colorText ?? 'transparent'};
`

interface Props extends TouchableOpacityProps {
  title?: string
  children?: ReactNode
  onPress?: () => void
  colorBackground?: string
  colorBorder?: string
  colorText?: string
  width?: number
  marginTop?: number
}

export const Button = ({
  children,
  onPress,
  title,
  colorBackground,
  colorBorder,
  colorText,
  width = 323,
  marginTop,
  ...rest
}: Props) => {
  return (
    <ButtonBlock
      isDisabled={Boolean(rest.disabled)}
      onPress={onPress}
      colorBackground={colorBackground}
      colorBorder={colorBorder}
      width={width}
      marginTop={marginTop}
      {...rest}>
      <Title colorText={colorText}>{title}</Title>
      {children}
    </ButtonBlock>
  )
}
