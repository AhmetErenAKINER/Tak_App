import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { AppScaffold } from "../src/components/AppScaffold";
import { CategoryCard } from "../src/components/CategoryCard";
import { SPACING } from "../src/constants/theme";
import { CategoryItem } from "../src/types";

const CATEGORY_ITEMS: CategoryItem[] = [
  {
    id: "videos",
    title: "VIDEOLAR",
    route: "/videos",
    image: "https://picsum.photos/seed/tak-home-video/500/320",
  },
  {
    id: "tak",
    title: "TAK",
    route: "/register",
    image: "https://picsum.photos/seed/tak-home-tak/500/320",
  },
  {
    id: "faq",
    title: "SIKCA SORULAN SORULAR",
    route: "/faq",
    image: "https://picsum.photos/seed/tak-home-faq/500/320",
  },
  {
    id: "expert",
    title: "UZMANA SOR",
    route: "/expert",
    image: "https://picsum.photos/seed/tak-home-expert/500/320",
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <AppScaffold title="ANA SAYFA">
      <View style={styles.row}>
        <CategoryCard
          title={CATEGORY_ITEMS[0].title}
          image={CATEGORY_ITEMS[0].image}
          onPress={() => router.push(CATEGORY_ITEMS[0].route)}
        />
      </View>

      <View style={styles.row}>
        <CategoryCard
          title={CATEGORY_ITEMS[1].title}
          image={CATEGORY_ITEMS[1].image}
          onPress={() => router.push(CATEGORY_ITEMS[1].route)}
        />
        <CategoryCard
          title={CATEGORY_ITEMS[2].title}
          image={CATEGORY_ITEMS[2].image}
          onPress={() => router.push(CATEGORY_ITEMS[2].route)}
        />
      </View>

      <View style={styles.row}>
        <CategoryCard
          title={CATEGORY_ITEMS[3].title}
          image={CATEGORY_ITEMS[3].image}
          onPress={() => router.push(CATEGORY_ITEMS[3].route)}
        />
      </View>
    </AppScaffold>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
});
