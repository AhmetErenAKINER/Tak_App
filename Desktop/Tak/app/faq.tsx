import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { AccordionItem } from "../src/components/AccordionItem";
import { AppScaffold } from "../src/components/AppScaffold";
import { COLORS, SPACING } from "../src/constants/theme";
import { faqService } from "../src/services/faqService";
import { FaqItem } from "../src/types";

export default function FaqScreen() {
  const router = useRouter();
  const [items, setItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setLoading(true);
      const response = await faqService.getAll();
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
    <AppScaffold title="SIKCA SORULAN SORULAR" leftLabel="GERI DON" onLeftPress={() => router.back()}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator color={COLORS.white} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.list}>
            <Text style={styles.caption}>Sorularin uzerine dokunarak acabilirsiniz.</Text>
            {items.map((item) => (
              <AccordionItem key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      )}
    </AppScaffold>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    gap: SPACING.sm,
    paddingBottom: SPACING.xl,
  },
  caption: {
    color: COLORS.textLight,
    opacity: 0.85,
    fontSize: 14,
  },
});
