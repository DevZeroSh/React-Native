import React, { useState } from 'react'
import { Text, View } from 'react-native';
import PlatformTouchable from '../PlatformTouchable';
import AppButton from '../AppButton';

const AddToCartButton = () => {
    const [quantity, setQuantity] = useState(0);

    const addToCart=()=>{
        setQuantity(1)
    }

    return (
        <View>
            {quantity > 0 ? <>
                <Text>-</Text>
                <Text>{quantity}</Text>
                <Text>+</Text>
            </> : <AppButton title="Add To Cart" onPress={addToCart}/>}
        </View>
    )
}

export default AddToCartButton