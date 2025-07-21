import { useEffect, useState } from "react";
import "./index.css";

const INSTAGRAM_USERNAME = "mertcilaornek"; // Gerçek kullanıcı adı ile değiştirilmeli

function App() {
  const [images, setImages] = useState([]);

  // Instagram görsellerini fetch et (placeholder, gerçek API ile değiştirilmeli)
  useEffect(() => {
    // Demo için örnek görseller
    setImages([
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-stone-100 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-200/80 to-yellow-100/80 shadow-xl px-4 py-6 text-center sticky top-0 z-20 border-b border-amber-100">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-amber-700 drop-shadow tracking-tight mb-2">Mert Cila</h1>
        <p className="text-stone-700 text-lg md:text-xl font-sans tracking-wide">Lake ve Cila Atölyesi</p>
      </header>

      {/* Hakkında */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-28 bg-gradient-to-b from-amber-50/80 to-yellow-100/60" id="about">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-amber-700 drop-shadow">Hakkımızda</h2>
        <p className="max-w-2xl text-stone-700 text-center text-lg md:text-2xl leading-relaxed bg-white/60 rounded-xl p-6 shadow-md">
          Mert Cila, mobilya ve ahşap yüzeyler için profesyonel lake ve cila uygulamaları sunar.<br className="hidden md:block" /> 20+ yıllık tecrübe, modern ekipman ve müşteri memnuniyeti odaklı hizmet ile yaşam alanlarınızı yeniliyoruz.
        </p>
      </section>

      {/* Instagram Galeri */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-yellow-100 py-16 px-4" id="gallery">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-amber-700 text-center drop-shadow">Instagram'dan Son Çalışmalar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-3xl shadow-xl group relative aspect-[4/3] bg-gradient-to-tr from-amber-100 to-yellow-50 border border-amber-100">
              <img
                src={img}
                alt="Instagram çalışması"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/10 transition-all"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-amber-700 font-bold hover:underline text-lg md:text-xl tracking-wide"
          >
            Daha fazlası için Instagram'a göz atın
          </a>
        </div>
      </section>

      {/* İletişim */}
      <section className="py-14 px-4 bg-gradient-to-t from-amber-50 to-yellow-100/60" id="contact">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-amber-700 text-center drop-shadow">İletişim</h2>
        <div className="max-w-lg mx-auto flex flex-col gap-4 text-center bg-white/70 rounded-2xl shadow-lg p-8 border border-amber-100">
          <p className="text-stone-800 text-lg">Telefon: <a href="tel:+905551112233" className="text-amber-700 font-bold hover:underline">+90 555 111 22 33</a></p>
          <p className="text-stone-800 text-lg">WhatsApp: <a href="https://wa.me/905551112233" className="text-green-700 font-bold hover:underline" target="_blank" rel="noopener noreferrer">+90 555 111 22 33</a></p>
          <p className="text-stone-800 text-lg">Adres: İstanbul, Türkiye</p>
        </div>
      </section>

      {/* WhatsApp ve Telefon Affix Butonları */}
      {/* WhatsApp ve Telefon Affix Butonları */}
      <a
        href="https://wa.me/905551112233"
        className="fixed right-5 bottom-5 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl p-5 flex items-center justify-center z-50 transition-all duration-300 border-4 border-white/80 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12c0 4.556-3.694 8.25-8.25 8.25A8.207 8.207 0 0 1 4.5 18.2l-1.2 3.3a.75.75 0 0 1-.95.45.75.75 0 0 1-.45-.95l1.2-3.3A8.25 8.25 0 1 1 20.25 12Z" />
        </svg>
      </a>
      <a
        href="tel:+905551112233"
        className="fixed left-5 bottom-5 bg-amber-700 hover:bg-amber-800 text-white rounded-full shadow-2xl p-5 flex items-center justify-center z-50 transition-all duration-300 border-4 border-white/80 hover:scale-110"
        aria-label="Telefon ile ara"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.25c.621 0 1.13.507 1.13 1.13v2.24c0 .622-.509 1.13-1.13 1.13H4.5a.75.75 0 0 1-.75-.75V6.75Zm0 10.5c0 1.243 1.007 2.25 2.25 2.25h2.25c.621 0 1.13-.507 1.13-1.13v-2.24c0-.622-.509-1.13-1.13-1.13H4.5a.75.75 0 0 0-.75.75v2.25Zm15-10.5c0-1.243-1.007-2.25-2.25-2.25h-2.25c-.621 0-1.13.507-1.13 1.13v2.24c0 .622.509 1.13 1.13 1.13h2.25a.75.75 0 0 0 .75-.75V6.75Zm0 10.5c0 1.243-1.007 2.25-2.25 2.25h-2.25c-.621 0-1.13-.507-1.13-1.13v-2.24c0-.622.509-1.13 1.13-1.13h2.25a.75.75 0 0 1 .75.75v2.25Z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
