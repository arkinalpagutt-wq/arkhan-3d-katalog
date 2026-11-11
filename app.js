// Ürünleri burada düzenleyin. Fotoğraf için image alanına yerel dosya yolu yazın (örn. images/isimlik.jpg).
const products = [
  { name: "Kişiye Özel İsimlikler", description: "İsminizi ve tarzınızı taşıyan, size özel masaüstü tasarımları.", icon: "✧", image: "" },
  { name: "Thug Life Gözlük", description: "Eğlenceli anlara ikonik bir dokunuş. Hafif, dikkat çekici.", icon: "◉", image: "" },
  { name: "Spin Ball", description: "Hareketi sevenlere elde çevirmelik, tatmin edici bir form.", icon: "◌", image: "" },
  { name: "GTA VI Logo", description: "Oyun kültüründen ilham alan koleksiyonluk dekor ürünü.", icon: "VI", image: "" },
  { name: "Beşiktaş Temalı Ürünler", description: "Siyah beyaz sevdaya özel, taraftar ruhunu yansıtan parçalar.", icon: "✦", image: "" },
  { name: "Özel Tasarım 3D Baskılar", description: "Aklınızdaki fikirden ölçüsüne göre üretilen özgün parçalar.", icon: "⬡", image: "" },
  { name: "Anahtarlıklar", description: "Günlük kullanım için kişiselleştirilebilir küçük tasarımlar.", icon: "⌘", image: "" }
];

const grid = document.querySelector("#productGrid");
grid.innerHTML = products.map((product, index) => `
  <article class="product-card">
    <span class="product-number">0${index + 1} / ARKHAN OBJECT</span>
    <div class="product-art" ${product.image ? `style="background:center/cover no-repeat url('${product.image}')"` : ""}><span>${product.image ? "" : product.icon}</span></div>
    <div class="product-meta"><h3>${product.name}</h3><p>${product.description}</p></div>
    <a class="card-arrow" href="https://wa.me/905465921288?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında bilgi almak istiyorum.`)}" target="_blank" rel="noreferrer" aria-label="${product.name} hakkında WhatsApp'tan bilgi al">↗</a>
  </article>`).join("");

const qrTarget = document.querySelector("#qrUrl");
const qrHost = document.querySelector("#qrcode");
let qr;
function renderQr() {
  const target = qrTarget.value.trim();
  try { new URL(target); } catch { qrTarget.setCustomValidity("Lütfen https:// ile başlayan geçerli bir adres girin."); qrTarget.reportValidity(); return; }
  qrTarget.setCustomValidity("");
  qrHost.replaceChildren();
  qr = new QRCode(qrHost, { text: target, width: 210, height: 210, colorDark: "#111214", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.H });
  let host = ""; try { host = new URL(target).hostname.replace(/^www\./, "").toUpperCase(); } catch {}
  document.querySelector("#qrCaption").textContent = host;
}
document.querySelector("#makeQr").addEventListener("click", renderQr);
qrTarget.addEventListener("keydown", e => { if (e.key === "Enter") renderQr(); });
document.querySelector("#downloadQr").addEventListener("click", () => {
  const canvas = qrHost.querySelector("canvas");
  if (!canvas) return;
  // QR kodunu beyaz zemine ve turuncu dış çerçeveye kompoze ederek PNG indirir.
  const size = 720, pad = 42, border = 20, output = document.createElement("canvas"); output.width = output.height = size;
  const ctx = output.getContext("2d"); ctx.fillStyle = "#ff6b24"; ctx.fillRect(0, 0, size, size); ctx.fillStyle = "#ffffff"; ctx.fillRect(border, border, size - border * 2, size - border * 2);
  const inner = size - (border + pad) * 2; ctx.imageSmoothingEnabled = false; ctx.drawImage(canvas, border + pad, border + pad, inner, inner);
  const link = document.createElement("a"); link.download = "arkhan-3d-qr.png"; link.href = output.toDataURL("image/png"); link.click();
});
renderQr();
