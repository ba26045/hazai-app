import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#2C221E",
        tabBarInactiveTintColor: "#8C7A70",
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      {/* 1. ホーム */}
      <Tabs.Screen
        name="index"
        options={{
          title: "ホーム",
          tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />,
        }}
      />

      {/* 2. 探す */}
      <Tabs.Screen
        name="search"
        options={{
          title: "探す",
          tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "search" : "search-outline"} size={24} color={color} />,
        }}
      />

      {/* 3. 投稿（中央の＋ボタン風） */}
      <Tabs.Screen
        name="post"
        options={{
          title: "投稿",
          tabBarIcon: () => (
            <View style={styles.postButton}>
              <Ionicons name="add" size={28} color="#FFF" />
            </View>
          ),
          tabBarLabelStyle: { marginTop: 4, fontSize: 10, color: "#8C7A70" },
        }}
      />

      {/* 4. メッセージ */}
      <Tabs.Screen
        name="message"
        options={{
          title: "メッセージ",
          tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "chatbubble" : "chatbubble-outline"} size={24} color={color} />,
        }}
      />

      {/* 5. マイページ */}
      <Tabs.Screen
        name="mypage"
        options={{
          title: "マイページ",
          tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />,
        }}
      />

      {/* ==========================================
          余分に出てきた「explore」と「product」を非表示にする設定
          ========================================== */}
      <Tabs.Screen
        name="explore"
        options={{
          href: null, // タブバーから完全に消す
        }}
      />
      <Tabs.Screen
        name="product-detail"
        options={{
          href: null, // タブバーから完全に消す
        }}
      />
      <Tabs.Screen
        name="chat/[id]"
        options={{
          href: null, // これによりタブバーから消えます
        }}
      />
      <Tabs.Screen
        name="purchase-complete"
        options={{
          href: null, // これによりタブバーから消えます
        }}
      />
      <Tabs.Screen
        name="purchase-confirm"
        options={{
          href: null, // これによりタブバーから消えます
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FAF7F2",
    borderTopWidth: 1,
    borderTopColor: "#EFECE6",
    height: 60,
    paddingBottom: 8,
    paddingTop: 6,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: "500",
  },
  postButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#2C221E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
});
