import React, {useCallback, useRef } from 'react'
import {  View } from 'moti'
import {  PanGestureHandlerProps, ScrollView } from 'react-native-gesture-handler'
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
    refreshing: boolean,
    onRemoveItem: (item:BudgetItemData) => void
}

interface BudgetItemProps extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'>{
    data: BudgetItemData,
    onRemove: (item:BudgetItemData) => void
}

export const AnimatedBudgetItem = (props: BudgetItemProps) => {
    const {
        simultaneousHandlers,
        data,
        onRemove
    } = props

    const handleRemoveItem = useCallback(() => {
        onRemove(data)
    },[data, onRemove])

    return (
        <StyledView w="full" 
        from={{
            opacity:1,
            scale:0.8,
            marginBottom:1,
            backgroundColor:'#FFFFFF'
        }}>
                    <BudgetItem 
                        key={data.id}
                        date={data.date}
                        type={data.type}
                        price={data.price}
                        simultaneousHandlers={simultaneousHandlers}
                        onRemove={handleRemoveItem}
                    />
        </StyledView>
    )
}

export default function BudgetList(props: BudgetListProps){
    const {data, refreshing } = props
    const {onRefresh, onRemoveItem} = props
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
                    <AnimatedBudgetItem
                        key={item.id}
                        data={item}
                        simultaneousHandlers={refScrollView}
                        onRemove={onRemoveItem}
                    />
                ))
            }
        </ScrollView>
    )
}