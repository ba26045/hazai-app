import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PostScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageBox}>
          <Ionicons name="camera-outline" size={40} color="#8C7A70" />
          <Text style={styles.imageText}>写真を追加</Text>
        </View>
        <Text style={styles.instruction}>素材の写真を撮影または選択して出品します</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>出品画面へ進む</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F2" },
  content: { flex: 1, padding: 20, justifyContent: "center", alignItems: "center", paddingBottom: 100 },
  imageBox: {
    width: 140,
    height: 140,
    backgroundColor: "#EFECE6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2D5C9",
    borderStyle: "dashed",
  },
  imageText: { color: "#8C7A70", fontSize: 12, marginTop: 6 },
  instruction: { color: "#5C4A3F", fontSize: 14, marginBottom: 24, textAlign: "center" },
  button: {
    backgroundColor: "#2C221E",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 24,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
