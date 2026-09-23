import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

// カテゴリのダミーデータ
const categories = [
  { id: "wood", name: "木材", icon: "cube-outline" },
  { id: "glass", name: "ガラス", icon: "file-tray-outline" },
  { id: "fabric", name: "布", icon: "shirt-outline" },
  { id: "acrylic", name: "アクリル", icon: "layers-outline" },
  { id: "leather", name: "皮", icon: "bookmark-outline" },
  { id: "metal", name: "金属", icon: "hardware-chip-outline" },
  { id: "paper", name: "紙", icon: "newspaper-outline" },
  { id: "other", name: "その他", icon: "apps-outline" },
];

// 人気のはざい（モックデータ）
const MOCK_PRODUCTS = [
  {
    id: "1",
    title: "木材の端材 10枚セット",
    price: 300,
    imageUrl: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "アクリル板 端材詰め合わせ",
    price: 500,
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "革の端材カラフルハギレ",
    price: 450,
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // カテゴリタップ時
  const handleCategoryPress = (categoryId: string) => {
    router.push({ pathname: "/search", params: { category: categoryId } });
  };

  // 商品カードタップ時（詳細画面へIDを渡す）
  const handleProductPress = (id: string) => {
    router.push({ pathname: "/product-detail", params: { id } });
  };

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
          <TextInput
            style={styles.searchInput}
            placeholder="キーワードで検索"
            placeholderTextColor="#8C7A70"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={() => {
              if (searchQuery.trim()) {
                router.push({ pathname: "/search", params: { q: searchQuery } });
              }
            }}
          />
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
            {categories.map((cat) => (
              <TouchableOpacity key={cat.id} style={styles.categoryItem} onPress={() => handleCategoryPress(cat.id)}>
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
            {MOCK_PRODUCTS.map((item) => (
              <TouchableOpacity key={item.id} style={styles.productCard} onPress={() => handleProductPress(item.id)}>
                <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
                <Text style={styles.productCardTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.productCardPrice}>¥{item.price.toLocaleString()}</Text>
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
    ...StyleSheet.absoluteFill,
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
  productImage: {
    width: 140,
    height: 140,
    borderRadius: 8,
    marginBottom: 6,
    backgroundColor: "#EFECE6",
  },
  productCardTitle: { fontSize: 13, color: "#2C221E", fontWeight: "500" },
  productCardPrice: { fontSize: 14, color: "#C47A4A", fontWeight: "bold", marginTop: 2 },
});
