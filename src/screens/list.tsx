import React, { useState, useEffect, useCallback } from 'react'
import { Box, Center, Text, VStack} from 'native-base'
import BudgetList from '../components/budget-list'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BudgetItemData from '../components/budget-list'

const BUDGET_ITEMS = 'budget-items'
const initialData = [{
    id: "1",
    date:"1",
    type: "1",
    price:"11"
}]
const ListScreen = () => {
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)
     
    const fetch = async () => {
        let json = await AsyncStorage.getItem(BUDGET_ITEMS)
        let list = json != null ? JSON.parse(json) : []
        setData(list)
    }

    useEffect(() => {
        fetch()
    }, [])

    const handleRefresh = useCallback(() => {
        setRefresh(true)
        fetch()
        setRefresh(false)
    }, [])

    const handleRemove = useCallback((item) => {
       
        setData(prevData => {
            const newData = prevData.filter(i => i !== item)
             AsyncStorage.setItem(BUDGET_ITEMS, JSON.stringify(newData))
            return newData
        })

    }, [])
    return (
        <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} flex={1}>
        <VStack space={1} p={4} alignItems="center" mt="-20px" w="full">
            <Box style={{borderBottomWidth:1, width:'100%', paddingLeft:'15%'}}>
                <Text>Harcamalarim</Text>
            </Box>
            <BudgetList
                data={data}
                refreshing={refresh}
                onRefresh={handleRefresh}
                onRemoveItem={handleRemove}
            />
        </VStack>
    </Center>
    )
}

export default ListScreen

