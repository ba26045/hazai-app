import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function MessageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>メッセージ</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.messageItem}>
            <View style={styles.avatar} />
            <View style={styles.messageTextContainer}>
              <Text style={styles.userName}>ユーザー {item}</Text>
              <Text style={styles.lastMessage} numberOfLines={1}>
                こんにちは！こちらの商品まだありますか？
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F2" },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#EFECE6" },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#2C221E" },
  content: { padding: 16, paddingBottom: 100 },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EFECE6",
    marginRight: 12,
  },
  messageTextContainer: { flex: 1 },
  userName: { fontSize: 14, fontWeight: "bold", color: "#2C221E", marginBottom: 4 },
  lastMessage: { fontSize: 12, color: "#8C7A70" },
});
