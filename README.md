# Real Home App 🏠

**Real Home** is a modern real estate app that helps users find and book properties. It features advanced search, filters, and a seamless user experience.

---

## 🚀 Features

- **Property Search**: Filter by type, price, and more.
- **User Reviews and Ratings**: View feedback for each property.
- **Image Galleries**: Browse property photos.
- **User Profile**: Manage your account and settings.
- **Google Authentication**: Easy login via OAuth2.
- **Interactive UI**: Built with TailwindCSS and NativeWind.

---

## 🛠️ Installation and Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Start the project
```bash
npx expo start
```

You can run the app on:
- **Android**: Emulator or physical device.
- **iOS**: Simulator or physical device.
- **Web**: Directly in your browser.

---

## 🧰 Technologies

- **React Native**: Core framework for the app.
- **Expo**: Simplifies development and builds.
- **NativeWind**: TailwindCSS for React Native.
- **Appwrite**: Backend for data management and authentication.
- **Expo Router**: File-based routing.

---

## 🗄️ Backend: Appwrite

This project uses **Appwrite** as the backend for managing data and authentication. Below are the key collections and their purposes:

### Collections:
- **Properties**: Stores property details.
- **Agents**: Stores information about real estate agents.
- **Galleries**: Manages property images.
- **Reviews**: Stores user reviews and ratings.

### Environment Variables:
Create a `.env.local` file in the root of the project and add the following:

```env
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_ENDPOINT=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=
EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=
```

### Appwrite Setup:
1. Install Appwrite on your server or use [Appwrite Cloud](https://appwrite.io/cloud).
2. Create a project and configure the collections listed above.
3. Update the environment variables in your `.env.local` file.

---
