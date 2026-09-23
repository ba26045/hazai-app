import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
}

export default function MessageScreen() {
  const router = useRouter();

  // ★詳細画面（chat/[id].tsx）の初期メッセージの最後の発言と内容を完全に一致させています
  const chatList: ChatItem[] = [
    {
      id: "1",
      name: "木工工房 タナカ",
      lastMessage: "ありがとうございます。週末に取りに伺うことは可能ですか？",
      time: "12:33",
      unreadCount: 1,
    },
    {
      id: "2",
      name: "アクリルクラフトショップ",
      lastMessage: "だいたい3mm厚のものになります！",
      time: "昨日",
    },
    {
      id: "3",
      name: "はざいち公式",
      lastMessage: "出品ありがとうございます！素敵な端材ですね。",
      time: "3日前",
    },
  ];

  const renderItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => router.push(`/chat/${item.id}`)} activeOpacity={0.7}>
      <View style={styles.avatarContainer}>
        <Ionicons name="person" size={20} color="#8C7A6B" />
      </View>
      <View style={styles.chatInfo}>
        <View style={styles.chatHeaderRow}>
          <Text style={styles.chatName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <View style={styles.chatBottomRow}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.unreadCount && item.unreadCount > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.unreadCount}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFBF7" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>メッセージ</Text>
      </View>
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>メッセージはまだありません</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBF7",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EFECE6",
    backgroundColor: "#FDFBF7",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5C4033",
  },
  listContainer: {
    paddingVertical: 8,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F2EFE9",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius: 12,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EFECE6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
  },
  chatHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  chatName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#5C4033",
    flex: 1,
    marginRight: 8,
  },
  chatTime: {
    fontSize: 12,
    color: "#A89F91",
  },
  chatBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lastMessage: {
    fontSize: 13,
    color: "#8C7A6B",
    flex: 1,
    marginRight: 8,
  },
  badge: {
    backgroundColor: "#8C6D53",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  emptyContainer: {
    padding: 40,
    alignItems: "center",
  },
  emptyText: {
    color: "#A89F91",
    fontSize: 14,
  },
});
