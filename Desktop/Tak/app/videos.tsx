import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { AppScaffold } from "../src/components/AppScaffold";
import { VideoGridCard } from "../src/components/VideoGridCard";
import { COLORS, SPACING } from "../src/constants/theme";
import { videoService } from "../src/services/videoService";
import { VideoItem } from "../src/types";

export default function VideosScreen() {
  const router = useRouter();
  const [items, setItems] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setLoading(true);
      const response = await videoService.getAll();
      if (active) {
        setItems(response);
        setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return (
    <AppScaffold title="VIDEOLAR" leftLabel="ANA SAYFA" onLeftPress={() => router.push("/")}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator color={COLORS.white} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.list}>
            {items.map((item) => (
              <VideoGridCard key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      )}
    </AppScaffold>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: SPACING.xl,
  },
});
