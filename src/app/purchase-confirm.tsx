import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PurchaseConfirmScreen() {
  const router = useRouter();
  const { title = "木材の端材 10枚セット", price = "300" } = useLocalSearchParams();

  const [paymentMethod] = useState("クレジットカード (**** 1234)");
  const [shippingAddress] = useState("東京都葛飾区新小岩 1-2-3");

  const handleComplete = () => {
    router.replace("/purchase-complete");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFBF7" />

      {/* ヘッダー */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#5C4033" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>購入内容の確認</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>ご注文内容</Text>
          <View style={styles.productRow}>
            <View style={styles.productInfo}>
              <Text style={styles.productName} numberOfLines={2}>
                {title}
              </Text>
              <Text style={styles.productPrice}>¥{Number(price).toLocaleString()}</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>お届け先</Text>
            <TouchableOpacity>
              <Text style={styles.changeText}>変更</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoBox}>
            <Ionicons name="location-outline" size={18} color="#8C7A6B" style={styles.infoIcon} />
            <Text style={styles.infoText}>{shippingAddress}</Text>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>お支払い方法</Text>
            <TouchableOpacity>
              <Text style={styles.changeText}>変更</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoBox}>
            <Ionicons name="card-outline" size={18} color="#8C7A6B" style={styles.infoIcon} />
            <Text style={styles.infoText}>{paymentMethod}</Text>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>お支払い金額</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>商品代金</Text>
            <Text style={styles.priceValue}>¥{Number(price).toLocaleString()}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>配送料</Text>
            <Text style={styles.priceValue}>¥0</Text>
          </View>
          <View style={[styles.priceRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>合計</Text>
            <Text style={styles.totalValue}>¥{Number(price).toLocaleString()}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleComplete} activeOpacity={0.8}>
          <Text style={styles.confirmButtonText}>購入を確定する</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDFBF7" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EFECE6",
    backgroundColor: "#FDFBF7",
  },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 16, fontWeight: "bold", color: "#5C4033" },
  scrollContent: { padding: 16, paddingBottom: 100 },
  sectionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F2EFE9",
  },
  sectionTitle: { fontSize: 14, fontWeight: "bold", color: "#5C4033", marginBottom: 12 },
  sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  changeText: { fontSize: 12, color: "#8C6D53", fontWeight: "bold" },
  productRow: { flexDirection: "row", alignItems: "center" },
  productInfo: { flex: 1 },
  productName: { fontSize: 15, color: "#333333", fontWeight: "600", marginBottom: 4 },
  productPrice: { fontSize: 16, fontWeight: "bold", color: "#8C6D53" },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FDFBF7",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EFECE6",
  },
  infoIcon: { marginRight: 8 },
  infoText: { fontSize: 13, color: "#5C4033" },
  priceRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  priceLabel: { fontSize: 13, color: "#8C7A6B" },
  priceValue: { fontSize: 13, color: "#333333" },
  totalRow: { borderTopWidth: 1, borderTopColor: "#EFECE6", paddingTop: 8, marginTop: 4, marginBottom: 0 },
  totalLabel: { fontSize: 15, fontWeight: "bold", color: "#5C4033" },
  totalValue: { fontSize: 18, fontWeight: "bold", color: "#8C6D53" },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#EFECE6",
  },
  confirmButton: {
    backgroundColor: "#8C6D53",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
  },
  confirmButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});
