import React from 'react'
import { View } from 'react-native'

const Box = (prop) => {
    return (
        <View style={{
            width: 50,
            height: 50,
            backgroundColor: prop.color,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: prop.color
        }}>

        </View>
    )
}

export default Box