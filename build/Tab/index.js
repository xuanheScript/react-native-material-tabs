import React from 'react'
import { TabText, TabBody, TabButton } from './styles'
const Tab = ({
  activeTextColor,
  active,
  onPress,
  text,
  inActiveTextColor,
  tabWidth,
  stretch,
  textStyle,
}) => {
  const color = active ? activeTextColor : inActiveTextColor
  return (
    <TabButton onPress={onPress} tabWidth={tabWidth} stretch={stretch}>
      <TabBody>
        <TabText color={color} textStyle={textStyle}>{text.toUpperCase()}</TabText>
      </TabBody>
    </TabButton>
  )
}
export default Tab
