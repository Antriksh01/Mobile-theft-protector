import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";
import { FontAwesome } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";
import { Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeSecPart = () => {
  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };
  return (
    <ScrollView style={{ paddingBottom: 90 }}>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Entypo
          name="tablet-mobile-combo"
          size={24}
          color="#218c74"
          style={{ marginLeft: 15 }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "#218c74",
          }}
        >
          Device Protection
        </Text>
      </View>
      <View>
        <Pressable>
          <Card
            style={{
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
              height: 110,
              backgroundColor: "#218c74",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignVertical: "center",
                  marginTop: 10,
                }}
              >
                {/* <FontAwesome name="power-off" size={48} color="#2C3A47" /> */}
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/antrix/image/upload/v1689681626/shutdown_copy_symsk4.png",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={{ width: "65%" }}>
                <Text style={{ fontSize: 25, color: "white" }}>
                  Fake Shutdown
                </Text>
                <Text
                  style={{ textAlign: "justify", color: "white", marginTop: 5 }}
                >
                  Fake Shutdown but device will be active showing location.
                  Track location for protection.
                </Text>
              </View>
              <View>
                <Pressable>
                  <FontAwesome name="caret-right" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </Card>
        </Pressable>
      </View>
      <View>
        <Pressable>
          <Card
            style={{
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
              height: 110,
              backgroundColor: "#218c74",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignVertical: "center",
                  marginTop: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="shield-airplane"
                  size={60}
                  color="black"
                />
              </View>
              <View style={{ width: "65%" }}>
                <Text style={{ fontSize: 20, color: "white" }}>
                  Fake Airplane Mode
                </Text>
                <Text
                  style={{ textAlign: "justify", color: "white", marginTop: 5 }}
                >
                  It will enables fake airplane mode and stop turning off the
                  phone.
                </Text>
              </View>
              <View>
                <Pressable>
                  <FontAwesome name="caret-right" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </Card>
        </Pressable>
      </View>
      <View>
        <Pressable>
          <Card
            style={{
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
              height: 110,
              backgroundColor: "#218c74",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignVertical: "center",
                  marginTop: 10,
                }}
              >
                {/* <FontAwesome name="power-off" size={48} color="#2C3A47" /> */}
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/antrix/image/upload/v1689684666/thief-png_oyfsk7.png",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={{ width: "65%" }}>
                <Text style={{ fontSize: 25, color: "white" }}>
                  Intruder Picture
                </Text>
                <Text
                  style={{ textAlign: "justify", color: "white", marginTop: 5 }}
                >
                  Message your contacts incase Intruder try to unlock your
                  device.
                </Text>
              </View>
              <View>
                <Pressable>
                  <FontAwesome name="caret-right" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </Card>
        </Pressable>
      </View>
      <View>
        <Pressable>
          <Card
            style={{
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
              height: 110,
              backgroundColor: "#218c74",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignVertical: "center",
                  marginTop: 10,
                }}
              >
                {/* <FontAwesome name="power-off" size={48} color="#2C3A47" /> */}
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/antrix/image/upload/v1689681626/shutdown_copy_symsk4.png",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={{ width: "65%" }}>
                <Text style={{ fontSize: 25, color: "white" }}>Locks App</Text>
                <Text
                  style={{ textAlign: "justify", color: "white", marginTop: 5 }}
                >
                  Set alerts if your phone is stolen. Protect your apps with an
                  emergency pin.
                </Text>
              </View>
              <View>
                <Pressable>
                  <FontAwesome name="caret-right" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </Card>
        </Pressable>
      </View>
      {/* break-section */}
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <MaterialCommunityIcons
          name="shield-account"
          size={36}
          color="#218c74"
          style={{ marginLeft: 15 }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "#218c74",
          }}
        >
          Protect Yourself
        </Text>
      </View>
      <View>
        <Pressable>
          <Card
            style={{
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
              height: 110,
              backgroundColor: "#218c74",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignVertical: "center",
                  marginTop: 10,
                }}
              >
                {/* <FontAwesome name="power-off" size={48} color="#2C3A47" /> */}
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/antrix/image/upload/v1689686960/sos1png1_jbvosw.png",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={{ width: "65%" }}>
                <Text style={{ fontSize: 25, color: "white" }}>
                  Distress button
                </Text>
                <Text
                  style={{ textAlign: "justify", color: "white", marginTop: 5 }}
                >
                  Alert your emergency contacts and Activate emergency mode from
                  the phone's notifications
                </Text>
              </View>
              <View>
                <Pressable>
                  <FontAwesome name="caret-right" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </Card>
        </Pressable>
      </View>
      <View>
        <Pressable>
          <Card
            style={{
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
              height: 110,
              backgroundColor: "#218c74",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignVertical: "center",
                  marginTop: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="shield-airplane"
                  size={60}
                  color="black"
                />
              </View>
              <View style={{ width: "65%" }}>
                <Text style={{ fontSize: 20, color: "white" }}>
                  Fake Airplane Mode
                </Text>
                <Text
                  style={{ textAlign: "justify", color: "white", marginTop: 5 }}
                >
                  It will enables fake airplane mode and stop turning off the
                  phone.
                </Text>
              </View>
              <View>
                <Pressable>
                  <FontAwesome name="caret-right" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </Card>
        </Pressable>
      </View>
      <View>
        <Pressable>
          <Card
            style={{
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
              height: 110,
              backgroundColor: "#218c74",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignVertical: "center",
                  marginTop: 10,
                }}
              >
                {/* <FontAwesome name="power-off" size={48} color="#2C3A47" /> */}
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/antrix/image/upload/v1689684666/thief-png_oyfsk7.png",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={{ width: "65%" }}>
                <Text style={{ fontSize: 25, color: "white" }}>
                  Intruder Picture
                </Text>
                <Text
                  style={{ textAlign: "justify", color: "white", marginTop: 5 }}
                >
                  Message your contacts incase Intruder try to unlock your
                  device.
                </Text>
              </View>
              <View>
                <Pressable>
                  <FontAwesome name="caret-right" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </Card>
        </Pressable>
      </View>
      <View>
        <Pressable>
          <Card
            style={{
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
              height: 110,
              backgroundColor: "#218c74",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignVertical: "center",
                  marginTop: 10,
                }}
              >
                {/* <FontAwesome name="power-off" size={48} color="#2C3A47" /> */}
                <Image
                  source={{
                    uri: "https://res.cloudinary.com/antrix/image/upload/v1689681626/shutdown_copy_symsk4.png",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={{ width: "65%" }}>
                <Text style={{ fontSize: 25, color: "white" }}>Locks App</Text>
                <Text
                  style={{ textAlign: "justify", color: "white", marginTop: 5 }}
                >
                  Set alerts if your phone is stolen. Protect your apps with an
                  emergency pin.
                </Text>
              </View>
              <View>
                <Pressable>
                  <FontAwesome name="caret-right" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </Card>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeSecPart;

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    opacity: 0.5,
    shadowRadius: 50,
    cornerRadius: 5,
    elevation: 3,
  },
  user: {
    // Additional styles for the user container if needed
  },
  name: {
    // Additional styles for the name if needed
  },
  image: {
    width: 60,
    height: 60,
  },
});
