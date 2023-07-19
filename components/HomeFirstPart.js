import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeFirstPart() {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const animatedStyle = {
    opacity,
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#dcdde1",
          padding: 10,
          paddingVertical: 15,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <View style={styles.textContainer}>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 10,
              marginBottom: 10,
              fontWeight: "bold",
              color: "#218c74",
            }}
          >
            Is Your Phone Safe ?
          </Text>
          <Text
            style={{ marginLeft: 10, textAlign: "justify", color: "#808e9b" }}
          >
            Stay Safe by setting up{" "}
            <Text style={{ fontWeight: "bold" }}>Mobile Protector</Text>{" "}
            features! Emergency Mode will be turned ON in the background if a
            thief does the actions you've enabled via{" "}
            <Text style={{ fontWeight: "bold" }}>Mobile Protector.</Text>
          </Text>
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Animated.View style={[animatedStyle]}>
            <MaterialIcons
              name="phonelink-erase"
              size={120}
              color="#218c74"
              style={{}}
            />
          </Animated.View>
        </View>
      </View>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: "#dcdde1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    gap: 8,
  },
  textContainer: {
    maxWidth: "60%",
  },

  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};
