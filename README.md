# Gluestack UI + NativeWind Monorepo Starter Kit

> **This repository is for developers who are struggling to use Gluestack UI and Nativewind in a monorepo setup applications.**

A production-ready monorepo starter kit that combines the power of **Gluestack UI** with **NativeWind** (Tailwind CSS for React Native) in a well-structured monorepo architecture. Perfect for teams looking to build scalable applications with consistent design systems.

## 🚀 Tech Stack

### Core Technologies
- **React Native** - Cross-platform mobile development
- **React Native Web** - Web support for React Native components
- **Expo** - Development platform and tools
- **NativeWind** `4.1.23` - Tailwind CSS for React Native
- **Tailwind CSS** `3.4.0` - Utility-first CSS framework
- **Gluestack UI** `3.0.10` - Component library with design system

### Monorepo & Build Tools
- **pnpm** `10.15.0` - Fast, disk space efficient package manager
- **Turbo** `2.5.6` - High-performance build system
- **tsdown** `0.15.2` - TypeScript library bundler

### Additional Libraries
- **React Native Reanimated** `3.19.0` - Smooth animations
- **React Native SVG** `15.12.0` - SVG support
- **Lucide React Native** `^0.544.0` - Icon library
- **@gorhom/bottom-sheet** `^5.2.6` - Bottom sheet component

## 📁 Project Structure

```
├── apps/
│   └── native/                 # React Native Expo app
│       ├── src/
│       │   ├── demo/          # Component examples
│       │   └── App.tsx        # Main app component
│       ├── assets/            # App assets
│       └── tailwind.config.js # Tailwind configuration
├── packages/
│   └── ui/                    # Shared UI component library
│       ├── src/
│       │   ├── components/    # Reusable components
│       │   └── blocks/        # Complex UI blocks
│       └── dist/              # Built components
└── pnpm-workspace.yaml        # Workspace configuration
```

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (v10.15.0 or higher)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd gluestack-ui-nativewind-starter-kit
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Build the UI Package

```bash
pnpm build
```

### 4. Start Development

#### For Android:
```bash
pnpm example:android
```

#### For Web:
```bash
pnpm example:web
```

## 🏗️ Development Workflow

### Building Components

The UI package uses `tsdown` for building TypeScript components:

```bash
# Build the UI package
pnpm --filter=@repo/ui build

# Or build everything
pnpm build
```

### Adding New Components

1. Create your component in `packages/ui/src/components/`
2. Run `pnpm build` to compile
3. Import and use in your app: `import { YourComponent } from '@repo/ui'`

### Styling Guidelines

- Use **NativeWind** classes for styling
- Follow the established color system in `tailwind.config.js`
- Leverage **Gluestack UI** components as base components
- Use **Tailwind Variants** for component variants

## 🔧 Configuration

### Tailwind Configuration
The `tailwind.config.js` is pre-configured with:
- NativeWind preset
- Custom color system
- Component safelist for dynamic classes
- Monorepo content paths

### Metro Configuration
Metro is configured to work with the monorepo structure and NativeWind.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Gluestack UI](https://ui.gluestack.io/) for the amazing component library
- [NativeWind](https://www.nativewind.dev/) for bringing Tailwind to React Native
- [Expo](https://expo.dev/) for the development platform
- [Turbo](https://turbo.build/) for the monorepo build system

**Happy coding! 🎉**

Built with ❤️ for the community.
