
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstPage from './src/app/Component/FirstPage';
import SecondPage from './src/app/Component/SecondPage';
// import ThirdPage from './src/app/component/ThirdPage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
  return (
       <Stack.Navigator
         initialRouteName="FirstPage"
         screenOptions={{headerShown: false}}
       >
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
        />
      </Stack.Navigator>
  );
}

const SecondScreenStack = () => {
  return (
    <Stack.Navigator
     initialRouteName="SecondPage"
     screenOptions={{headerShown: false}}
   >
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}/>
      
    </Stack.Navigator>
  );
}


const ThirdScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ThirdPage"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}/>
      
    </Stack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ 
            drawerLabel: 'First page Option',
            title: 'First Stack'
          }}
          component={FirstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{
            drawerLabel: 'Second page Option',
            title: 'Second Stack'
          }}
          component={SecondScreenStack} />

          <Drawer.Screen
          name="ThirdPage"
          options={{
            drawerLabel: 'Third page Option',
            title: 'Third Stack'
          }}
          component={ThirdScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;