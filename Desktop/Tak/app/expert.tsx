import { useMemo, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { AppScaffold } from "../src/components/AppScaffold";
import { PillButton } from "../src/components/PillButton";
import { COLORS, RADIUS, SPACING } from "../src/constants/theme";
import { ExpertQuestion } from "../src/types";

export default function ExpertScreen() {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState<ExpertQuestion[]>([]);

  const isValid = useMemo(() => question.trim().length > 3, [question]);

  const handleSubmit = () => {
    if (!isValid) {
      Alert.alert("Eksik Bilgi", "Lutfen sorunuzu yaziniz.");
      return;
    }

    const record: ExpertQuestion = {
      id: Date.now().toString(),
      text: question.trim(),
      createdAt: new Date().toLocaleString("tr-TR"),
    };

    // Demo: Butona basilinca hem listeye eklenir hem log'a yazilir.
    console.log("Uzmana sor:", record);
    setHistory((prev) => [record, ...prev]);
    setQuestion("");
    Alert.alert("Basarili", "Sorunuz uzmana iletildi.");
  };

  return (
    <AppScaffold title="ILETISIM" leftLabel="ANA SAYFA" onLeftPress={() => router.push("/")}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.role}>Uzm. Hem.</Text>
          <Text style={styles.name}>Nilgun ARAS</Text>

          <View style={styles.contactPill}>
            <Text style={styles.contactText}>+90 (505) 000 00 00</Text>
          </View>

          <View style={styles.contactPill}>
            <Text style={styles.contactText}>takuzman@gmail.com</Text>
          </View>

          <Text style={styles.note}>
            Lutfen acil durumlarda arayin. Sorulariniza "Uzmana Sor" ekranindan cevap alabilirsiniz.
          </Text>
        </View>

        <View style={styles.askSection}>
          <TextInput
            value={question}
            onChangeText={setQuestion}
            placeholder="Sorunuzu yazin"
            placeholderTextColor={COLORS.textLight}
            style={styles.input}
          />
          <PillButton label="SORUYU GONDER" onPress={handleSubmit} disabled={!isValid} />
        </View>

        <View style={styles.historySection}>
          <Text style={styles.historyTitle}>GECMIS SORULARINIZ</Text>
          {history.map((item) => (
            <View key={item.id} style={styles.historyItem}>
              <Text style={styles.historyText}>{item.text}</Text>
              <Text style={styles.historyDate}>{item.createdAt}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </AppScaffold>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: RADIUS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "rgba(0,0,0,0.08)",
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  role: {
    color: COLORS.textLight,
    fontSize: 20,
    fontWeight: "300",
  },
  name: {
    color: COLORS.white,
    fontSize: 44,
    fontWeight: "700",
    marginBottom: SPACING.md,
  },
  contactPill: {
    height: 56,
    borderRadius: RADIUS.pill,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.sm,
  },
  contactText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "600",
  },
  note: {
    marginTop: SPACING.md,
    color: COLORS.textLight,
    lineHeight: 21,
    fontSize: 15,
  },
  askSection: {
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  input: {
    minHeight: 60,
    borderRadius: RADIUS.pill,
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.white,
    fontSize: 18,
    paddingHorizontal: SPACING.lg,
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  historySection: {
    marginBottom: SPACING.xl,
  },
  historyTitle: {
    color: COLORS.textLight,
    fontSize: 18,
    letterSpacing: 1,
    marginBottom: SPACING.sm,
  },
  historyItem: {
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "rgba(255,255,255,0.06)",
    padding: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  historyText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },
  historyDate: {
    color: COLORS.textLight,
    fontSize: 12,
  },
});
