import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function GalleryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>ギャラリー</Text>
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>（ここに作品一覧が表示されます）</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F2" },
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
