# 🏥 DocMorris Pharmacy App – Coding Challenge

A cross-platform React Native app built as part of the DocMorris coding challenge. The app supports multiple pharmacy brands, ePrescription scanning via QR code and NFC, and a basic e-commerce flow.

---

## 📱 Platforms

- Android ✅
- iOS ✅

---

## ✨ Features

### 🌟 Core

- Product search with filtering
- Product detail screen with Add to Cart
- Cart with remove and subtotal functionality
- Checkout screen with order summary and confirmation
- Brand theming switcher (DocMorris ↔ Eurapon)

### 📷 Prescription Scanning

- QR code scanner using `react-native-vision-camera` + `vision-camera-code-scanner`
- NFC scanning for German health cards using `react-native-nfc-manager`

### 🧪 Testing & Quality

- Unit tests for store logic and interactions
- Snapshot + behavior tests for components
- CI pipeline via GitHub Actions:

  - ✅ Tests
  - ✅ ESLint
  - ✅ Type checking

---

## 🧱 Tech Stack

- **React Native (TypeScript)**
- **Styled-Components** for theming
- **Zustand** for state management
- **React Navigation (Native Stack)**
- **Jest + Testing Library** for testing
- **ESLint + TypeScript strict mode** for linting and type safety

---

## 🎨 Theming & Branding

Supports switching between two brands:

- `DocMorris`: green/white
- `Eurapon`: blue/yellow

### Theming Highlights

- Defined in `/theme/themes.ts`
- Applied globally with `styled-components`' `ThemeProvider`
- Runtime switching via `BrandSelectorScreen`

---

## 📂 Folder Structure

```
src/
  components/         # Reusable UI components
  screens/            # Search, Detail, Cart, Checkout, QR, NFC, Brand Selector
  store/              # Zustand stores (cart, brand, products)
  theme/              # Theme definitions + styled.d.ts
  navigation/         # React Navigation stack
  mock/               # Product mock data
  test/               # Custom render utils for tests
  __tests__/          # All unit and component tests
```

---

## 🧪 Running Tests

```bash
yarn test             # Run unit tests
yarn lint             # Run ESLint checks
yarn type-check       # Run TypeScript static checks
```

---

## ⚙️ GitHub Actions CI

CI runs on all pushes and pull requests to `main`, including:

- ✅ Linting
- ✅ Type checking
- ✅ Unit testing

Workflow file: `.github/workflows/test.yml`

---

## 🚀 Run the App Locally

```bash
# Install dependencies
yarn

# iOS
cd ios && pod install && cd ..
npx react-native run-ios

# Android
npx react-native run-android
```

---

## 🙌 Notes

- NFC reads are mocked unless tested on real devices with a proper appstoreconnect team account
- Secure local storage for prescription data not implemented (recommended: `react-native-encrypted-storage`)
- Face ID and native auth are ideal next steps
- Screens are modular and themed for scalable multi-brand rollout

---

## 🎉 Thank You!

This project was designed to demonstrate clean architecture, theming, testing practices, and thoughtful development. Looking forward to discussing it with your team!
