import React from "react";
import { createDrawerNavigator} from '@react-navigation/drawer'
import MainScreen from "./screens/main";
import ListScreen from "./screens/list";

const Drawer = createDrawerNavigator()

const App = () => {
    return (
     <Drawer.Navigator initialRouteName="Main">
         <Drawer.Screen name="Main" component={MainScreen} />
         <Drawer.Screen name="List" component={ListScreen} />
     </Drawer.Navigator>   
    )
}

export default App