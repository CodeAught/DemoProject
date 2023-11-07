
# README

This README file provides an overview of the React Native app and its structure, highlighting the usage of RAM bundles and inline requires for optimizing performance. The app consists of two screens, `ScreenA` and `ScreenB`, and a heavy component, `ComponentA`, that is used in `ScreenB`.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Usage of RAM Bundles](#usage-of-ram-bundles)
3. [Benefits of Inline Requires](#benefits-of-inline-requires)
4. [Performance Metrics](#performance-metrics)

---

## Project Overview

This app is designed to showcase the usage of RAM bundles and inline requires to optimize performance during screen transitions. The app is composed of the following components:

- **ScreenA**: This is the initial screen of the app, and it serves as a landing page. Users can navigate to `ScreenB` by clicking the "Next" button.

- **ScreenB**: The second screen, accessible from `ScreenA`, demonstrates the concept of RAM bundles and inline requires. It utilizes `ComponentA` for rendering a large number of views.

- **ComponentA**: This is a heavy component that renders 500 views in a loop. It is used in `ScreenB` to showcase performance optimizations.

---

## Usage of RAM Bundles

### What are RAM Bundles?

RAM (Random-Access Modules) bundles are a method of optimizing the performance of React Native applications. These bundles allow you to load specific JavaScript modules into memory when needed, rather than loading the entire bundle upfront. This helps reduce initial loading times and improve overall app responsiveness.

### Benefits of RAM Bundles

- **Faster Startup**: RAM bundles can significantly reduce the initial load time of your app because they only load the essential code needed for the current screen. This leads to a faster startup experience for users.

- **Reduced Memory Consumption**: By loading only the necessary modules into memory, RAM bundles can reduce the memory footprint of your app. This is especially beneficial for devices with limited RAM.

- **Optimized Screen Transitions**: When transitioning between screens, RAM bundles allow you to load the required components and resources on-demand, making screen transitions smoother and more efficient.

In this project, we use RAM bundles to ensure that the code for `ScreenB` and `ComponentA` is loaded into memory only when the user navigates to `ScreenB`. This optimizes the app's performance and memory usage.

---

## Benefits of Inline Requires

### What are Inline Requires?

Inline requires are a technique in React Native that involves dynamically importing and rendering components. Instead of importing all components at the beginning, you can load them on-demand, precisely when they are needed.

### Benefits of Inline Requires

- **Improved Loading Times**: Inline requires reduce the initial loading time of your app by loading components on-demand. This is especially helpful for screens or components that are not part of the initial app flow.

- **Lower Memory Footprint**: Since components are only loaded when required, inline requires help keep your app's memory consumption in check, which is crucial for mobile devices with limited resources.

- **Optimized Resource Usage**: Inline requires allow you to efficiently manage your app's resources, loading only what's necessary for the current user flow. This results in a smoother and more responsive user experience.

In our project, we use inline requires to load `ComponentA` in `ScreenB` when the user navigates to `ScreenB`. This ensures that the heavy component is only loaded when needed, contributing to a more efficient app performance.

---

## Performance Metrics

To measure and analyze the impact of RAM bundles and inline requires on the app's performance, we have integrated the `@shopify/react-native-performance` (https://shopify.github.io/react-native-performance/docs/fundamentals/getting-started) library. This library provides valuable insights into screen transitions and rendering times, allowing us to quantify the improvements achieved through these optimization techniques.

Performance metrics can be collected and analyzed using this library, helping us make data-driven decisions to further enhance the app's performance.

---

By implementing RAM bundles and inline requires, this React Native app demonstrates a commitment to delivering a responsive and memory-efficient user experience. These techniques are valuable tools in the toolbox of any mobile app developer, especially when dealing with heavy components and complex screens.

# Run the app

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```