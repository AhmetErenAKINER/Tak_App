export const COLORS = {
  primary: "#06AEDD",
  primaryDark: "#0078B6",
  secondary: "#00BFE7",
  background: "#079FD5",
  surface: "#0DADE0",
  surfaceDark: "#048BC9",
  white: "#FFFFFF",
  textLight: "#E8F8FF",
  border: "rgba(255,255,255,0.35)",
  // Backward-compatible tokens for existing components
  text: "#FFFFFF",
  textMuted: "#D9F2FF",
  success: "#2E9C5D",
  danger: "#C23B3B",
} as const;

export const SPACING = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
} as const;

export const RADIUS = {
  sm: 12,
  md: 16,
  lg: 22,
  pill: 28,
  card: 22,
} as const;
