import * as React from 'react'
import {
    Text,
    Box,
    Center, VStack
} from 'native-base'

import TextItem from '../components/text-item'
import SaveButton from '../components/save-button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import shortid from 'shortid'
import DateItem from '../components/date-item'


const BUDGET_ITEMS = 'budget-items'

export default function MainScreen() {
    const [date, setDate] = React.useState(new Date())
    const [dateText, setDateText] = React.useState('')
    const [tur, setTur] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [description, setDescription] = React.useState('')
    const handleSave = async () => {
        try {
            let dataString = await AsyncStorage.getItem(BUDGET_ITEMS)
            let data = dataString != null ? JSON.parse(dataString) : [];
            let item = {
                id: shortid.generate(),
                date: date,
                type: tur,
                price: price,
                desc: description
            }

            data.push(item)
            await AsyncStorage.setItem(BUDGET_ITEMS, JSON.stringify(data))
        } catch (e) {
            console.log(e)
        }

        setDate(new Date())
        setTur('')
        setPrice('')
        setDescription('')
    }
    return (
        <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} flex={1}>
            <VStack space={5} alignItems="center" w="full">
                <Box>
                    <Text>Simply Budget</Text>
                </Box>
                <Box w='100%' style={{backgroundColor:'red'}}>
                    <DateItem
                        labelDay='1'
                        labelMonth=','
                        labelYear='1'
                    />
                </Box>
                <Box >
                    <TextItem
                        text={dateText}
                        placeholderText='Tarih'
                        handleInputText={(newItem) => setDateText(newItem)} />
                    <TextItem
                        text={tur}
                        placeholderText='Tür'
                        handleInputText={(turItem) => setTur(turItem)} />
                    <TextItem
                        text={price}
                        placeholderText='Tutar'
                        handleInputText={(turItem) => setPrice(turItem)} />
                    <TextItem
                        text={description}
                        placeholderText='Açıklama'
                        handleInputText={(item) => setDescription(item)}
                        style={{ height: 40 }}
                    />
                </Box>
                <SaveButton
                    text='Kaydet'
                    handleSave={() => handleSave()}
                />
            </VStack>
        </Center>
    )
}