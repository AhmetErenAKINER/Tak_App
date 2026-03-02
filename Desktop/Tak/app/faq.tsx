import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AccordionItem } from "../src/components/AccordionItem";
import { EmptyState } from "../src/components/EmptyState";
import { LoadingState } from "../src/components/LoadingState";
import { ScreenContainer } from "../src/components/ScreenContainer";
import { SPACING } from "../src/constants/theme";
import { faqService } from "../src/services/faqService";
import { FaqItem } from "../src/types";

export default function FaqScreen() {
  const [items, setItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setLoading(true);
      const response = await faqService.getFaqs();
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
    <ScreenContainer title="FAQ" subtitle="Frequently asked medical assistant questions">
      {loading ? <LoadingState label="Loading FAQs..." /> : null}

      {!loading && items.length === 0 ? (
        <EmptyState message="No FAQ items are available right now." />
      ) : null}

      {!loading && items.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.list}>
            <Text style={styles.caption}>Tap an item to expand details.</Text>
            {items.map((item) => (
              <AccordionItem key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      ) : null}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: SPACING.sm,
    paddingBottom: SPACING.xl,
  },
  caption: {
    opacity: 0.8,
    fontSize: 13,
  },
});
