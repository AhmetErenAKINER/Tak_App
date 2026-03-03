import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { AppScaffold } from "../src/components/AppScaffold";
import { PillButton } from "../src/components/PillButton";
import { COLORS, RADIUS, SPACING } from "../src/constants/theme";
import { registrationService } from "../src/services/registrationService";

const initialState = {
  fullName: "",
};

export default function RegisterScreen() {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const isValid = form.fullName.trim().length > 2;

  const handleSubmit = async () => {
    if (!isValid) {
      Alert.alert("Eksik Bilgi", "Lutfen ad soyad bilgisini giriniz.");
      return;
    }

    setSubmitting(true);
    const result = await registrationService.submit(form);
    setSubmitting(false);

    if (result.ok) {
      Alert.alert("Basarili", "Kayit olusturuldu.");
      setForm(initialState);
    }
  };

  return (
    <AppScaffold title="KAYIT OLUSTUR" leftLabel="GERI DON" onLeftPress={() => router.back()}>
      <View style={styles.container}>
        <View style={styles.illustration} />

        <Text style={styles.screenTitle}>HASTA KAYDI</Text>

        <TextInput
          value={form.fullName}
          placeholder="AD SOYAD"
          placeholderTextColor={COLORS.textLight}
          onChangeText={(value) => setForm((prev) => ({ ...prev, fullName: value }))}
          style={styles.input}
        />

        <PillButton
          label="KAYIT OLUSTUR"
          onPress={handleSubmit}
          loading={submitting}
          disabled={!isValid}
          style={styles.submit}
        />
      </View>
    </AppScaffold>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: SPACING.md,
    gap: SPACING.md,
  },
  illustration: {
    height: 170,
    borderRadius: RADIUS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  screenTitle: {
    color: COLORS.textLight,
    textAlign: "center",
    fontSize: 44,
    fontWeight: "300",
    letterSpacing: 0.4,
  },
  input: {
    height: 54,
    borderRadius: RADIUS.pill,
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.white,
    paddingHorizontal: SPACING.lg,
    backgroundColor: "rgba(255,255,255,0.07)",
    fontSize: 18,
    fontWeight: "600",
  },
  submit: {
    marginTop: SPACING.sm,
  },
});
