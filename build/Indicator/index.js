import React from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'
const Bar = styled(Animated.View)`
  height: ${props => props.tabHeight}
  width: ${props => props.tabWidth}
  position: absolute
  bottom: 0
  backgroundColor: ${props => props.color}
`
const Indicator = props => (
  <Bar
    color={props.color}
    style={{ left: props.value }}
    tabWidth={props.tabWidth}
    tabHeight = {props.height}
  />
)
export default Indicator
