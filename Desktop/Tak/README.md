# TAK Medical Assistant

TAK is a lightweight, modular React Native medical assistant application built with Expo SDK 51 and Expo Router.  
It includes:

- Home screen
- FAQ screen with accordion behavior
- Patient registration form
- Video gallery
- Reusable loading and empty states

The project is designed for compatibility with both:

- **Expo Go** (fast development and testing)
- **Local Android Studio builds** (native Android workflow)

## Tech Stack

- React Native
- Expo SDK 51 (Managed Workflow)
- Expo Router
- TypeScript
- `@expo/vector-icons`
- `StyleSheet` based styling (no build-time styling dependencies)

## Project Structure

```text
app/
  _layout.tsx
  index.tsx
  faq.tsx
  register.tsx
  videos.tsx

src/
  components/
    AccordionItem.tsx
    EmptyState.tsx
    FormTextInput.tsx
    InfoCard.tsx
    LoadingState.tsx
    ScreenContainer.tsx
    VideoCard.tsx
  constants/
    theme.ts
  services/
    faqService.ts
    registrationService.ts
    videoService.ts
  types/
    index.ts
```

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+
- Android Studio (for local emulator/device build flow)
- Expo Go app on Android device (for quick mobile testing)

## Installation

```bash
npm install
```

## Run in Development

### Start Metro

```bash
npm run start
```

### Run with Expo Go

1. Start Metro using `npm run start`.
2. Press `a` to open Android emulator, or scan the QR code in Expo Go.
3. Verify all routes:
   - `/` (Home)
   - `/faq`
   - `/register`
   - `/videos`

### Run directly on Android from CLI

```bash
npm run android
```

## Local Android Studio Build (Managed Workflow)

This project supports local Android native generation using Expo prebuild.

### 1) Generate native Android project

```bash
npx expo prebuild --platform android
```

### 2) Open Android project in Android Studio

Open:

```text
android/
```

### 3) Build and run from Android Studio

- Let Gradle sync complete.
- Select emulator/device.
- Run app from Android Studio (Run button).

### 4) Optional CLI build/run from Android folder

```bash
cd android
./gradlew assembleDebug
```

On Windows PowerShell:

```powershell
cd android
.\gradlew.bat assembleDebug
```

## Type Check

```bash
npm run typecheck
```

## Notes for Production Readiness

- Replace mock service data with API integrations.
- Add backend validation, authentication, and secure storage.
- Add legal/privacy compliance steps for real patient data.
- Add unit/integration tests for all form, service, and navigation flows.

## Medical Disclaimer

TAK is a support assistant and educational tool.  
It does **not** provide diagnosis and does **not** replace professional medical care.
