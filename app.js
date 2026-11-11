// Ürün listesi products.js dosyasından yüklenir.
const products = window.arkhanProducts || [];


const grid = document.querySelector("#productGrid");
grid.innerHTML = products.map((product, index) => `
  <article class="product-card">
    <span class="product-number">0${index + 1} / ARKHAN OBJECT</span>
    <div class="product-art" ${product.image ? `style="background:center/cover no-repeat url('${product.image}')"` : ""}><span>${product.image ? "" : product.icon}</span></div>    <div class="product-meta"><h3>${product.name}</h3><p>${product.description}</p>${product.price ? `<strong class="product-price">${product.price}</strong>` : ""}</div>    <a class="card-arrow" href="${product.shopUrl || `https://wa.me/905465921288?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında bilgi almak istiyorum.`)}`}" target="_blank" rel="noreferrer" aria-label="${product.name} ürün sayfasını aç">↗</a>
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
