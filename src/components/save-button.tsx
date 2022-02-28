import React, { useCallback} from 'react'
import { Box, Button } from 'native-base'


interface Props{
    text: string,
    handleSave: (item:any) => void
}

const SaveButton = (props: Props) => {
    const {text} = props
    const { handleSave} = props
    return (
        <Box width={100} height={10}>
            <Button
            onPress={handleSave}> 
                {text}
            </Button>
        </Box>
    )
}

export default SaveButton