import { useState, useEffect } from 'react';

const InstagramFeed = ({ username, limit = 6 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        
        // Instagram açık beslemesini çekmek için basit bir proxy API kullanıyoruz
        // Not: Bu yöntem Instagram'ın politika değişikliklerine bağlı olarak çalışmayabilir
        const response = await fetch(`https://v1.nocodeapi.com/mertcilaatolyesi/instagram/mtrHjymMsFJASXCI?limit=${limit}`);
        
        if (!response.ok) {
          throw new Error('Instagram verileri alınamadı');
        }
        
        const result = await response.json();
        // Gelen yanıtın 'data' özelliğini kontrol et
        if (result.data && Array.isArray(result.data)) {
          setPosts(result.data);
        } else {
          // Beklenmedik bir format gelirse hata fırlat
          throw new Error('Instagram API yanıtı beklenmedik bir formatta.');
        }
      } catch (err) {
        console.error('Instagram verileri çekilirken hata oluştu:', err);
        setError('Instagram galerisini yüklerken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.');
        
        // Hata durumunda örnek görseller göster
        setPosts([
          {
            id: '1',
            media_url: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1200',
            caption: 'Ahşap Cilalama',
            permalink: `https://instagram.com/${username}`
          },
          {
            id: '2',
            media_url: 'https://images.unsplash.com/photo-1616464598261-2e1e55e07fe0?q=80&w=1200',
            caption: 'Mobilya Yenileme',
            permalink: `https://instagram.com/${username}`
          },
          {
            id: '3',
            media_url: 'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1200',
            caption: 'Lake Uygulaması',
            permalink: `https://instagram.com/${username}`
          },
          {
            id: '4',
            media_url: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1200',
            caption: 'Mobilya Restorasyonu',
            permalink: `https://instagram.com/${username}`
          },
          {
            id: '5',
            media_url: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1200',
            caption: 'Ahşap Yüzey İşleme',
            permalink: `https://instagram.com/${username}`
          },
          {
            id: '6',
            media_url: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1200',
            caption: 'Cila Uygulaması',
            permalink: `https://instagram.com/${username}`
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [username, limit]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {[...Array(limit)].map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow-xl aspect-square bg-gradient-to-tr from-amber-100/50 to-yellow-50/50 animate-pulse">
            <div className="w-full h-full bg-amber-200/30"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error && posts.length === 0) {
    return <div className="text-center text-amber-700">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
      {posts.map((post) => {
        const isVideo = post.media_type === 'VIDEO';
        const imageUrl = isVideo ? post.thumbnail_url : post.media_url;

        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-2xl shadow-xl group relative aspect-square bg-gradient-to-tr from-amber-100 to-yellow-50 border border-amber-100"
          >
            <img
              src={imageUrl}
              alt={post.caption?.slice(0, 50) || "Instagram gönderisi"}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:brightness-95"
              loading="lazy"
            />
            {isVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white/80 drop-shadow-lg">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/10 transition-all"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-medium text-sm md:text-base line-clamp-2">
                {post.caption?.slice(0, 100) || "Mert Cila çalışması"}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default InstagramFeed;