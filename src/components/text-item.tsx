import React, { useCallback } from 'react'
import { Box, Input } from 'native-base'

interface Props{
    placeholderText: string,
    handleInputText?: (item: string) => void ,
    text:string,
    style?:any
}

const TextItem = (props: Props) => {
    const { placeholderText, text, style} = props
    const { handleInputText } = props

    return (
        <Box width={40} height={10}>
            <Input 
            value={text}
            placeholder={placeholderText} 
            onChangeText={handleInputText}
            style={style} />
        </Box>
    )
}


export default TextItem