import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PurchaseCompleteScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFBF7" />

      <View style={styles.content}>
        {/* 完了アイコン */}
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark-circle" size={80} color="#8C6D53" />
        </View>

        <Text style={styles.title}>ご購入ありがとうございました！</Text>
        <Text style={styles.subtitle}>
          出品者との取引が開始されました。{"\n"}
          マイページやメッセージから詳細を確認できます。
        </Text>

        {/* ボタンエリア */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push("/chat/1")} // 例としてID:1のチャットへ遷移
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>出品者とのチャットへ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.replace("/")} // ホームに戻る
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>ホームへもどる</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBF7", // アプリ全体のベージュ背景
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5C4033",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#8C7A6B",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#8C6D53",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
    shadowColor: "#5C4033",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EFECE6",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#8C6D53",
    fontSize: 16,
    fontWeight: "bold",
  },
});
