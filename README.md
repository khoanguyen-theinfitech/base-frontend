# Base-frontend

## 1. Technology

> - Node version **v22.14.0**.
> - Nextjs version **15.3.1**.

## 2. Operating Modes

- Run the command `npm run dev` to start development mode.
- Use `npm run build` and `npm run start` to build the application and run it.

## 3. OpenAPI

- First, get familiar with the `hey-api` library being used ([documents](https://heyapi.dev/openapi-ts/get-started)).

- To generate API definition files from `hey-api`, we have two methods:

  - Use the command **`npm run generate-api`**: This command will call your backend server to connect to the `openapi.json` file.
  - Use the command **`npm run generate-client`**: Before using this, ensure that you have the **`openapi.json`** file saved in **`src/lib/`**. This command will take the schemas in the `openapi.json` file to generate API definition files.

- Usage:

```ts
const { data, error } = useQuery({
  ...getPetByIdOptions({
    path: {
      petId: 1,
    },
  }),
});

const { data, error } = useInfiniteQuery({
  ...getFooInfiniteOptions({
    path: {
      fooId: 1,
    },
  }),
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  initialPageParam: 0,
});

const addPet = useMutation({
  ...addPetMutation(),
});

addPet.mutate({
  body: {
    name: 'Kitty',
  },
});
```

## 4. How to Declare a New Page

- To declare a new page, follow these steps:
  - In the `constants` directory, open the `router.constant.ts` file and add your new page definition.
    - Example:
      ```ts
      const routers = {
        top: {
          router: '/',
          pattern: '/',
          private: true,
          role: undefined,
        },
        login: {
          private: false,
          role: undefined,
          router: '/login',
          pattern: '/login',
        },
        // ...
      } satisfies Record<string, IRouter>;
      ```
    - The value of the `private` property can be `true`, `false`, or `undefined`:
      - `true`: The page is accessible **only after login**.
      - `false`: The page is accessible **only before login**.
      - `undefined`: The page is accessible **at any time**.
    - The value of the `role` property can be an `Array<string>` or `undefined`.
  - In the `app` directory, create the corresponding page according to the official Next.js App Router structure.
    > Refer to the [Next.js documentation](https://nextjs.org/docs) for detailed guidance.

## 5. Folder Structure

### 5.1 `public` directory

- This is where you place static assets that should be directly accessible from the browser.

### 5.2 `src` directory

- Contains all source code of the application.

#### 5.2.1 `app` directory

- The core of the App Router, a new architecture introduced in Next.js 13 and officially stable from Next.js 15. It gradually replaces the `pages` directory to offer a clearer and more powerful structure (routing, layout, loading, etc.).
- The `app/` folder is where you define routing, layout, templates, loading states, error boundaries, etc., using a file-based routing structure.
  > - For more details, please refer to the [Next.js documentation](https://nextjs.org/docs).

#### 5.2.2 `components` directory

- Contains reusable components of the application. This helps keep the code clean, maintainable, and modular by separating UI logic.

#### 5.2.3 `configs` directory

- Contains configuration files for the application, such as API configuration, environment setup, and third-party libraries (like Axios, i18n, etc.).
- Helps separate configuration from core logic, making it easier to manage and update.

#### 5.2.4 `constants` directory

- Stores constants used throughout the application, such as roles, page names, status codes, regex patterns, etc.
- Helps prevent errors caused by "magic strings/numbers" and makes it easier to update values from a single place.
- You can organize enums into a dedicated `enums/` subfolder for better clarity and separation.

  Example structure:

  ```
  constants/
  ├── regex.ts
  ├── roles.ts
  └── enums/
      ├── order-status.enum.ts
      ├── payment-method.enum.ts
      └── user-role.enum.ts
  ```

#### 5.2.5 `hooks` directory

- Contains custom React hooks to reuse logic across components.
- Typically includes files like `useAuth.hook.ts`, `useDebounce.hook.ts`, `useFetch.hook.ts`, etc.

#### 5.2.6 `providers` directory

- Contains React Context Providers used to wrap the application or specific parts of it.
- Keeping providers organized makes context configuration clearer and more maintainable.

#### 5.2.7 `stores` directory

- Contains `Jotai` atoms to manage global or scoped state.
- Each file corresponds to a specific domain, for example: `auth.store.ts`, `cart.store.ts`, `theme.store.ts`, etc.
- May include derived atoms to handle more complex logic built from multiple atoms.
- You can organize atoms inside a dedicated `atoms/` subfolder for better modularity and maintainability.

  Example structure:

  ```
  stores/
  └── atoms/
      ├── auth.atom.ts
      ├── cart.atom.ts
      └── theme.atom.ts
      ...
  ```

#### 5.2.8 `styles` directory

- Contains TailwindCSS custom styles and configurations.
- Suggested structure:
  - `base/`: resets, fonts, base colors
  - `components/`: custom utility classes
  - `utilities/`: mixins, helper styles
    > - See more at the official [TailwindCSS theme setup](https://tailwindcss.com/docs/theme).

#### 5.2.9 `types` directory

- Contains global TypeScript type and interface definitions.
- File naming follows the `[fileName].type.ts` convention.
- Examples:
  ```ts
  user.type.ts;
  product.type.ts;
  api - response.type.ts;
  form - values.type.ts;
  ```

#### 5.2.10 `utils` directory

- Contains utility functions used throughout the application.
- Examples include: `formatDate.util.ts`, `validateEmail.util.ts`, `generateSlug.util.ts`, `calculateTotal.util.ts`, etc.
