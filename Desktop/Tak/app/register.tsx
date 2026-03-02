import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { FormTextInput } from "../src/components/FormTextInput";
import { ScreenContainer } from "../src/components/ScreenContainer";
import { COLORS, RADIUS, SPACING } from "../src/constants/theme";
import { registrationService } from "../src/services/registrationService";

const initialState = {
  fullName: "",
  age: "",
  phone: "",
  symptoms: "",
};

export default function RegisterScreen() {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const isValid = form.fullName.trim() && form.age.trim() && form.phone.trim();

  const handleSubmit = async () => {
    if (!isValid) {
      setMessage("Please fill full name, age, and phone number.");
      return;
    }

    setSubmitting(true);
    setMessage("");
    const result = await registrationService.submit(form);
    setSubmitting(false);

    if (result.ok) {
      setMessage("Registration completed successfully.");
      setForm(initialState);
    }
  };

  return (
    <ScreenContainer title="Registration" subtitle="Patient intake and symptom declaration">
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <FormTextInput
          label="Full Name"
          value={form.fullName}
          placeholder="Enter full name"
          onChangeText={(value) => setForm((prev) => ({ ...prev, fullName: value }))}
        />

        <FormTextInput
          label="Age"
          value={form.age}
          placeholder="Enter age"
          keyboardType="number-pad"
          onChangeText={(value) => setForm((prev) => ({ ...prev, age: value }))}
        />

        <FormTextInput
          label="Phone Number"
          value={form.phone}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          onChangeText={(value) => setForm((prev) => ({ ...prev, phone: value }))}
        />

        <FormTextInput
          label="Symptoms (Optional)"
          value={form.symptoms}
          placeholder="Describe current symptoms"
          multiline
          onChangeText={(value) => setForm((prev) => ({ ...prev, symptoms: value }))}
        />

        <Pressable onPress={handleSubmit} style={[styles.submit, submitting ? styles.disabled : null]} disabled={submitting}>
          <Text style={styles.submitText}>{submitting ? "Submitting..." : "Submit Registration"}</Text>
        </Pressable>

        {message ? (
          <View style={styles.messageBox}>
            <Text style={styles.messageText}>{message}</Text>
          </View>
        ) : null}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.md,
    paddingBottom: SPACING.xl,
  },
  submit: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.sm,
    paddingVertical: SPACING.sm,
    alignItems: "center",
  },
  disabled: {
    opacity: 0.65,
  },
  submitText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  messageBox: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.sm,
    padding: SPACING.sm,
  },
  messageText: {
    color: COLORS.primaryDark,
    fontWeight: "600",
  },
});
