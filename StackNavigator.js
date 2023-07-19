import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import DialScreen from "./screens/DialScreen";
import { Feather } from "@expo/vector-icons";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    const viewRef = useRef(null);
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius: 10,
            paddingBottom: 10,
            backgroundColor: "#218c74",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#ffda79" }}>Home</Text>
              ) : (
                <Text style={{ color: "black" }}>Home</Text>
              ),

            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <Animatable.View
                animation={focused ? "bounceIn" : null}
                duration={500}
              >
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? "#ffda79" : "black"}
                />
              </Animatable.View>
            ),
          }}
        />
        <Tab.Screen
          name="Dial"
          component={DialScreen}
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "transparent", marginTop: 10 }}>
                  Dial
                </Text>
              ) : (
                <Text style={{ color: "transparent" }}>Dial</Text>
              ),

            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Animatable.View
                animation={focused ? "bounceIn" : null}
                duration={500}
              >
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    backgroundColor: focused ? "#feca57" : "#f1f2f6",
                    borderBottomWidth: 5,
                    borderBottomColor: "#000",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather name="phone-call" size={40} color="#218c74" />
                </View>
              </Animatable.View>
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "#ffda79" }}>Profile</Text>
              ) : (
                <Text style={{ color: "black" }}>Profile</Text>
              ),

            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Animatable.View
                animation={focused ? "bounceIn" : null}
                duration={500}
              >
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={focused ? "#ffda79" : "black"}
                />
              </Animatable.View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Search"
          component={SearchScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Places" component={PlacesScreen} />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Info" component={PropertyInfoScreen} />
        <Stack.Screen name="Rooms" component={RoomScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
