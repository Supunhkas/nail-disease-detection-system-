import { View, FlatList, Text } from "react-native";
import { Card } from "react-native-paper";
import newsItems from "../utils/dataStore";
const NewsFeed = () => {
  return (
    <View>
      <FlatList
        data={newsItems}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <Card.Title title={item.title} subtitle={item.date} />
            <Card.Content>
              <Text>{item.description}</Text>
            </Card.Content>
          </Card>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NewsFeed;
