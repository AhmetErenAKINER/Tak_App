import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, RADIUS, SPACING } from "../constants/theme";
import { VideoItem } from "../types";

type VideoCardProps = {
  video: VideoItem;
};

export function VideoCard({ video }: VideoCardProps) {
  const openVideo = async () => {
    const canOpen = await Linking.canOpenURL(video.url);
    if (canOpen) {
      await Linking.openURL(video.url);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <MaterialCommunityIcons name="play-circle-outline" size={28} color={COLORS.primary} />
        <View style={styles.main}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.meta}>
            {video.category} · {video.duration}
          </Text>
        </View>
      </View>

      <Pressable onPress={openVideo} style={styles.button}>
        <Text style={styles.buttonText}>Watch Video</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    gap: SPACING.md,
  },
  row: {
    flexDirection: "row",
    gap: SPACING.sm,
    alignItems: "flex-start",
  },
  main: {
    flex: 1,
    gap: SPACING.xs,
  },
  title: {
    color: COLORS.text,
    fontWeight: "600",
    fontSize: 15,
  },
  meta: {
    color: COLORS.textMuted,
    fontSize: 13,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.sm,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 13,
  },
});
