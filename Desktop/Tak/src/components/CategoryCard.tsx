import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, RADIUS, SPACING } from "../constants/theme";

type CategoryCardProps = {
  title: string;
  image: string;
  onPress: () => void;
};

export function CategoryCard({ title, image, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 205,
    borderRadius: RADIUS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: SPACING.sm,
  },
  image: {
    width: "100%",
    height: 148,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.sm,
  },
  title: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
  },
});
