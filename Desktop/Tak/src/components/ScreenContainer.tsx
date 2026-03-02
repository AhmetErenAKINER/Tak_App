import { ReactNode } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS, SPACING } from "../constants/theme";

type ScreenContainerProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function ScreenContainer({ title, subtitle, children }: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.sm,
  },
  title: {
    color: COLORS.primaryDark,
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: SPACING.xs,
    color: COLORS.textMuted,
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
  },
});
