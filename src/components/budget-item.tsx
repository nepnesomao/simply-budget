import { VStack, Box, Text } from 'native-base'
import React from 'react'

interface Props{
    date:string,
    type:string,
    price:string
}
const BudgetItem = (props: Props) => {
    const {date, type, price} = props
    return (
        <VStack w="full" space={5} alignItems="center">
            <Box style={{ width:'70%', padding:4, borderBottomWidth:1, borderBottomColor:'lightgray' }} mb={4}>
                <Text>{date}</Text> 
                <Text>{type}</Text> 
                <Text>{price} TL</Text>
            </Box>
        </VStack>
    )
}

export default BudgetItem