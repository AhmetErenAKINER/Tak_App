# TAK Mobile App (React Native)

Bu proje, React Native + Expo (Managed Workflow) kullanilarak gelistirilen TAK uygulamasidir.
Navigasyon yapisi `expo-router` ile kurgulanmistir.

## Ozellikler

- Hasta Kaydi ekrani
- Ana Sayfa kategori kartlari
- Videolar (grid liste)
- Sikca Sorulan Sorular (accordion)
- Uzmana Sor / Iletisim ekrani

## Kullanilan Teknolojiler

- React Native
- Expo SDK 51
- Expo Router
- TypeScript
- Android Studio (native Android build ve debug icin)

## Yerelde nasil calistiracagim? Gerekli kurulum ayrintilari

### Gereksinimler

- Node.js 18+
- npm
- Android Studio (SDK + Emulator)
- (Opsiyonel) Android telefonda Expo Go

### Kurulum

```bash
npm install
```

### Expo ile calistirma

```bash
npx expo start
```

Telefon ile calistirmak icin ayni Wi-Fi aginda Expo Go ile QR okutabilirsiniz.

### Android Studio ile calistirma

1. Proje kokunde `android/` klasoru yoksa olusturun:

```bash
npx expo prebuild --platform android
```

2. Android Studio ile `android/` klasorunu acin.
3. Gradle Sync tamamlandiktan sonra emulator veya cihaz secin.
4. `Run` (app) ile calistirin.

Alternatif terminal komutu:

```bash
npx expo run:android
```

## APK/IPA dosyalari

### APK (Android)

Debug APK almak icin:

```powershell
cd android
.\gradlew.bat assembleDebug
```

Olusan dosya:

`android/app/build/outputs/apk/debug/app-debug.apk`

### IPA (iOS)

IPA build almak icin macOS ve Xcode gerekir. Expo tarafinda EAS Build kullanilabilir:

```bash
npx eas build -p ios
```

## Proje Yapisi

```text
app/
  _layout.tsx
  index.tsx
  register.tsx
  videos.tsx
  faq.tsx
  expert.tsx

src/
  components/
    AppScaffold.tsx
    CategoryCard.tsx
    VideoGridCard.tsx
    PillButton.tsx
    AccordionItem.tsx
  constants/
    theme.ts
  services/
    faqService.ts
    registrationService.ts
    videoService.ts
  types/
    index.ts
```
