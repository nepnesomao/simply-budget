import React, { useCallback } from 'react'
import { Box, Input } from 'native-base'

interface Props{
    placeholderText: string,
    handleInputText?: (item: string) => void ,
    text:string
}

const TextItem = (props: Props) => {
    const { placeholderText, text} = props
    const { handleInputText } = props

    return (
        <Box width={40} height={10}>
            <Input 
            value={text}
            placeholder={placeholderText} 
            onChangeText={handleInputText} />
        </Box>
    )
}


export default TextItem