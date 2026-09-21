import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// 画像スライダー用のダミーデータ（5枚）
const images = [
  "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
];

const { width } = Dimensions.get("window");

export default function ProductDetailScreen() {
  const router = useRouter();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false); // いいねの状態管理

  const handleScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    if (!isNaN(index)) {
      setActiveImageIndex(index);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ヘッダー部分（戻るボタン ＋ 右側の「いいね」「共有」ボタン） */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.textBackButton} onPress={() => router.replace("/")}>
          <Ionicons name="arrow-back" size={18} color="#C47A4A" />
          <Text style={styles.textBackText}>ホームに戻る</Text>
        </TouchableOpacity>

        <View style={styles.headerIcons}>
          {/* いいねボタン */}
          <TouchableOpacity style={styles.iconButton} onPress={() => setIsLiked(!isLiked)}>
            <Ionicons name={isLiked ? "heart" : "heart-outline"} size={22} color={isLiked ? "#E06D53" : "#5C4A3F"} />
          </TouchableOpacity>

          {/* 共有ボタン */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              // 共有処理をここに記述できます
            }}
          >
            <Ionicons name="share-outline" size={22} color="#5C4A3F" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* 画像スライダー部分 */}
        <View style={styles.imageContainer}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={handleScroll} scrollEventThrottle={16}>
            {images.map((uri, index) => (
              <Image key={index} source={{ uri }} style={styles.mainImage} />
            ))}
          </ScrollView>

          {/* ドットインジケーター */}
          <View style={styles.pagination}>
            {images.map((_, index) => (
              <View key={index} style={[styles.dot, activeImageIndex === index && styles.activeDot]} />
            ))}
          </View>
        </View>

        {/* 商品情報セクション */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>木材の端材 10枚セット</Text>
          <Text style={styles.price}>¥300</Text>

          <View style={styles.tagRow}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>素材: 木材</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>状態: 未使用</Text>
            </View>
          </View>

          <View style={styles.storyCard}>
            <Text style={styles.storyTitle}>商品の説明</Text>
            <Text style={styles.storyText}>サイズはバラバラですが、DIYや工作に使える木材の端材です。10枚セットでの販売です。</Text>
          </View>
        </View>
      </ScrollView>

      {/* 画面下部の固定購入ボタン */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>購入する</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F2" },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FAF7F2",
  },
  textBackButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  textBackText: { marginLeft: 6, fontSize: 14, fontWeight: "600", color: "#C47A4A" },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    padding: 6,
    marginLeft: 8,
  },
  scrollContent: { paddingBottom: 100 },
  imageContainer: { width: "100%", height: 300, backgroundColor: "#eee", position: "relative" },
  mainImage: { width: width, height: 300 },
  pagination: { position: "absolute", bottom: 12, left: 0, right: 0, flexDirection: "row", justifyContent: "center" },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "rgba(0, 0, 0, 0.2)", marginHorizontal: 3 },
  activeDot: { backgroundColor: "#C47A4A", width: 16, height: 6, borderRadius: 3 },
  infoContainer: { padding: 20 },
  title: { fontSize: 20, fontWeight: "600", color: "#2C221E", marginBottom: 8 },
  price: { fontSize: 26, fontWeight: "700", color: "#C47A4A", marginBottom: 16 },
  tagRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 8 },
  tag: { backgroundColor: "#F0E6D8", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, marginRight: 8, marginBottom: 8 },
  tagText: { fontSize: 12, fontWeight: "500", color: "#5C4A3F" },
  storyCard: { backgroundColor: "#F5EFEB", borderLeftWidth: 3, borderLeftColor: "#C47A4A", padding: 16, borderRadius: 8, marginVertical: 16 },
  storyTitle: { fontSize: 13, color: "#C47A4A", fontWeight: "700", marginBottom: 6 },
  storyText: { fontSize: 14, color: "#4A3B32", lineHeight: 22 },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "#FFF", padding: 16, borderTopWidth: 1, borderTopColor: "#E2D5C9" },
  buyButton: { backgroundColor: "#A85E32", padding: 16, borderRadius: 24, alignItems: "center" },
  buyButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
