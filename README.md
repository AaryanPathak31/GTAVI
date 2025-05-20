# GTA VI Animated Fan Website

A visually rich, animated React landing page inspired by Grand Theft Auto VI. This project features character introductions, GSAP-powered animations, custom fonts, background music, and a modern navigation experience.

## 🚀 Features

- **Animated Hero Section:** GSAP-powered SVG and parallax effects.
- **Responsive Navigation:** Hamburger menu with animated slide-in/out and smooth scroll to sections.
- **Character Introductions:** Scroll-triggered, animated bios for Jason Duval and Lucia Caminos, with interactive pop-out images on hover.
- **Welcome to Vice City Section:** Game intro, call-to-action buttons, and beautiful layout.
- **Background Music:** Autoplaying, looping GTA VI theme (`gtavi.mp3`) with a volume slider.
- **Custom Font:** Uses `pricedown.otf` for authentic GTA style (see `src/index.css`).
- **Favicon:** Custom favicon (`favicon.png`).
- **Fully Responsive:** Looks great on all devices.

## 🖼️ Demo

![image](https://github.com/user-attachments/assets/b399c246-181c-47a2-8d8f-3561ef9a1678)

![image](https://github.com/user-attachments/assets/8b20331f-6b1d-49c6-906e-06adc470c015)

![image](https://github.com/user-attachments/assets/a51efc57-2d0b-4d54-90bd-de16ef9341fd)





---

## 🛠️ Getting Started

### 1. **Clone the repository**

```sh
git clone https://github.com/AaryanPathak31/GTAVI
cd GTAVI
```

### 2. **Install dependencies**

```sh
npm install
# or
yarn install
```

### 3. **Add your assets**

- Place images (e.g., `Jason.jpg`, `Lucia.jpg`, etc.), `gtavi.mp3`, and `pricedown.otf` in the `public/` folder.
- The custom font is loaded via `src/index.css`:
  ```css
  @font-face {
    font-family: "pricedown";
    src: url("./pricedown.otf");
  }
  html,
  body {
    font-family: "pricedown";
  }
  ```

### 4. **Run the development server**

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the site locally.

---


## ⚙️ Deployment

This project is already deployed on [Vercel](https://gtavi-self.vercel.app/) you could click to check.

- Push your code to GitHub.
- Connect your repo to VercelNetlify and deploy!


## 📝 License

This project is for educational and fan purposes only.  
GTA VI and all related assets are property of [Rockstar Games](https://www.rockstargames.com/VI).

Inspiration From Sheriyans Coding School 
[Sheriyans Coding School](https://www.youtube.com/channel/UCc7gpqMnnOSbU_F2-5MVVZw)

---

**Enjoy your GTA VI fan site!**
