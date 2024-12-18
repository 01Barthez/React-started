import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["dist", "node_modules", "*.config.js"], // Exclut les dossiers ou fichiers inutiles
  },
  {
    files: ["**/*.{ts,tsx}"], // S'applique uniquement aux fichiers TypeScript et React
    languageOptions: {
      ecmaVersion: 2021, // Version ECMAScript moderne
      sourceType: "module", // Utilisation des modules ES
      globals: globals.browser, // Définit les variables globales disponibles dans le navigateur
      parser: tseslintParser, // Utilise le parser TypeScript
    },
    plugins: {
      react, // Plugin React pour vérifier les conventions React
      "react-hooks": reactHooks, // Vérifie les règles spécifiques aux hooks React
      "react-refresh": reactRefresh, // Vérifie les exportations nécessaires pour React Refresh
      "@typescript-eslint": tseslint, // Plugin TypeScript ESLint pour des règles spécifiques à TS
    },
    extends: [
      js.configs.recommended, // Configuration de base pour JS
      "plugin:react/recommended", // Bonnes pratiques pour React
      "plugin:@typescript-eslint/recommended", // Bonnes pratiques pour TypeScript
      "plugin:react-hooks/recommended", // Bonnes pratiques pour les hooks React
      "plugin:react-refresh/recommended", // Bonnes pratiques pour React Refresh
      "prettier", // Désactive les règles en conflit avec Prettier
    ],
    settings: {
      react: {
        version: "detect", // Détecte automatiquement la version de React utilisée
      },
    },
    rules: {
      // --- Règles React ---
      "react/jsx-uses-react": "off", // Désactivé pour React 17+ (JSX transform)
      "react/react-in-jsx-scope": "off", // Désactivé pour React 17+ (JSX transform)
      "react-hooks/rules-of-hooks": "error", // Vérifie les règles des hooks
      "react-hooks/exhaustive-deps": "warn", // Vérifie les dépendances des hooks

      // --- Règles TypeScript ---
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ], // Ignore les variables ou arguments commençant par "_"
      "@typescript-eslint/explicit-function-return-type": "off", // Facultatif pour les projets React
      "@typescript-eslint/no-explicit-any": "warn", // Encourage l'évitement de `any`
      "@typescript-eslint/consistent-type-imports": "warn", // Préfère `import type` pour les types

      // --- Règles générales ---
      "no-console": "warn", // Avertit sur les `console.log` pour garder un code propre
      "no-debugger": "error", // Erreur si `debugger` est utilisé
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ], // Assure que seules les exportations nécessaires sont présentes
    },
  },
];
