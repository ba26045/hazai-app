import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

// カテゴリのダミーデータ
const categories = [
  { name: "木材", icon: "cube-outline" },
  { name: "ガラス", icon: "file-tray-outline" },
  { name: "布", icon: "shirt-outline" },
  { name: "アクリル", icon: "layers-outline" },
  { name: "皮", icon: "bookmark-outline" },
  { name: "金属", icon: "hardware-chip-outline" },
  { name: "紙", icon: "newspaper-outline" },
  { name: "その他", icon: "apps-outline" },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* ヘッダー（通知アイコン） */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#2C221E" />
          </TouchableOpacity>
        </View>

        {/* 検索バー */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#8C7A70" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="キーワードで検索" placeholderTextColor="#8C7A70" />
        </View>

        {/* バナー */}
        <View style={styles.bannerContainer}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80" }} style={styles.bannerImage} />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerText}>使いきれなかった素材を{"\n"}必要としている誰かへ。</Text>
          </View>
        </View>

        {/* カテゴリ */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>カテゴリ</Text>
          <View style={styles.categoryGrid}>
            {categories.map((cat, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <View style={styles.categoryCircle}>
                  <Ionicons name={cat.icon as any} size={24} color="#5C4A3F" />
                </View>
                <Text style={styles.categoryText}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 人気のはざい */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>人気のはざい</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2, 3].map((item) => (
              <TouchableOpacity key={item} style={styles.productCard} onPress={() => router.push("/product-detail")}>
                <View style={styles.productImagePlaceholder} />
                <Text style={styles.productCardTitle}>木材の端材セット {item}</Text>
                <Text style={styles.productCardPrice}>¥300</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F2" },
  // 下部のタブ（ボトムタブ）と重ならないように十分な余白（paddingBottom: 120）を確保しています
  scrollContent: { paddingBottom: 120 },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  notificationButton: {
    padding: 6,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFECE6",
    marginHorizontal: 16,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 16,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: "#2C221E" },
  bannerContainer: {
    marginHorizontal: 16,
    height: 150,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 24,
    position: "relative",
  },
  bannerImage: { width: "100%", height: "100%" },
  bannerOverlay: {
    ...StyleSheet.absoluteFill, // 正しい書き方
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  bannerText: { color: "#FFF", fontSize: 16, fontWeight: "bold", lineHeight: 24 },
  sectionContainer: { marginBottom: 24, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#2C221E", marginBottom: 12 },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryItem: {
    width: "22%",
    alignItems: "center",
    marginBottom: 16,
  },
  categoryCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#EFECE6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  categoryText: { fontSize: 12, color: "#5C4A3F", textAlign: "center" },
  horizontalScroll: { marginHorizontal: -16, paddingHorizontal: 16 },
  productCard: {
    width: 140,
    marginRight: 12,
  },
  productImagePlaceholder: {
    width: 140,
    height: 140,
    backgroundColor: "#EFECE6",
    borderRadius: 8,
    marginBottom: 6,
  },
  productCardTitle: { fontSize: 13, color: "#2C221E", fontWeight: "500" },
  productCardPrice: { fontSize: 14, color: "#C47A4A", fontWeight: "bold", marginTop: 2 },
});
