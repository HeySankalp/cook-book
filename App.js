import Categories from './screens/categories';
import Categorymeals from './screens/categoryMeals';
import Mealcontent from './screens/mealContent';
import Favorites from './screens/favorites';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import FavContextProvider from './store/context/favorite';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function Drawernav() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#210f00' },
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#3b2c1d' },
          drawerContentStyle: { backgroundColor: '#ebb696' },
          drawerLabelStyle: { fontSize: 20 },
          drawerActiveTintColor: 'white',

          drawerActiveBackgroundColor: '#3b2c1d'
        }}
      >

        <Drawer.Screen
          name="Categories"
          component={Categories}
          options={{
            drawerIcon: ({ color, size }) => <AntDesign name='appstore1' color={color} size={size} />
          }}
        />

        <Drawer.Screen
          name="Favorites"
          component={Favorites}
          options={{
            drawerIcon: ({ color, size }) => <AntDesign name='star' color={color} size={size} />
          }}
        />
      </Drawer.Navigator>
    )
  }

  return (
    <>
      <StatusBar style="light" />
      {/* <FavContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Drawer'
            screenOptions={{
              headerStyle: { backgroundColor: '#210f00' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3b2c1d' }
            }}>

            <Stack.Screen name='Drawer' component={Drawernav}
              options={{ headerShown: false }}
            />

            <Stack.Screen name='Categorymeals' component={Categorymeals} />

            <Stack.Screen name='Mealcontent' component={Mealcontent} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavContextProvider> */}
    </>
  );
}


