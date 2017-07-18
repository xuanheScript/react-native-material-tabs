import styled from 'styled-components/native'
import { Platform,Text } from 'react-native'
import React from 'react'
import Button from '../Touchable'
import values from '../values'
export const TabBody = styled.View`
  height: ${values.barHeight}
  alignItems: center
  justifyContent: center
  paddingHorizontal: 12
`
export const TabButton = styled(Button)`
  width: ${props => props.tabWidth}
`

export const TabText = (props)=>(
    <Text
        style = {[
            {
                color: props.color,
                fontWeight: Platform.OS === 'ios' ? '500' : '400' ,
                fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'System' ,
                fontSize: 14,
                textAlign: 'center',
                minWidth: '100%',
            },
            props.textStyle
        ]}
    >
        {props.children}
    </Text>
)
