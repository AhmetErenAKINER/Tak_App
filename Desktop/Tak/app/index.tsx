import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScreenContainer } from "../src/components/ScreenContainer";
import { InfoCard } from "../src/components/InfoCard";
import { COLORS, RADIUS, SPACING } from "../src/constants/theme";

const QUICK_ACTIONS = [
  {
    href: "/faq" as const,
    title: "FAQ",
    description: "Read common patient questions and basic guidance.",
  },
  {
    href: "/register" as const,
    title: "Registration",
    description: "Submit your profile and symptom details for follow-up.",
  },
  {
    href: "/videos" as const,
    title: "Video Gallery",
    description: "Open short educational medical videos.",
  },
];

export default function HomeScreen() {
  return (
    <ScreenContainer title="TAK Medical Assistant" subtitle="Smart and modular patient support">
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <MaterialCommunityIcons name="hospital-box-outline" size={34} color="#FFFFFF" />
          <View style={styles.heroTextGroup}>
            <Text style={styles.heroTitle}>Your digital healthcare companion</Text>
            <Text style={styles.heroDescription}>
              Access information quickly, register for follow-up, and stay informed with trusted video content.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Navigation</Text>
          {QUICK_ACTIONS.map((item) => (
            <InfoCard
              key={item.href}
              title={item.title}
              description={item.description}
              rightElement={
                <Link href={item.href} asChild>
                  <Pressable style={styles.navButton}>
                    <MaterialCommunityIcons name="arrow-right" size={18} color="#FFFFFF" />
                  </Pressable>
                </Link>
              }
            />
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: SPACING.md,
    paddingBottom: SPACING.xl,
  },
  heroCard: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    flexDirection: "row",
    gap: SPACING.md,
  },
  heroTextGroup: {
    flex: 1,
    gap: SPACING.xs,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  heroDescription: {
    color: "#E8F7FF",
    lineHeight: 20,
  },
  section: {
    gap: SPACING.sm,
  },
  sectionTitle: {
    color: COLORS.primaryDark,
    fontWeight: "700",
    fontSize: 16,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
