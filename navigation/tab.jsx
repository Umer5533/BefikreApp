import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../tabNavigation/Home';
import Category from '../tabNavigation/Category';
import Account from '../tabNavigation/Account';
import Shope from '../tabNavigation/Shope';
import Support from '../tabNavigation/Support';
const Tab = createBottomTabNavigator();



import { StyleSheet, View, Image, Text } from 'react-native';



import homeIcon from '../assests/icons/home.png';
import shoppingIcon from '../assests/icons/33.png';
import categoryIcon from '../assests/icons/category.png';
import supportIcon from '../assests/icons/support.png';
import accountIcon from '../assests/icons/account.png';

const Tabs = () => {
    const getTabBarContent = (icon, label, focused) => (
        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
        <Image source={icon} 
        resizeMode ='contain'
        style={{width: 25, height: 25, tintColor: focused ? '#ffffff' : '#000000'}} />
        <Text style={{color: focused ? '#ffffff' : '#000000'}}>{label}</Text>
    </View>);
    return(
        
        
<Tab.Navigator screenOptions={{tabBarShowLabel: false,
                               tabBarStyle: {backgroundColor:'grey', 
                                             height: 60,
                                             borderTopLeftRadius:30,
                                             borderTopRightRadius:30} }}>

<Tab.Screen name='Home' component={Home} options={{
     headerShown: false,
    tabBarIcon:({focused}) => (getTabBarContent(homeIcon,'Home', focused))
    
}}/>
<Tab.Screen name="Shopping" component={Shope} options={{
     headerShown: false,
    tabBarIcon:({focused}) => (getTabBarContent(shoppingIcon,'shop', focused))
}} />
<Tab.Screen name='Category' component={Category} options={{
     headerShown: false,
    tabBarIcon:({focused}) => (getTabBarContent(categoryIcon,'Category', focused))
}} />
<Tab.Screen name="Support" component={Support}  options={{
     headerShown: false,
    tabBarIcon:({focused}) => (getTabBarContent(supportIcon,'Support', focused))
}} />
<Tab.Screen name="Account" component={Account}  options={{
     headerShown: false,
    tabBarIcon:({focused}) => (getTabBarContent(accountIcon,'Account', focused))
}} />


</Tab.Navigator>

    )
    
 }
 
 export default Tabs


 


  