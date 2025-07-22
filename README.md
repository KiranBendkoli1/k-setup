# k-setup

A lightweight CLI tool to quickly scaffold React.js or React Native projects with custom configurations and templates.

[![NPM Version](https://img.shields.io/npm/v/k-setup.svg)](https://www.npmjs.com/package/k-setup)
[![Downloads](https://img.shields.io/npm/dt/k-setup.svg)](https://www.npmjs.com/package/k-setup)
[![License](https://img.shields.io/npm/l/k-setup.svg)](LICENSE)

---

## ✨ Features

- ⚡ Interactive CLI for quick setup
- 🧱 Scaffolds React or React Native projects
- 🎨 includes TailwindCSS
- 🛠 Built for speed and simplicity

---

## 📦 Installation

Install globally:

```bash
npm install -g k-setup
```

Or use with `npx`:

```bash
npx k-setup
```

---

## 🚀 Usage

After installation, just run:

```bash
k-setup
```

You'll see an interactive prompt like this:

```
Welcome to K-Setup : The Project Template Creator!

? Which template would you like to use?
❯ React Native
  React.js
```

### Example

```bash
npx k-setup
```

---

## 📁 Example Output

```
my-app/
├── src/
│   ├── App.jsx
│   └── index.js
├── public/
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── ...
```

---

## 🔧 Customization

You can fork the repo and update the internal templates as per your team or personal preference.

---

## 🤝 Contributing

Contributions are welcome! Here’s how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

---

## 🧪 Development

```bash
git clone https://github.com/your-username/k-setup.git
cd k-setup
npm install
npm link
```

Now you can test locally by running:

```bash
k-setup
```

---

## 📃 License

MIT © [Kiran Bendkoli](https://github.com/KiranBendkoli1)