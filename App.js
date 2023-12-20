import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Cover from "./screens/cover";
import Choose from "./screens/choose";
import Home from "./screens/home";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const noHead = { headerShown: false };

 const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Jurusan':
              iconName = 'school-outline';
              break;
            case 'Konsultasi':
              iconName = 'newspaper-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? 'white' : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 90,
          borderTopWidth: 0,
          backgroundColor: '#042564', // Set the background color to blue
          elevation:0,
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
          marginHorizontal:20,
          
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? 'white' : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Jurusan" component={Home} options={noHead} />
      <Tab.Screen name="Konsultasi" component={Home} options={noHead} />
      <Tab.Screen name="Profile" component={Home} options={noHead} />
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MyTabs" component={MyTabs} options={noHead}/>
          <Stack.Screen name="Cover" component={Cover} options={noHead} />
          <Stack.Screen name="Choose" component={Choose} options={noHead} />
          <Stack.Screen name="Signup" component={Signup} options={noHead} />
          <Stack.Screen name="Login" component={Login} options={noHead} />
          <Stack.Screen name="Home" component={Home} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;