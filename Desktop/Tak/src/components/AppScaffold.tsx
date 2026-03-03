import { ReactNode } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { COLORS, RADIUS, SPACING } from "../constants/theme";

type AppScaffoldProps = {
  title: string;
  leftLabel?: string;
  onLeftPress?: () => void;
  children: ReactNode;
};

export function AppScaffold({ title, leftLabel, onLeftPress, children }: AppScaffoldProps) {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.root}>
        <View style={styles.topWhiteBar}>
          <View style={styles.logoRow}>
            <Ionicons name="medical" size={32} color={COLORS.primaryDark} />
            <Text style={styles.logoText}>TAK</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>NN</Text>
          </View>
        </View>

        <View style={styles.navBar}>
          {leftLabel ? (
            <TouchableOpacity style={styles.leftAction} onPress={onLeftPress}>
              <Ionicons name="arrow-back" size={16} color={COLORS.white} />
              <Text style={styles.leftActionText}>{leftLabel}</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
          <Text style={styles.navTitle}>{title}</Text>
        </View>

        <View style={styles.content}>{children}</View>

        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.bottomButton} onPress={() => router.push("/")}>
            <Text style={styles.bottomButtonText}>HAKKINDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={() => router.push("/expert")}>
            <Text style={styles.bottomButtonText}>ILETISIM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topWhiteBar: {
    height: 76,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xs,
  },
  logoText: {
    color: COLORS.primaryDark,
    fontSize: 34,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primaryDark,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  navBar: {
    height: 54,
    backgroundColor: COLORS.surfaceDark,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: SPACING.md,
  },
  leftAction: {
    minWidth: 92,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: RADIUS.pill,
    paddingVertical: 6,
    paddingHorizontal: SPACING.sm,
  },
  leftActionText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },
  navTitle: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    padding: SPACING.md,
  },
  bottomBar: {
    height: 60,
    backgroundColor: COLORS.surfaceDark,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingHorizontal: SPACING.md,
  },
  bottomButton: {
    minWidth: 144,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.pill,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 9,
    backgroundColor: "rgba(0,0,0,0.08)",
  },
  bottomButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
});
