import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { MaterialIcons } from "@expo/vector-icons";
import Shadow from "react-native-shadow";
import Headertest from "../components/HomeFirstPart";
import HomeSecPart from "../components/HomeSecPart";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Mobile Protector</Text>
        </View>
      ),
      headerStyle: styles.header,
      headerRight: () => (
        <Fontisto
          name="player-settings"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  return (
    <>
      <ScrollView>
        <View>
          <Headertest />
        </View>
        <View>
          <HomeSecPart />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#218c74",
    height: 90,
    borderBottomColor: "transparent",
    shadowColor: "transparent",
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    alignContent: "center",
    marginLeft: 5,
  },

  icon: {
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
