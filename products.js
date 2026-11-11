// Mağazada görünen 31 ürün. İsim, fiyat, açıklama ve görsel buradan düzenlenir.
window.arkhanProducts = [
  { name: "Spin ball", description: "Elde çevirmelik, hareketli masaüstü oyuncağı.", price: "250 TL", icon: "◌", image: "01-spin-ball.jpeg", shopUrl: "https://www.shopier.com/arkhan/50697066" },
  { name: "Beşiktaş Temalı Şehir Tabelası Dekor – 3D Baskı Duvar Panosu", description: "Siyah beyaz şehir tabelası tasarımlı, hafif PLA duvar dekoru.", price: "125 TL", icon: "✦", image: "02-besiktas-sehir-tabelasi.jpeg", shopUrl: "https://www.shopier.com/arkhan/49310759" },
  { name: "Galatasaray Temalı 3D Kapüşonlu Kalemlik ve Masa Düzenleyici", description: "Masa aksesuarlarını düzenleyen sweatshirt biçimli kalemlik.", price: "600 TL", icon: "✧", image: "03-galatasaray-kalemlik.jpeg", shopUrl: "https://www.shopier.com/arkhan/49310734" },
  { name: "Galatasaray Temalı 3D Dekoratif Masa Süsü", description: "Stadyum ve İstanbul silüetli katmanlı masa dekoru.", price: "300 TL", icon: "✦", image: "04-galatasaray-masa-susu.jpeg", shopUrl: "https://www.shopier.com/arkhan/49310676" },
  { name: "Dekoratif Forma Çerçevesi – Taraftar Koleksiyon Serisi", description: "Katmanlı tasarımlı, masa veya raf üzerinde sergilenen forma çerçevesi.", price: "400 TL", icon: "▣", image: "05-forma-cercevesi.jpeg", shopUrl: "https://www.shopier.com/arkhan/49310652" },
  { name: "3D Optik Kalpli Dekoratif Masa Süsü", description: "Farklı açılardan kalp figürü oluşturan optik illüzyon.", price: "250 TL", icon: "♡", image: "06-optik-kalp.jpeg", shopUrl: "https://www.shopier.com/arkhan/49310494" },
  { name: "Moai Figürlü Tütsülük ve Kül Tutucu", description: "Çubuk tütsüler için kül hazneli Moai tasarımı.", price: "145 TL", icon: "♨", image: "07-moai-tutsuluk.jpeg", shopUrl: "https://www.shopier.com/arkhan/49310298" },
  { name: "Ağaç Altında Salıncakta Oturan Çift Dekoru", description: "Ağaç ve salıncak temalı romantik masaüstü dekoru.", price: "90 TL", icon: "♡", image: "08-salincakta-cift.jpeg", shopUrl: "https://www.shopier.com/arkhan/49310149" },
  { name: "Kişiye Özel Plaka Tasarımlı Anahtarlık", description: "Plaka görünümünde kişiye özel anahtarlık tasarımı.", price: "80 TL", icon: "⌘", image: "09-plaka-anahtarlik.jpeg", shopUrl: "https://www.shopier.com/arkhan/49310092" },
  { name: "3D Akustik Telefon Hoparlörü (Şarjsız Ses Yükseltici)", description: "Elektrik gerektirmeden telefon sesini yükselten akustik stand.", price: "400 TL", icon: "◖))", image: "10-akustik-hoparlor.jpeg", shopUrl: "https://www.shopier.com/arkhan/49309893" },
  { name: "Sihirli Yıldız Kart Tutucu Değnek", description: "Temassız kart kullanımına yardımcı yıldızlı tasarım.", price: "150 TL", icon: "✧", image: "11-yildiz-kart-degeni.jpeg", shopUrl: "https://www.shopier.com/arkhan/49309843" },
  { name: "3D Baskı Futbol Forma Çerçevesi – Kırmızı Beyaz Dekor", description: "Kırmızı beyaz renkli futbol temalı koleksiyon dekoru.", price: "400 TL", icon: "▣", image: "12-kirmizi-beyaz-forma.jpeg", shopUrl: "https://www.shopier.com/arkhan/49309754" },
  { name: "Çekirdek ve Kuruyemiş Servis Kasesi – Kabuk Ayırmalı", description: "Atıştırmalık ve kabukları ayıran iki bölümlü servis kasesi.", price: "235 TL", icon: "◉", image: "13-servis-kasesi.jpeg", shopUrl: "https://www.shopier.com/arkhan/49309710" },
  { name: "Retro Dövüş Oyunu Sahnesi – Piksel Masaüstü Dekoru", description: "Piksel sanatından ilham alan retro oyun sahnesi.", price: "700 TL", icon: "▤", image: "14-retro-oyun.jpeg", shopUrl: "https://www.shopier.com/arkhan/49303009" },
  { name: "Futbol Temalı Şehir Silüeti Masaüstü Dekoru", description: "Futbol ve şehir silüetini birleştiren katmanlı masa dekoru.", price: "250 TL", icon: "⌂", image: "15-futbol-sehir-silueti.jpeg", shopUrl: "https://www.shopier.com/arkhan/49286570" },
  { name: "Futbol Forma Çerçevesi – Sarı Lacivert Dekor", description: "Sarı lacivert renklerde, sergilemeye uygun forma çerçevesi.", price: "400 TL", icon: "▣", image: "16-sari-lacivert-forma.jpeg", shopUrl: "https://www.shopier.com/arkhan/49286481" },
  { name: "Ergonomik Burun Açıcı (Nasal Dilatör)", description: "Burun içi kullanım için ergonomik yardımcı ürün.", price: "50 TL", icon: "◇", image: "17-burun-acici.jpeg", shopUrl: "https://www.shopier.com/arkhan/49286053" },
  { name: "Futbol Temalı Masaüstü Kalemlik Organizer", description: "Kalem ve masa aksesuarlarını düzenleyen futbol temalı organizer.", price: "99 TL", icon: "▥", image: "18-futbol-kalemlik.jpeg", shopUrl: "https://www.shopier.com/arkhan/49285740" },
  { name: "İllüzyon İnsan Heykeli – Gerilim İpli Modern Masaüstü Dekor", description: "Gerilim ipiyle dengede duruyormuş gibi görünen modern heykel.", price: "200 TL", icon: "♙", image: "19-illuzyon-heykel.jpeg", shopUrl: "https://www.shopier.com/arkhan/49281618" },
  { name: "Siyah Beyaz Efsane Forma 3D Çerçeve – Koleksiyon Serisi", description: "Siyah beyaz renkli, taraftar koleksiyonuna özel forma çerçevesi.", price: "400 TL", icon: "▣", image: "20-siyah-beyaz-forma.jpeg", shopUrl: "https://www.shopier.com/arkhan/49281408" },
  { name: "İplik Kukla Heykeli – Modern Masaüstü Dekoru", description: "İplerle dengede duran kukla figürlü masaüstü dekoru.", price: "200 TL", icon: "♙", image: "21-iplik-kukla.jpeg", shopUrl: "https://www.shopier.com/arkhan/49254299" },
  { name: "GTA VI Logosu", description: "Oyun kültüründen ilham alan koleksiyonluk 3D logo.", price: "250 TL", icon: "VI", image: "22-gta-vi.jpeg", shopUrl: "https://www.shopier.com/arkhan/49250340" },
  { name: "İlk Merhaba | 3D Duvar Dekoru", description: "Duvarlarda sergilenmek üzere tasarlanmış 3D dekor.", price: "100 TL", icon: "✧", image: "23-ilk-merhaba.jpeg", shopUrl: "https://www.shopier.com/arkhan/49250261" },
  { name: "Kişiye Özel İsim Levhası – Düz Yüzey Tasarım", description: "Kişiye özel isimle hazırlanan sade tasarımlı isim levhası.", price: "100 TL", icon: "A", image: "24-isim-levhasi.jpeg", shopUrl: "https://www.shopier.com/arkhan/49250086" },
  { name: "Uçak Koltuk Masası Tablet ve Telefon Tutucu", description: "Taşınabilir, iki boy seçenekli tablet ve telefon tutucu. Tasarım: howdyhohoho · MakerWorld fotoğrafı.", price: "199 TL", icon: "▱", image: "makerworld-airplane-holder.webp", shopUrl: "https://www.shopier.com/arkhan/52836954" },
  { name: "Şişme Mont Tasarımlı Kalemlik", description: "Mont formundan ilham alan dokulu masaüstü kalemlik. Tasarım: Sitsero · MakerWorld fotoğrafı.", price: "199 TL", icon: "▤", image: "makerworld-puffer-pencil-holder.webp", shopUrl: "https://www.shopier.com/arkhan/52836969" },
  { name: "Kişiye Özel Kartvizit Standı", description: "Masaüstünde kartvizitleri düzenli tutan kişiselleştirilebilir stand. Tasarım: CrazyModding · MakerWorld fotoğrafı.", price: "129 TL", icon: "▰", image: "makerworld-business-card-stand.png", shopUrl: "https://www.shopier.com/arkhan/52837020" },
  { name: "Dev Kurşun Kalem Organizer", description: "Kalem ve masa araçları için çok renkli basılabilen büyük organizer. Tasarım: Purr Prints 3D · MakerWorld fotoğrafı.", price: "199 TL", icon: "✎", image: "makerworld-giant-pencil-organizer.png", shopUrl: "https://www.shopier.com/arkhan/52837045" },
  { name: "Eklemli Ahtapot Masaüstü Oyuncağı", description: "Baskı yerinde hareketli, desteksiz eklemli ahtapot. Tasarım: Timmy_1293 / MTD3d · MakerWorld fotoğrafı.", price: "149 TL", icon: "🐙", image: "makerworld-articulated-octopus.png", shopUrl: "https://www.shopier.com/arkhan/52837061" },
  { name: "Spiral Twist Hareketli Fidget", description: "Elde çevrilince spiral formdan helise dönüşen tek parça fidget. Tasarım: Nerdherderz · MakerWorld fotoğrafı.", price: "149 TL", icon: "◉", image: "makerworld-spiral-twist-fidget.png", shopUrl: "https://www.shopier.com/arkhan/52837066" },
  { name: "Kişiye Özel İsim Etiketi", description: "Sipariş notundaki isimle hazırlanan özel baskı etiket. Tasarım: Ryno_man · MakerWorld fotoğrafı.", price: "99 TL", icon: "A", image: "makerworld-custom-name-tag.webp", shopUrl: "https://www.shopier.com/arkhan/52837077" }
];








