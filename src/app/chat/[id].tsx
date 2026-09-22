import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Message {
  id: string;
  sender: "me" | "other";
  text: string;
  time: string;
}

// IDごとに異なるチャット情報を取得するヘルパー関数
const getChatData = (chatId: string | string[] | undefined) => {
  switch (chatId) {
    case "1":
      return {
        name: "木工工房 タナカ",
        item: "木材の端材 10枚セット",
        initialMessages: [
          { id: "1", sender: "other" as const, text: "こんにちは！こちらの木材の端材はまだ購入可能でしょうか？", time: "12:30" },
          { id: "2", sender: "me" as const, text: "はい、まだ購入可能でございます！", time: "12:32" },
          { id: "3", sender: "other" as const, text: "ありがとうございます。週末に取りに伺うことは可能ですか？", time: "12:33" },
        ],
      };
    case "2":
      return {
        name: "アクリルクラフトショップ",
        item: "アクリル板 端材詰め合わせ",
        initialMessages: [
          { id: "1", sender: "other" as const, text: "お問い合わせありがとうございます。", time: "昨日" },
          { id: "2", sender: "me" as const, text: "こちら、厚みは何ミリくらいでしょうか？", time: "昨日" },
          { id: "3", sender: "other" as const, text: "だいたい3mm厚のものになります！", time: "昨日" },
        ],
      };
    case "3":
      return {
        name: "はざいち公式",
        item: "運営からのご案内",
        initialMessages: [{ id: "1", sender: "other" as const, text: "出品ありがとうございます！素敵な端材ですね。", time: "3日前" }],
      };
    default:
      return {
        name: "ユーザー",
        item: "商品についてのチャット",
        initialMessages: [{ id: "1", sender: "other" as const, text: "こんにちは！", time: "12:00" }],
      };
  }
};

export default function ChatDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // IDに応じたチャットデータを取得
  const chatInfo = getChatData(id);

  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>(chatInfo.initialMessages);

  // ★URLのidが変わったときにメッセージをそのID用のものにリセットする
  useEffect(() => {
    setMessages(chatInfo.initialMessages);
  }, [id]);

  // メッセージ送信処理
  const handleSend = () => {
    if (inputText.trim() === "") return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "me",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* カスタムヘッダー */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#5C4033" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{chatInfo.name}</Text>
          <Text style={styles.headerSubTitle}>{chatInfo.item}</Text>
        </View>
      </View>

      {/* キーボード追従用のコンテナ */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView} keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}>
        {/* メッセージリスト */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messageList}
          renderItem={({ item }) => {
            const isMe = item.sender === "me";
            return (
              <View style={[styles.messageRow, isMe ? styles.rowMe : styles.rowOther]}>
                <View style={[styles.bubble, isMe ? styles.bubbleMe : styles.bubbleOther]}>
                  <Text style={[styles.messageText, isMe ? styles.textMe : styles.textOther]}>{item.text}</Text>
                </View>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            );
          }}
        />

        {/* 入力フッター */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="メッセージを入力..." placeholderTextColor="#A89F91" value={inputText} onChangeText={setInputText} multiline />
          <TouchableOpacity style={[styles.sendButton, { opacity: inputText.trim() ? 1 : 0.5 }]} onPress={handleSend} disabled={!inputText.trim()}>
            <Ionicons name="send" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBF7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EFECE6",
    backgroundColor: "#FDFBF7",
  },
  backButton: {
    marginRight: 12,
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5C4033",
  },
  headerSubTitle: {
    fontSize: 12,
    color: "#8C7A6B",
    marginTop: 2,
  },
  keyboardView: {
    flex: 1,
  },
  messageList: {
    padding: 16,
  },
  messageRow: {
    marginBottom: 16,
    maxWidth: "75%",
  },
  rowMe: {
    alignSelf: "flex-end",
  },
  rowOther: {
    alignSelf: "flex-start",
  },
  bubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
  },
  bubbleMe: {
    backgroundColor: "#8C6D53",
    borderBottomRightRadius: 4,
  },
  bubbleOther: {
    backgroundColor: "#EFECE6",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  textMe: {
    color: "#FFFFFF",
  },
  textOther: {
    color: "#333333",
  },
  timeText: {
    fontSize: 10,
    color: "#A89F91",
    marginTop: 4,
    alignSelf: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#EFECE6",
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#FDFBF7",
    borderWidth: 1,
    borderColor: "#EFECE6",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 100,
    fontSize: 14,
    color: "#333333",
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#8C6D53",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});
