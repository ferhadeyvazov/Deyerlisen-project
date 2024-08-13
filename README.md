# Technologies

  Main technology : React

  Superset : TypeScript

  Compiler : Vite JS (native build)

  State management : Redux Toolkit-Redux Persist

  UI Library : Ant Design - (React Bootstrap - less)

  Form Validation : Zod (integrated TS)

  Data Fetching : RTK Query (with AxiosBase)

  Form actions : React Hook Form

  CSS : Using SASS and module CSS(SASS) ( not node-sass !)

  Helper Kit : ESlint (can disable)

  Unique keys generator : Uuid

  Loading : React Spinners

  ## Folder structure
  <p>Sass folder structure: https://sass-guidelin.es/#the-7-1-pattern</p>

  <p>General folder structure: Based on <a href="https://github.com/ahsan-chy/React-JS-Advance-Folder-Structure" target="_blank">React JS Advance-Level Folder Structure</a></p>


  ## Usage

  This project uses Classic Yarn Package Management.

  ### Enter Project Folder

  ```bash
  cd deyerlisen
  ```

  ### Install Dependencies

  ```bash
  yarn install
  ```

  ### Routes
  We use new React Router v6.4. Routes divides 2 parts: 
  PublicRoutes, PrivateRoutes

  ### React Hook Form
  React Hook Form Form elementlerin esasini teşkil edir.
  
  ```bash
  yarn add react-hook-form
  ```

  ### Zod
  React Hook Form-da validatorları Zod ilə tuturuq. Zod kullanmak, özellikle karmaşık doğrulama senaryolarında ve TypeScript projelerinde çeşitli avantajlar sunar. React Hook Form'un kendi doğrulama yöntemleri de güçlüdür, ancak Zod gibi bir kütüphane kullanmanın bazı belirgin avantajları vardır:

  ```bash
  yarn add zod
  ```

  ### hookform/Resolvers
  React Hook Form ile Zod arasinda elaqeni yaratmaq ucun Resolvers istifade olunur.
  
  ```bash
  yarn add zod
  ```

  ### Xülasə
  Form elementleri Ant Design-dan, onun yoxlanılması, deyerlerin alınması React Hook Form ilə, Form-un doğrulanması(validation) Zod ilə edilib.
