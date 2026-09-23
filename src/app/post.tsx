import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PostScreen() {
  const router = useRouter();

  // フォームの状態管理
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // 画像を選択・追加する関数
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("写真を選択するには、フォトライブラリへのアクセスを許可する必要があります。");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleComplete = () => {
    console.log({ imageUri, title, price, description });
    alert("出品が完了しました！");
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        {/* ヘッダータイトル */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>素材を出品する</Text>
        </View>

        {/* スクロール領域 */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* 写真追加エリア */}
          <TouchableOpacity style={styles.imageBox} onPress={pickImage} activeOpacity={0.8}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.previewImage} />
            ) : (
              <>
                <Ionicons name="camera-outline" size={40} color="#8C7A70" />
                <Text style={styles.imageText}>写真を追加</Text>
              </>
            )}
          </TouchableOpacity>
          <Text style={styles.imageSubText}>{imageUri ? "タップして写真を変更" : "素材の写真を撮影または選択して出品します"}</Text>

          {/* 入力フォーム部分 */}
          <View style={styles.formContainer}>
            <Text style={styles.label}>タイトル</Text>
            <TextInput style={styles.input} placeholder="例：無垢材のテーブル板" placeholderTextColor="#B5A497" value={title} onChangeText={setTitle} />

            <Text style={styles.label}>価格 (円)</Text>
            <TextInput style={styles.input} placeholder="例：5000" placeholderTextColor="#B5A497" keyboardType="numeric" value={price} onChangeText={setPrice} />

            <Text style={styles.label}>商品説明</Text>
            <TextInput style={[styles.input, styles.textArea]} placeholder="素材の状態、サイズ、特徴などを記入してください" placeholderTextColor="#B5A497" multiline numberOfLines={4} value={description} onChangeText={setDescription} />
          </View>
        </ScrollView>

        {/* 画面下部に固定するボタンエリア */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handleComplete} activeOpacity={0.8}>
            <Text style={styles.buttonText}>出品する</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF7F2" },
  header: {
    paddingVertical: 14,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2D5C9",
    backgroundColor: "#FAF7F2",
  },
  headerTitle: { fontSize: 16, fontWeight: "bold", color: "#2C221E" },
  scrollContent: { padding: 20, alignItems: "center", paddingBottom: 40 },
  imageBox: {
    width: 140,
    height: 140,
    backgroundColor: "#EFECE6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E2D5C9",
    borderStyle: "dashed",
    overflow: "hidden",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  imageText: { color: "#8C7A70", fontSize: 12, marginTop: 6 },
  imageSubText: { color: "#5C4A3F", fontSize: 12, marginBottom: 24, textAlign: "center" },
  formContainer: { width: "100%", marginBottom: 10 },
  label: { fontSize: 14, fontWeight: "600", color: "#2C221E", marginBottom: 6, marginTop: 12 },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E2D5C9",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#2C221E",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  footer: {
    padding: 16,
    backgroundColor: "#FAF7F2",
    borderTopWidth: 1,
    borderTopColor: "#E2D5C9",
  },
  button: {
    backgroundColor: "#2C221E",
    paddingVertical: 14,
    borderRadius: 24,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
