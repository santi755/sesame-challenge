# CUSTOM ICONS

This folder is for custom icons that are available from the design system. These icons are created by the design team.

## Adding a new icon

1. Create a new SVG file in `./library` folder.
2. Add the new icon to the `./icons.ts` file.

## Usage

```tsx
import { IconBase } from '@/components/atoms/icons/IconBase';

<template>
  <IconBase name="IconName" />
</template>;
```
