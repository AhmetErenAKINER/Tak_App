import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { COLORS, SPACING } from "../constants/theme";

type LoadingStateProps = {
  label?: string;
};

export function LoadingState({ label = "Loading..." }: LoadingStateProps) {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="small" color={COLORS.primary} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.sm,
    paddingVertical: SPACING.lg,
  },
  label: {
    color: COLORS.textMuted,
    fontSize: 14,
  },
});
