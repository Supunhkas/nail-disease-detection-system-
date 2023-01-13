import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { Appbar, Paragraph, Title } from "react-native-paper";
import { Card } from "react-native-paper";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#000"} barStyle="light-content" />
      <Appbar.Header style={styles.headerBar} mode="center-aligned">
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Content
          title="NDDS"
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="bell" onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.body}>
        <Card>
          <Card.Content>
            <Image
              source={require("../assets/nails.jpg")}
              style={{ width: 300, height: 150 }}
            />
            <Title> Nails </Title>
            <Paragraph>This is nail without diseases</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  headerBar: {
    position: "relative",
    top: 0,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  body: {
    justifyContent: "center",
    alignItems: "center",
  },
});
