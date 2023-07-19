import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DialScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      headerTitle: () => (
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Mobile Protector</Text>
        </View>
      ),
      headerStyle: styles.header,
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>DialScreen</Text>
      </View>
    </>
  );
};

export default DialScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#218c74",
    height: 110,
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
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    alignContent: "center",
    marginLeft: 15,
  },
});
