import { useState } from "react";
import "./index.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-light)] to-white font-sans">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.ico"
              alt="Kitobcha Logo"
              className="w-10 h-10 rounded"
            />
            <h1 className="text-2xl font-bold text-[var(--color-primary)]">
              Kitobcha
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-[var(--color-primary)]">
              Bosh sahifa
            </a>
            <a href="#features" className="hover:text-[var(--color-primary)]">
              Xususiyatlar
            </a>
            <a href="#about" className="hover:text-[var(--color-primary)]">
              Muallif
            </a>
            <a href="#contact" className="hover:text-[var(--color-primary)]">
              Aloqa
            </a>
            <a
              href="/kitobcha.exe"
              download
              className="bg-[var(--color-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-secondary)] transition"
            >
              Yuklab olish
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-4">
            <a
              href="#home"
              className="block text-gray-800 font-medium rounded px-3 py-2 hover:bg-[var(--color-primary)] hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Bosh sahifa
            </a>
            <a
              href="#features"
              className="block text-gray-800 font-medium rounded px-3 py-2 hover:bg-[var(--color-primary)] hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Xususiyatlar
            </a>
            <a
              href="#about"
              className="block text-gray-800 font-medium rounded px-3 py-2 hover:bg-[var(--color-primary)] hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Muallif
            </a>
            <a
              href="#contact"
              className="block text-gray-800 font-medium rounded px-3 py-2 hover:bg-[var(--color-primary)] hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Aloqa
            </a>
            <a
              href="/kitobcha.exe"
              download
              className="block bg-[var(--color-primary)] text-white font-semibold text-center rounded px-4 py-2 hover:bg-[var(--color-secondary)] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Yuklab olish
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden text-center py-24 px-4 bg-gradient-to-br from-[var(--color-light)] to-white"
      >
        {/* Background illustration (optional) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none">
          <img
            src="/hero-bg.svg" // agar rasm bo‘lsa qo‘shing
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            Kitobcha — Sizning shaxsiy raqamli daftarlaringiz
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 px-4">
            Kitobcha — Bizning dasturimiz ma’lumotlaringizni kitob shaklida
            tartibga solishga yordam beradi, shunda ularni boshqarish va
            qidirish yanada oson bo‘ladi.
            <br className="hidden sm:block" />
            Barcha ma’lumotlaringiz bitta joyda — xotirjamlik bilan ishlang!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 px-4">
            <a
              href="/kitobcha.exe"
              download
              className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[var(--color-secondary)] transition-all"
            >
              📦 Kitobcha.exe — Yuklab olish
            </a>
            <a
              href="https://builds.dotnet.microsoft.com/dotnet/Sdk/8.0.414/dotnet-sdk-8.0.414-win-x64.exe"
              rel="noopener noreferrer"
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              🧩 .NET Runtime
            </a>
          </div>

          {/* Quick Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
            <span className="bg-white border border-[var(--color-primary)] px-4 py-2 rounded-full">
              🔒 Offline ishlaydi
            </span>
            <span className="bg-white border border-[var(--color-primary)] px-4 py-2 rounded-full">
              ⚡ Tez va engil
            </span>
            <span className="bg-white border border-[var(--color-primary)] px-4 py-2 rounded-full">
              🖥️ Faqat Windows uchun
            </span>
            <span className="bg-white border border-[var(--color-primary)] px-4 py-2 rounded-full">
              🧠 Smart qidiruv
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[var(--color-light)] py-16 px-4">
        <div className="max-w-6xl mx-auto h-[400px]">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10 mt-20">
            Dastur Xususiyatlari
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                Oddiy interfeys
              </h4>
              <p className="text-gray-600">
                Foydalanuvchilarga qulay va tushunarli UI.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                Tezkor ish faoliyati
              </h4>
              <p className="text-gray-600">
                Ma'lumotlarni tez topish va guruhlash imkoniyati.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                Windows uchun mos
              </h4>
              <p className="text-gray-600">
                Windows OS’ga to‘liq moslashgan ilova.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Author */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/public/Profile.jpg"
            alt="Gojo Developer"
            className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full border-4 border-[var(--color-accent)] mb-8 object-cover"
          />
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Gojo Developer
          </h3>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Dasturchi va Kitobcha muallifi
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Gojo — tajribali Windows va veb dasturchi. Kitobcha — axborotni
            tartibga solish uchun ishlab chiqilgan amaliy dasturdir.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gradient-to-br from-[var(--color-light)] via-white to-[var(--color-light)] py-24 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            📬 Aloqa
          </h3>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in">
            Taklif, savol yoki fikringiz bormi? Muallif bilan bevosita
            bog‘laning!
          </p>

          <div className="inline-block bg-white shadow-lg rounded-xl px-8 py-6 animate-fade-in hover:scale-105 transition-transform duration-300">
            <p className="text-gray-700 mb-4 text-lg font-medium">
              Telegram orqali yozing:
            </p>
            <a
              href="https://t.me/Gojo_Developer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold text-lg px-6 py-3 rounded-full hover:bg-[var(--color-secondary)] transition"
            >
              <img src="/public/telegram.png" alt="xatolik"  className="w-6 h-6" />
              @Gojo_Developer
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500 animate-fade-in">
            Javob iloji boricha tezroq beriladi 💬
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-dark)] text-white py-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kitobcha. Barcha huquqlar
          himoyalangan.
        </p>
        <p className="mt-1 text-sm">
          Muallif:{" "}
          <a
            href="https://t.me/Gojo_Developer"
            className="underline hover:text-[var(--color-accent)]"
          >
            Gojo Developer
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
