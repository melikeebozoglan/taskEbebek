// Developers's name: Melike Sultan Bozoğlan
// Date: 01.07.2025
// Project: a module of ebebek website

(() => {
  document.body?.setAttribute("data-page", "homepage");
  // const isHomepage = document.body?.getAttribute("data-page") === "homepage";
  // if (!isHomepage) {
  //   console.log("wrong page");
  //   return;
  // }

  //localStorage.clear(); // localStorage çalıştığını test etmek için

  const init = () => {
    buildHTMLHead();
    buildHTMLBody();
    buildCSS();
    fetchData();
    setEvents();
  };

  // head etiketini oluşturn bir fonksiyondur
  const buildHTMLHead = () => {
    const metas = [
      { name: "author", content: "Melike Sultan Bozoglan" },
      { name: "description", content: "Ebebek." },
      {
        name: "keywords",
        content:
          "Ağız Mendili, Çıtçıtlı Zıbın, Hastane Çıkışı, Beek Battaniyesi",
      },
    ];

    metas.forEach((metaData) => {
      const meta = document.createElement("meta");
      meta.name = metaData.name;
      meta.content = metaData.content;
      document.head.appendChild(meta);
    });

    const charset = document.createElement("meta");
    charset.setAttribute("charset", "UTF-8");
    document.head.appendChild(charset);

    const viewport = document.createElement("meta");
    viewport.name = "viewport";
    viewport.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(viewport);

    const title = document.createElement("title");
    title.textContent = "Ebebek";
    document.head.appendChild(title);

    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(fontAwesome);
  };

  // body etiketini oluşturan bir fonksiyondur
  const buildHTMLBody = () => {
    const html = `
      <div>
       <img src="https://cdn05.e-bebek.com/media/c/tum-baby-plus-joie-graco-ve-nuna-markali-ana-kucaklarinda-sepette-net-30-indirim0107d.jpg" alt="" loading="auto" width="100%" height="auto">
      </div>
      <div class="container">
        <button class="arrow-btn" onclick="movePrev()">&lt;</button>
        <div class="selected-item">
            <h1>Beğenebileceğinizi Düşündüklerimiz</h1>
            <div class="items" id="carousel"></div>
        </div>
        <button class="arrow-btn" onclick="moveNext()">&gt;</button>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", html);
  };

  // style etiketini oluşan bir fonksiyon
  const buildCSS = () => {
    const css = `
      body, html {
        margin: 0;
        padding: 0;
      }

      .container {
        background-color: white;
        min-height: 100vh;
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
      }

      .selected-item {
        background-color: white;
        width: 75%;
        height: 40%;
        /* height: auto; */
        border-radius: 0px 0px 40px 40px;
        overflow: hidden;
        padding-bottom: 2%;
        padding-right: 1px;
      }

      h1 {
        margin-top: 0;
        color: #F28E00;
        background-color: #FEF6EB;
        border-radius: 40px 40px 0 0;
        padding: 2%;
        padding-left: 5%;
        font-family: 'Nunito', sans-serif;
        font-weight: 500;
      }

      p {
        margin-top: 0;
        color: #7D7D7D;
        font-family: 'Nunito', sans-serif;
        font-size: small;
        text-decoration: none;
        font-weight: 400;
      }
      
      .discount-amount {
        font-weight: 500;
        font-size: large;
        color: #00A365;
      }
      
      .price {
        font-weight: 500;
        font-size: large;
        color: #00A365;
        text-align: left; 
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      .items {
        flex-direction: row;
        /* justify-content: space-between; */
        display: flex;
        width: auto;
        height: 100%;
        transition: transform 0.5s ease;
        justify-content: flex-start;
        gap: 12px;
        background-color: white;
        align-items: cenetr;
        
      }

      .item-card {
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.05);
        background-color: white;
        border: solid #c1c1c1 0.4px;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-right: 1%;
        padding-left: 1%;
        border-radius: 10px;
        /* text-align: center; */
        /* margin-left: auto; */
        padding-bottom: 3%;
        height: auto;
      }

      .item-card:hover {
        border-color: #F28E00;
        border-width: 1px;
      }

      .item-img {
        position: relative;
        z-index: 1;
        max-height: 180px;
      }

      .item-desc {
        padding-left: 3%;
        padding-right: 3%;
        justify-content: space-between;
        align-items: center;
        minx-height:350px;
        margin-top: auto;
      }

      .arrow-btn {
        background: #FEF6EB;
        color: #F28E00;
        border: none;
        font-size: larger;
        font-weight: bolder;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Nunito', sans-serif;
        margin-right: 1%;
        margin-left: 1%;
      }

      .btn-add-cart {
        color: #F28E00;
        background-color: #FEF6EB;
        padding: 6%;
        width: 90%;
        border-radius: 40px;
        border-width: 0;
        font-weight: 800;
        font-family: 'Nunito', sans-serif;
        font-size: small;
        margin-top: 20%;
      }

      .btn-add-cart:hover {
        color: white;
        background-color: #F28E00;
      }

      .heart {
        z-index: 99;
        color: #F28E00;
        background-color: white;
        border: none;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        position: absolute;
        top: 8px;
        right: 8px;
        display: flex;
        font-size: 25px;
      }

      .heart .fa-solid {
        display: none;
      }

      .heart.favori .fa-solid {
        display: inline;
      }

      .heart.favori .fa-regular {
        display: none;
      }

      .inner-price-container {
        min-height: 70px; 
        flex-direction: column;
        justify-content: flex-end;
      }
    `;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  };

  // eğer localde data yoksa apidan çeken ve locale kaydeden varsa localden çeken asenkron fonksiyondur
  async function fetchData() {
    try {
      let localData = localStorage.getItem("products");

      if (localData) {
        console.log("localStorage kullanıldı");
        const data = JSON.parse(localData);
        renderItems(data);
        restoreFavorites();
        return;
      }

      console.log("Veri API'den çekiliyor");
      let url = "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json";
      const response = await fetch(url);
      const data = await response.json();
      console.log("data-->", data);

      localStorage.setItem("products", JSON.stringify(data));

      renderItems(data);
      restoreFavorites();
    } catch (e) {
      console.log("error", e);
    }
  };

  // dinamik oalrak oluşturulacak card yapısını içerir, clean code açısından ayrı bir fonksiyon haline getirdim
  const renderItems = (data) => {
    const itemsContainer = document.querySelector(".items");
    itemsContainer.innerHTML = "";
    data.forEach((item, index) => {
      const itemHTML = `
        <div class="item-card" data-id="${item.id}">
          <figure class="item-img">
            <button class="heart" onclick="toggleFavorite('${item.id}', this)">
              <i class="fa-regular fa-heart"></i> 
              <i class="fa-solid fa-heart"></i> 
            </button>
            <a href="${item.url}" title="${item.name}" target="_blank" rel="noopener noreferrer">
              <img src="${item.img}" alt="${item.name}" loading="auto" width="155" height="165">
            </a>
            <figcaption style="display:none;  margin: 0; padding: 0;">${item.name}</figcaption>
          </figure>
          <a href="${item.url}" title="${item.name}" target="_blank" rel="noopener noreferrer">
            <div class="item-desc">
              <p style="min-height:50px;"><strong>${item.brand} - </strong> ${item.name}</p>
              ${item.original_price !== item.price
                  ? `
                    <div class="inner-price-container">
                      <div style="flex-direction: row; display: flex; gap:8px; align-items:center;">
                        <p style="font-size: medium;"><strong><del>${String(item.original_price)}TL</del></strong></p>
                        <p class="discount-amount"><strong>%${Math.round(((Math.round(item.original_price) - Math.round(item.price)) * 100) / Math.round(item.original_price))}</strong></p>
                      </div>
                      <p class="price"><strong>${String(item.price)}TL</strong></p>
                    </div>
                    `
                  : `
                    <div class="inner-price-container">
                      <div style="flex-direction: row; display: flex; gap:8px;">
                        <p style="font-size: medium; visibility: hidden;"><strong><del>${String(item.original_price)}TL</del></strong></p>
                        <p style="visibility: hidden; class="discount-amount"><strong>%${Math.round(((Math.round(item.original_price) - Math.round(item.price)) * 100) / Math.round(item.original_price))}</strong></p>
                      </div>
                      <p class="price"><strong>${String(item.price)}TL</strong></p>
                    </div>
                    `
              }
            </div>
          </a>
          <button class="btn-add-cart" type="button" onclick="addToCart(${index})">Sepete Ekle</button>
        </div>
      `;
      itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
    });
  };

  // ürün id ile favorite check işemi yapan bir fonksiyondur
  const restoreFavorites = () => {
    document.querySelectorAll(".item-card").forEach((card) => {
      const urunId = card.getAttribute("data-id");
      const heartBtn = card.querySelector(".heart");
      const isFavorite = localStorage.getItem(urunId);
      console.log("isFavorite", isFavorite);
      if (isFavorite === "true") {
        heartBtn.classList.add("favori");
      }
    });
  };

  const setEvents = () => {
    window.toggleFavorite = toggleFavorite;
    window.addToCart = addToCart;

    window.movePrev = movePrev;
    window.moveNext = moveNext;
  };

  let currentIndex = 0;
  const visibleCount = 5;

  // indeks değerine göre ürün kartlarını yatay kaydıran bir fonksiyondur
  const updateCarousel = () => {
    const carousel = document.getElementById("carousel");
    const cards = carousel.querySelectorAll(".item-card");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = 11;
    const scrollAmount = currentIndex * (cardWidth + gap);
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  };

  // caurseli ileriye kaydıran bir fonskiyondur
  const moveNext = () => {
    const totalCount = document.querySelectorAll(".item-card").length;
    console.log("totalCount---->", totalCount);
    if (currentIndex + visibleCount <= totalCount) {
      currentIndex++;
      updateCarousel();
    }
  };

  // caurseli geriye kaydıran bir fonksiyondur
  const movePrev = () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  };

  // localStorage favori olarak ekleyen bir fonksiyondr
  const toggleFavorite = (urunId, button) => {
    const isFavorite = button.classList.toggle("favori");
    console.log("isFavorite", isFavorite);
    console.log("urunId", urunId);
    localStorage.setItem(urunId, isFavorite);
  };

  // spete ekle butonu cliclendiğinde çalışan bir fonksiyondur
  const addToCart = () => {
    alert("yanlış sayfa");
  };

  init();
})();
