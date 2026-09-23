import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

// フッターのタブアイコン（active: 選択中 / inactive: 未選択）
const tabIcons = {
  home: {
    active: require("@/assets/images/tabIcons/footer/home.png"),
    inactive: require("@/assets/images/tabIcons/footer/home_gry.png"),
  },
  cart: {
    active: require("@/assets/images/tabIcons/footer/cart.png"),
    inactive: require("@/assets/images/tabIcons/footer/cart_gry.png"),
  },
  gallery: {
    active: require("@/assets/images/tabIcons/footer/garary.png"),
    inactive: require("@/assets/images/tabIcons/footer/garary_gry.png"),
  },
  // マイページだけファイル名が逆（my.png がグレー、my_kuro.png が黒）
  mypage: {
    active: require("@/assets/images/tabIcons/footer/my_kuro.png"),
    inactive: require("@/assets/images/tabIcons/footer/my.png"),
  },
};

function TabIcon({
  source,
  size,
}: {
  source: ImageSourcePropType;
  size: { width: number; height: number };
}) {
  return <Image source={source} style={size} resizeMode="contain" />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#2C221E",
        tabBarInactiveTintColor: "#9A9A9A",
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      {/* 1. ホーム */}
      <Tabs.Screen
        name="index"
        options={{
          title: "ホーム",
          tabBarIcon: ({ focused }) => (
            // home.png は余白が大きいため、他より大きめに表示して見た目のサイズを揃える
            <TabIcon
              source={focused ? tabIcons.home.active : tabIcons.home.inactive}
              size={styles.homeIcon}
            />
          ),
        }}
      />

      {/* 2. かう */}
      <Tabs.Screen
        name="search"
        options={{
          title: "かう",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={focused ? tabIcons.cart.active : tabIcons.cart.inactive}
              size={styles.cartIcon}
            />
          ),
        }}
      />

      {/* 3. ギャラリー */}
      <Tabs.Screen
        name="gallery"
        options={{
          title: "ギャラリー",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={
                focused ? tabIcons.gallery.active : tabIcons.gallery.inactive
              }
              size={styles.galleryIcon}
            />
          ),
        }}
      />

      {/* 4. マイページ */}
      <Tabs.Screen
        name="mypage"
        options={{
          title: "マイページ",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              source={
                focused ? tabIcons.mypage.active : tabIcons.mypage.inactive
              }
              size={styles.mypageIcon}
            />
          ),
        }}
      />

      {/* ==========================================
          タブバーに表示しない画面
          ========================================== */}
      <Tabs.Screen
        name="post"
        options={{
          href: null, // これによりタブバーから消えます
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          href: null, // これによりタブバーから消えます
        }}
      />
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
      <Tabs.Screen
        name="post/[id]"
        options={{
          href: null, // これによりタブバーから消えます
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#DDDDDD",
    paddingTop: 8,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: "500",
    marginTop: 4,
  },
  homeIcon: { width: 40, height: 40 },
  cartIcon: { width: 28, height: 28 },
  galleryIcon: { width: 24, height: 27 },
  mypageIcon: { width: 22, height: 22 },
});
