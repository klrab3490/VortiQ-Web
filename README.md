# VortiQ -Web 🌐

A modern frontend web application built with TypeScript, React, Tailwind CSS and Vite.

---

## 🚀 Table of Contents

* [About](#about)
* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Setup & Development](#setup--development)
* [Testing](#testing)
* [Build & Deployment](#build--deployment)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)

---

## 💡 About

VortiQ -Web is the web frontend for the VortiQ platform—focused on delivering an intuitive and responsive user experience.

---

## 🎮 Demo

*(Include a deployed live URL or embed screenshots/gif)*

---

## ✅ Features

* User-friendly UI built with React and Tailwind CSS
* Responsive layouts for mobile and desktop
* Component-driven design for reusability
* Optimized build with Vite

---

## 🧰 Tech Stack

| Category             | Technologies            |
| -------------------- | ----------------------- |
| **Frontend**         | React, TypeScript, Vite |
| **Styling**          | Tailwind CSS            |
| **Linting & Format** | ESLint, Prettier        |
| **Version Control**  | Git & GitHub            |

---

## 🗂 Project Structure

```
vortiq-web/
├── actions/            # Server Side Functions
├── app/
│   ├── (auth)/         
│   │   ├── login         
│   │   └── layout.tsx             
│   ├── contact         
│   ├── dashboard/
|   │   ├── admin/
|   |   │   ├── users/
|   |   |   │   ├── add/
|   |   |   │   │   └── page.tsx             
|   |   |   │   ├── edit/
|   |   |   │   │   └── page.tsx             
|   |   │   │   └── page.tsx             
|   │   ├── devices/
|   |   │   ├── [id]/
|   |   │   │   └── page.tsx             
|   │   │   └── page.tsx             
|   │   ├── settings/
|   │   │   └── page.tsx             
|   │   ├── user/
|   |   │   ├── analytics/
|   |   |   │   ├── [id]
|   |   │   │   └── page.tsx             
|   │   │   └── page.tsx             
|   │   ├── layout.tsx
│   │   └── page.tsx             
│   ├── FAQ         
│   │   └── page.tsx             
│   ├── team         
|   │   ├── images
│   │   └── page.tsx             
│   ├── layout.tsx         
│   └── page.tsx             
├── components/         # Reusable components
│   ├── custom/         # Custom Elements
│   ├── theme/          # Next Theme
│   └── ui/             # Shad CN Components
├── firebase/           # Firebase
├── lib/                
├── public/             # Static assets
├── schemas/            # Schemas
├── postcss.config.mjs
└── tsconfig.json      
```

---

## ⚙️ Setup & Development

1. **Clone the repo**

   ```bash
   git clone https://github.com/klrab3490/VortiQ-Web.git
   cd VortiQ-Web
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the dev server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Visit `http://localhost:5173` in your browser.

---

## 📦 Build & Deployment

* **Build for production**

  ```bash
  npm run build
  # or
  yarn build
  ```

* **Preview production build**

  ```bash
  npm run preview
  # or
  yarn preview
  ```

Deployment platforms: Vercel, Netlify, or GitHub Pages.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a branch (`git checkout -b feat/YourFeature`)
3. Commit your changes (`git commit -m "feat: add new feature"`)
4. Push (`git push origin feat/YourFeature`)
5. Open a pull request

Please follow the existing code style and include any relevant tests.

---

## 🤖 Authors

* **Edwin C Shony** ([klrab3490](https://github.com/edwincshony))
* **Gopikrishna K M** ([klrab3490](https://github.com/gk732))
* **Rahul A B** ([klrab3490](https://github.com/klrab3490))
* **Sreerag Sreekanth** ([klrab3490](https://github.com/SreeragSreekanth))

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## 📬 Contact

Have questions or suggestions? Reach out!

* GitHub: [@klrab3490](https://github.com/klrab3490)
* Portfolio: [rahulab.vercel.app](https://rahulab.vercel.app)
