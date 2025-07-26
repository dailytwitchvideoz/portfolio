import "./index.css";
import logo from "./assets/logo.jpg";
import InstagramFeed from "./components/InstagramFeed";

const INSTAGRAM_USERNAME = "mertcilaatolyesi"; // Gerçek kullanıcı adı ile değiştirilmeli
const PHONE_NUMBER = "+905367953449"; // Gerçek telefon numarası ile değiştirilmeli

function App() {
  // Instagram entegrasyonu artık InstagramFeed bileşeni içinde yapılıyor

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-stone-100 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-200/80 to-yellow-100/80 shadow-xl px-4 py-4 sticky top-0 z-20 border-b border-amber-100">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto">
          <div className="flex items-center mb-3 md:mb-0">
            <img src={logo} alt="Mert Cila Logo" className="h-16 w-16 rounded-full object-cover border-2 border-amber-400 mr-3" />
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-black drop-shadow tracking-tight">Mert Cila</h1>
              <p className="text-black text-sm md:text-lg font-sans tracking-wide">Lake ve Cila Atölyesi</p>
            </div>
          </div>
          <nav className="flex space-x-6">
            <a href="#about" className="text-amber-800 hover:text-amber-600 font-medium">Hakkımızda</a>
            <a href="#gallery" className="text-amber-800 hover:text-amber-600 font-medium">Galeri</a>
            <a href="#contact" className="text-amber-800 hover:text-amber-600 font-medium">İletişim</a>
          </nav>
        </div>
      </header>

      {/* Hakkında */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-28 bg-gradient-to-b from-amber-50/80 to-yellow-100/60" id="about">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-amber-700 drop-shadow">Hakkımızda</h2>
        <div className="max-w-3xl text-stone-700 text-center bg-white/60 rounded-xl p-6 shadow-md">
          <p className="text-lg md:text-2xl leading-relaxed mb-4">
            Mert Cila, mobilya ve ahşap yüzeyler için profesyonel lake ve cila uygulamaları sunar. 20+ yıllık tecrübe, modern ekipman ve müşteri memnuniyeti odaklı hizmet ile yaşam alanlarınızı yeniliyoruz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-amber-50/80 p-4 rounded-lg shadow-sm">
              <h3 className="text-amber-800 font-bold text-xl mb-2">Uzmanlık</h3>
              <p className="text-stone-600">Ahşap mobilyalarınızın doğal güzelliklerini ortaya çıkaran profesyonel lake ve cila uygulamaları.</p>
            </div>
            <div className="bg-amber-50/80 p-4 rounded-lg shadow-sm">
              <h3 className="text-amber-800 font-bold text-xl mb-2">Kalite</h3>
              <p className="text-stone-600">Yüksek kaliteli malzemeler ve uzman işçilik ile uzun ömürlü sonuçlar elde ediyoruz.</p>
            </div>
            <div className="bg-amber-50/80 p-4 rounded-lg shadow-sm">
              <h3 className="text-amber-800 font-bold text-xl mb-2">Güven</h3>
              <p className="text-stone-600">Zamanında teslim ve bütçenize uygun çözümler ile müşteri memnuniyetini ön planda tutuyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Çalışmalarımız Galeri */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-yellow-100 py-16 px-4" id="gallery">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-amber-700 text-center drop-shadow">Son Çalışmalarımız</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/70 rounded-full shadow-md p-1.5">
            <button className="px-4 py-2 rounded-full bg-amber-600 text-white font-medium">Tüm Çalışmalar</button>
            {/* <button className="px-4 py-2 rounded-full text-amber-800 font-medium hover:bg-amber-100/50 transition-colors">Lake</button>
            <button className="px-4 py-2 rounded-full text-amber-800 font-medium hover:bg-amber-100/50 transition-colors">Cila</button>
            <button className="px-4 py-2 rounded-full text-amber-800 font-medium hover:bg-amber-100/50 transition-colors">Restorasyon</button> */}
          </div>
        </div>
        
        <InstagramFeed username={INSTAGRAM_USERNAME} limit={6} />
        
        <div className="text-center mt-10">
          <a
            href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-full font-bold hover:from-amber-700 hover:to-amber-800 transition-all shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram'da daha fazla çalışmamızı görün
          </a>
        </div>
      </section>

      {/* İletişim */}
      <section className="py-14 px-4 bg-gradient-to-t from-amber-50 to-yellow-100/60" id="contact">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-amber-700 text-center drop-shadow">İletişim</h2>
        <div className="max-w-lg mx-auto flex flex-col gap-4 text-center bg-white/70 rounded-2xl shadow-lg p-8 border border-amber-100">
          <p className="text-stone-800 text-lg">Telefon: <a href={`tel:${PHONE_NUMBER}`} className="text-amber-700 font-bold hover:underline">{PHONE_NUMBER}</a></p>
          <p className="text-stone-800 text-lg">WhatsApp: <a href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}`} className="text-green-700 font-bold hover:underline" target="_blank" rel="noopener noreferrer">{PHONE_NUMBER}</a></p>
          <p className="text-stone-800 text-lg">Adres: Marmara Sanayi Sitesi E.Blok No:5/6 İkitelli/İstanbul TR, 34307</p>
          <div className="mt-4">
            <p className="text-stone-800 text-lg font-medium mb-2">Çalışma Saatleri:</p>
            <p className="text-stone-700">Pazartesi - Cuma: 08:30 - 19:00</p>
            <p className="text-stone-700">Cumartesi - Pazar: 08:30 - 15:00</p>
          </div>
        </div>
      </section>

      {/* WhatsApp ve Telefon Affix Butonları */}
      {/* WhatsApp ve Telefon Affix Butonları */}
      {/* Konum Butonu */}
      <div className="fixed right-6 bottom-28 z-50">
        <div className="absolute inset-0 rounded-full bg-blue-400/50 opacity-75 blur-md animate-glow"></div>
        <a
          href="https://share.google/8xzyx2pAzsaBi5hI5"
          className="relative bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-xl p-4 flex items-center justify-center transition-all duration-300 border-4 border-white/80 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konumumuza git"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      
      {/* WhatsApp Butonu */}
      <div className="fixed right-6 bottom-6 z-50">
        <div className="absolute inset-0 rounded-full bg-green-400/50 opacity-75 blur-md animate-glow"></div>
        <div className="absolute inset-0 rounded-full bg-white/30 opacity-60 blur-sm animate-glow" style={{animationDelay: '0.5s'}}></div>
        <a
          href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}`}
          className="relative bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl p-4 flex items-center justify-center transition-all duration-300 border-4 border-white/80 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geç"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-7 h-7">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
          </div>
        </a>
      </div>
      <div className="fixed left-6 bottom-6 z-50">
        <div className="absolute inset-0 rounded-full bg-amber-400 opacity-75 animate-ping" style={{animationDuration: '2s'}}></div>
        <div className="absolute inset-0 rounded-full bg-amber-300 opacity-50 animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="relative bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-xl p-4 flex items-center justify-center transition-all duration-300 border-4 border-white/80 hover:scale-110 animate-ring"
          aria-label="Telefon ile ara"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
          </div>
        </a>
      </div>
      
      {/* Footer */}
      <footer className="bg-amber-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img src={logo} alt="Mert Cila Logo" className="h-12 w-12 rounded-full object-cover border-2 border-amber-400 mr-3" />
              <div>
                <h3 className="text-xl font-bold">Mert Cila</h3>
                <p className="text-amber-200 text-sm">Lake ve Cila Atölyesi</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <p className="text-amber-200 text-sm">&copy; {new Date().getFullYear()} Mert Cila - Tüm Hakları Saklıdır</p>
              <div className="flex gap-4 mt-3">
                <a href={`https://instagram.com/${INSTAGRAM_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href={`tel:${PHONE_NUMBER}`} className="text-white hover:text-amber-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.25c.621 0 1.13.507 1.13 1.13v2.24c0 .622-.509 1.13-1.13 1.13H4.5a.75.75 0 0 1-.75-.75V6.75Zm0 10.5c0 1.243 1.007 2.25 2.25 2.25h2.25c.621 0 1.13-.507 1.13-1.13v-2.24c0-.622-.509-1.13-1.13-1.13H4.5a.75.75 0 0 0-.75.75v2.25Zm15-10.5c0-1.243-1.007-2.25-2.25-2.25h-2.25c-.621 0-1.13.507-1.13 1.13v2.24c0 .622.509 1.13 1.13 1.13h2.25a.75.75 0 0 0 .75-.75V6.75Zm0 10.5c0 1.243-1.007 2.25-2.25 2.25h-2.25c-.621 0-1.13-.507-1.13-1.13v-2.24c0-.622.509-1.13 1.13-1.13h2.25a.75.75 0 0 1 .75.75v2.25Z" />
                  </svg>
                </a>
                <a href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12c0 4.556-3.694 8.25-8.25 8.25A8.207 8.207 0 0 1 4.5 18.2l-1.2 3.3a.75.75 0 0 1-.95.45.75.75 0 0 1-.45-.95l1.2-3.3A8.25 8.25 0 1 1 20.25 12Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
