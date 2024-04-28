import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Notifications from '../drawerNavigation/Notifications';
import JoinAsProvider from '../drawerNavigation/JoinAsProvider';
import TermsAndConditions from '../drawerNavigation/Terms&Condition';
import Settings from '../drawerNavigation/Setting';

const Drawers = createDrawerNavigator();

const Drawer = () =>{
    return(
      <Drawers.Navigator>
        <Drawers.Screen name='Notifications' component={Notifications} />
        <Drawers.Screen name='Join as Provider' component={JoinAsProvider} />
        <Drawers.Screen name='Terms & Conditions' component={TermsAndConditions} />
        <Drawers.Screen name='Settings' component={Settings} />
      </Drawers.Navigator>
    )
}

export default Drawer;