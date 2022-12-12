
# React Redux start vite and flash

## Run it on your computer

Clone the project

```bash
  git clone https://github.com/ulvimemmeedov/react-redux-start
```

Go to the project directory

```bash
  cd my-project
```

Delete .git

```bash
  cd my-project
```

Install required packages

```bash
  npm install
```

Run the server

Dev

```bash
  npm run dev
```

  
Build

```bash
  npm run build
```

Preview

```bash
  npm run preview
```

## Tests

Run the following command to run the tests

```bash
  npm run test
```

Test example

```js
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders headline', () => {
        render(<App/>);

        screen.debug();

    });

    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });
});
```

## Used technologies

**stack:** React, Redux, Redux tool kit, TailwindCSS, ViteJs, Vitest, Bootstrap, Reactstrap, Material Tailwind

 