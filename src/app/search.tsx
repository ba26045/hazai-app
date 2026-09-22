import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 検索バー */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#8C7A70" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="キーワードで探す（例：木材、布、など）" placeholderTextColor="#8C7A70" />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>カテゴリから探す</Text>
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>（ここにカテゴリ一覧が表示されます）</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F2" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFECE6",
    margin: 16,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: "#2C221E" },
  content: { padding: 16, paddingBottom: 100 },
  title: { fontSize: 16, fontWeight: "bold", color: "#2C221E", marginBottom: 12 },
  placeholderBox: {
    height: 200,
    backgroundColor: "#F0E6D8",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: { color: "#8C7A70", fontSize: 14 },
});
