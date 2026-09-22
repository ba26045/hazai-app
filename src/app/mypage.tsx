import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function MypageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarLarge} />
        <Text style={styles.name}>sora</Text>
        <Text style={styles.location}>学生 | 東京</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNum}>12</Text>
          <Text style={styles.statLabel}>出品</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNum}>5</Text>
          <Text style={styles.statLabel}>フォロワー</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNum}>3</Text>
          <Text style={styles.statLabel}>フォロー中</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F2" },
  profileHeader: { alignItems: "center", paddingVertical: 24, backgroundColor: "#FFF" },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#EFECE6",
    marginBottom: 12,
  },
  name: { fontSize: 18, fontWeight: "bold", color: "#2C221E", marginBottom: 4 },
  location: { fontSize: 12, color: "#8C7A70" },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#EFECE6",
    paddingVertical: 12,
  },
  statItem: { alignItems: "center" },
  statNum: { fontSize: 16, fontWeight: "bold", color: "#2C221E" },
  statLabel: { fontSize: 12, color: "#8C7A70", marginTop: 2 },
});
