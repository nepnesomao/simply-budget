import { HStack, Box, Text, Icon } from 'native-base'
import React, { useCallback } from 'react'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'
import SwipeableView from '../components/swipable-view'
import { Feather } from '@expo/vector-icons'

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'>{
    date:string,
    type:string,
    price:string,
    desc?:string,
    onRemove:() => void
}
const BudgetItem = (props: Props) => {
    const {date, type, price,desc} = props
    const {simultaneousHandlers, onRemove} = props
    return (
        <SwipeableView 
        simultaneousHandlers={simultaneousHandlers}
        onSwipeLeft={onRemove}
        backView={
            <Box
                w="full"
                h="full"
                bg="red.500"
                alignItems="flex-end"
                justifyContent="center"
                pr={4}
            >
                <Icon color="white" as={<Feather name='trash-2' />}  size="sm" />
            </Box>
        }>
        <HStack 
        alignItems="center"
        w="full">
            <Box style={{ backgroundColor:'white', width:'100%',  borderBottomColor:'lightgray', padding:4 }}>
                <Text>{date}</Text> 
                <Text>{type}</Text> 
                <Text>{price} TL</Text>
                <Text>{desc}</Text>
            </Box>
        </HStack>
        </SwipeableView>
    )
}

export default BudgetItem