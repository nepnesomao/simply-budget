import React, { useCallback, useEffect } from 'react'
import { Box, HStack, Input, Text } from 'native-base'

interface Props {
    labelDay: string,
    labelMonth: string,
    labelYear: string,
    getDate?: () => void
}


const DateItem = (props: Props) => {

    return (
        <HStack alignItems='center'>
            <Box height={10}>
                <Input 
                placeholder='Day'
                />
            </Box>
            <Box  height={10}>
                <Input 
                placeholder='Day'
                />
            </Box>
            <Box height={10}>
                <Input 
                placeholder='Day'
                />
            </Box>
        </HStack>
    )
}

export default DateItem