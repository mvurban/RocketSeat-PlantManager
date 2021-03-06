import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors' ;
import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';
import PlantSave from '../pages/PlantSave';
import MyPlants from '../pages/MyPlants';
import tabRoutes from './tabRoutes';

const pages = createStackNavigator();

const AppRoutes: React.FC = () =>(
   <pages.Navigator headerMode="none" initialRouteName="" screenOptions={{cardStyle: {backgroundColor:colors.white}}}>
      <pages.Screen name="Welcome" component={Welcome} />
      <pages.Screen name="UserIdentification" component={UserIdentification} /> 
      <pages.Screen name="Confirmation" component={Confirmation} />
      <pages.Screen name="tabRoutes" component={tabRoutes} />
      <pages.Screen name="PlantSave" component={PlantSave} />
      <pages.Screen name="MyPlants" component={MyPlants} />
   </pages.Navigator>
)

export default AppRoutes;