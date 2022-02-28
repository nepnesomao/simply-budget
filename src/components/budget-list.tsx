import React, {useCallback, useRef } from 'react'
import {  View } from 'moti'
import {  ScrollView } from 'react-native-gesture-handler'
import {makeStyledComponent} from '../utils/styled'
import BudgetItem from './budget-item'
import { RefreshControl } from 'react-native'

const StyledView = makeStyledComponent(View)
const StyledScrollView = makeStyledComponent(ScrollView)

interface BudgetItemData {
    id: string,
    date:string,
    type:string,
    price:string
}

interface BudgetListProps{
    data: Array<BudgetItemData>,
    onRefresh?: () => void,
    refreshing: boolean
}

export default function BudgetList(props: BudgetListProps){
    const {data, refreshing } = props
    const {onRefresh} = props
    const refScrollView = useRef(null)
    return (
        <ScrollView 
        style={{ width:'100%', height:600}}
        refreshControl={
            <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            />
        }
        >
            {
                data.map(item => (
                    <BudgetItem 
                        key={item.id}
                        date={item.date}
                        type={item.type}
                        price={item.price}
                    />
                ))
            }
        </ScrollView>
    )
}