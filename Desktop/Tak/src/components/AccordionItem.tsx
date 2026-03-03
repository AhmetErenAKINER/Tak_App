import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, RADIUS, SPACING } from "../constants/theme";
import { FaqItem } from "../types";

type AccordionItemProps = {
  item: FaqItem;
};

export function AccordionItem({ item }: AccordionItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setExpanded((prev) => !prev)} style={styles.header}>
        <Text style={styles.question}>{item.question}</Text>
        <MaterialCommunityIcons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={24}
          color={COLORS.white}
        />
      </Pressable>
      {expanded ? <Text style={styles.answer}>{item.answer}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.08)",
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: SPACING.sm,
    padding: SPACING.md,
  },
  question: {
    flex: 1,
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  answer: {
    color: COLORS.textLight,
    lineHeight: 20,
    fontSize: 14,
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
});
