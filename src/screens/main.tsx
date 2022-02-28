import * as React from 'react'
import {
    Text,
    Box,
    Center, VStack, useColorModeValue, Button, Input} from 'native-base'

import TextItem from '../components/text-item'
import SaveButton from '../components/save-button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import shortid from 'shortid'
const BUDGET_ITEMS = 'budget-items'

export default function MainScreen() {
    const [date, setDate] = React.useState('')
    const [tur, setTur] = React.useState('')
    const [price, setPrice] = React.useState('')
    const handleSave = async () =>{
        try{
            let dataString = await AsyncStorage.getItem(BUDGET_ITEMS)
            let data = dataString != null ? JSON.parse(dataString) : [];
            let item = {
                id: shortid.generate(),
                date: date,
                type: tur,
                price : price
            }
    
            data.push(item)
            await AsyncStorage.setItem(BUDGET_ITEMS,JSON.stringify(data))
        }catch(e){
            console.log(e)
        }
        
        setDate('')
        setTur('')
        setPrice('')
    }
    return (
        <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} flex={1}>
            <VStack space={5} alignItems="center" w="full">
                <Box>
                    <Text>Simply Budget</Text>
                </Box>
                <Box >
                  <TextItem 
                  text={date} 
                  placeholderText='Tarih' 
                  handleInputText={ (newItem) => setDate(newItem)}/> 
                <TextItem 
                    text={tur}
                    placeholderText='Tür'
                    handleInputText={(turItem) => setTur(turItem)} />
                <TextItem 
                    text={price}
                    placeholderText='Tutar'
                    handleInputText={(turItem) => setPrice(turItem)} />
                </Box>
                <SaveButton
                    text='Kaydet'
                    handleSave={() => handleSave()}
                />
            </VStack>
        </Center>
    )
}