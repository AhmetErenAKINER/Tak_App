import { Linking, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { COLORS, RADIUS, SPACING } from "../constants/theme";
import { VideoItem } from "../types";

type VideoGridCardProps = {
  item: VideoItem;
};

export function VideoGridCard({ item }: VideoGridCardProps) {
  const handleOpen = async () => {
    const canOpen = await Linking.canOpenURL(item.url);
    if (canOpen) {
      await Linking.openURL(item.url);
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleOpen} activeOpacity={0.9}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.footer}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    borderRadius: RADIUS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.1)",
    marginBottom: SPACING.md,
  },
  thumbnail: {
    width: "100%",
    height: 106,
  },
  footer: {
    padding: SPACING.sm,
    minHeight: 60,
    justifyContent: "center",
  },
  title: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 17,
    textAlign: "center",
  },
});
