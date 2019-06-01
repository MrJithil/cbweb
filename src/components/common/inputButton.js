import styled from '@emotion/styled'
import {  space, color, border, fontFamily, fontSize, borderColor } from 'styled-system'

export const InputButton = styled.input`
  appearance: none;
  ${ color } ${space} ${fontFamily} ${fontSize}
  ${ border } ${borderColor}
`
InputButton.defaultProps = {
  type: 'submit',
  fontFamily: 'body',
  fontSize: 'desktop.1'
}