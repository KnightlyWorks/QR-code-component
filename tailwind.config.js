/** @type {import('tailwindcss').Config} */
export default {
  // Настраиваем Tailwind для сканирования всех .html и .js файлов в корне и src
  content: ["./*.html", "./src/**/*.{html,js}"], // <-- Это должно быть абсолютно правильно!
  plugins: [],
}
