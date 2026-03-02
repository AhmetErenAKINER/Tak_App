import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, RADIUS, SPACING } from "../constants/theme";

type InfoCardProps = {
  title: string;
  description: string;
  rightElement?: ReactNode;
};

export function InfoCard({ title, description, rightElement }: InfoCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {rightElement ? <View>{rightElement}</View> : null}
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
    flexDirection: "row",
    justifyContent: "space-between",
    gap: SPACING.md,
  },
  main: {
    flex: 1,
    gap: SPACING.xs,
  },
  title: {
    color: COLORS.primaryDark,
    fontSize: 17,
    fontWeight: "700",
  },
  description: {
    color: COLORS.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
});
