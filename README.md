# Shared Components

## Setting Up

Pull this repo:

```bash
git clone https://github.com/zxzxlch/dcube-shared-components.git
cd dcube-shared-components
```

Install the dependencies and TypeScript.

```bash
npm install
npm install -g typescript
```

Open `assets/file-upload.sketch` and run the `render` script.

```bash
npm run render
```

Any changes to the code will automatically update the currently opened Sketch file (page 3).

## Customize Theme

Try changing the theme and see how the styles change in the Sketch file.

```typescript
// src/designSystem.ts
export * from './themes/myLegacyTheme';
```

You can also create your own custom theme. Refer to React Sketch.app's [documentation](http://airbnb.io/react-sketchapp/docs/styling.html) for the full list of style attributes.
