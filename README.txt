ARKHAN 3D — ÜCRETSİZ DİJİTAL KATALOG
====================================

DOSYALAR
index.html       Katalog sayfası
style.css        Görünüm ve responsive tasarım
app.js           Ürün bilgileri ve QR kod davranışı
qrcode.min.js    Çevrimdışı çalışan QR üretici (MIT lisanslı)

1) PROJEYİ AÇMA
Bu klasördeki index.html dosyasına çift tıklayın. İnternet gerektirmez; harici font, API veya servis çağrısı yoktur. Shopier ve WhatsApp bağlantıları internet ister.

2) ÜRÜNLERİ DÜZENLEME
app.js dosyasını Not Defteri veya başka bir metin düzenleyiciyle açın. En üstteki products dizisinde her ürünün name (ad), description (açıklama), icon (simge) ve image (fotoğraf yolu) alanı bulunur.
• Yeni ürün: { name: "Yeni Ürün", description: "Açıklama", icon: "✧", image: "" } satırını ekleyin.
• Ürün silme: Ürünün bulunduğu satırı kaldırın.
• Metin değiştirme: name ve description değerlerini düzenleyin.
• Fotoğraf ekleme: outputs içinde images adlı klasör oluşturun, görseli içine koyun, image alanına ör. "images/urun.jpg" yazın.
Değişiklikten sonra sayfayı yenileyin. Metinlerde çift tırnak kullanacaksanız önüne ters eğik çizgi koyun veya tek tırnak kullanın.

3) QR PNG İNDİRME
Sayfanın altındaki Dijital Kartvizit alanında yönlendirme adresini girin, ↻ düğmesine basıp QR'ın yenilendiğini görün ve “PNG olarak indir” düğmesine basın. Varsayılan adres Shopier mağazasıdır. QR kod siyah modüllü ve turuncu çerçevelidir.

4) BAŞKA TELEFONLARDA KULLANMA
Yerel dosya adresleri yalnızca bu bilgisayarda açılır. QR kodun başka telefonlarda çalışması için ücretsiz web barındırma gerekir; yayımlandıktan sonra çıkan https://... adresini QR alanına girip yeni PNG indirin. Ücretsiz adres kullanılır, özel domain gerekmez.

ÜCRETSİZ YAYINLAMA: GITHUB PAGES
1. GitHub hesabınızla yeni, public bir repository oluşturun (ör. arkhan-3d-katalog).
2. Bu klasördeki dosyaları ve varsa images klasörünü repository ana dizinine yükleyin.
3. Repository > Settings > Pages bölümüne gidin. Build and deployment altında “Deploy from a branch”, branch olarak “main” ve klasör olarak “/(root)” seçip kaydedin.
4. GitHub'ın verdiği https://KULLANICI.github.io/arkhan-3d-katalog/ adresini telefonunuzda deneyin. Bu adresi QR alanına yazıp PNG'yi indirin.
5. Web adresi değişirse yeni QR üretmeniz gerekir. Katalog içeriği de herkese açık yayımlanır; kişisel/gizli bilgi koymayın.

GitHub Pages, GitHub Free kapsamındaki public repository'lerde ücretsiz statik site barındırır. Alternatif olarak Cloudflare Pages ücretsiz statik yayın seçeneği sunar; ikisi de hesap oluşturmayı gerektirir, ücretli domain veya ücretli API gerekmez.

BAĞLANTILAR
Telefon: tel:+905465921288
WhatsApp: https://wa.me/905465921288
Shopier: https://www.shopier.com/arkhan

QR KÜTÜPHANESİ
qrcode.min.js, davidshimjs/qrcodejs, MIT lisanslı açık kaynak proje. QR üretimi cihazda tarayıcı içinde yapılır.
