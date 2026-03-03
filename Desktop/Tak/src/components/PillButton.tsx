import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { COLORS, RADIUS, SPACING } from "../constants/theme";

type PillButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
};

export function PillButton({ label, onPress, disabled, loading, style }: PillButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.88}
      disabled={disabled || loading}
      style={[styles.button, (disabled || loading) && styles.disabled, style]}
    >
      {loading ? <ActivityIndicator color={COLORS.white} /> : <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 54,
    borderRadius: RADIUS.pill,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.primaryDark,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.lg,
  },
  disabled: {
    opacity: 0.6,
  },
  label: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 17,
  },
});
