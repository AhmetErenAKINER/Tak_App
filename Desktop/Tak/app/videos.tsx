import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { EmptyState } from "../src/components/EmptyState";
import { LoadingState } from "../src/components/LoadingState";
import { ScreenContainer } from "../src/components/ScreenContainer";
import { VideoCard } from "../src/components/VideoCard";
import { SPACING } from "../src/constants/theme";
import { videoService } from "../src/services/videoService";
import { VideoItem } from "../src/types";

export default function VideosScreen() {
  const [items, setItems] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setLoading(true);
      const response = await videoService.getVideos();
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
    <ScreenContainer title="Video Gallery" subtitle="Educational content for patients and caregivers">
      {loading ? <LoadingState label="Loading videos..." /> : null}

      {!loading && items.length === 0 ? (
        <EmptyState message="No videos available at this moment." />
      ) : null}

      {!loading && items.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.list}>
            {items.map((item) => (
              <VideoCard key={item.id} video={item} />
            ))}
          </View>
        </ScrollView>
      ) : null}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: SPACING.sm,
    paddingBottom: SPACING.xl,
  },
});
