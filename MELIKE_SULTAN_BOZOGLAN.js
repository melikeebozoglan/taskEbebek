// Developers's name: Melike Sultan Bozoğlan
// Date: 01.07.2025
// Project: a module of ebebek website

(() => {
  const init = () => {
    buildHTMLHead();
    buildHTMLBody();
    buildCSS();
    fetchData();
    // setEvents();
  };

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
  };

  const buildHTMLBody = () => {
    const html = `
        <div class="container">
            <div class="selected-item">
                <h1>Beğenebileceğinizi düşündüklerimiz</h1>
                <div class="items">
                    <a href="https://www.e-bebek.com/hellobaby-yenidogan-6li-agiz-mendili-24x24cm-unisex-p-24ghlbumnd007001"
                        title="name" target="_blank" rel="noopener noreferrer">
                        <div class="item-card">
                            <figure class="item-img">
                                <img src="https://cdn05.e-bebek.com/mnresize/300/300/media/p/organik-6li-agiz-mendili-24x24-cm_8682766103779_01.jpg"
                                    alt="deneme görseli" loading="auto" width="155" height="155">
                                <figcaption style="display:none;  margin: 0; padding: 0;">ceo için fakat kullanıcı görmemeli
                                </figcaption>
                            </figure>
                            <div class="item-desc">
                                <p>brand</p>
                                <p>name</p>
                                <p>original_price</p>
                                <p>price</p>
                            </div>
                            <button type="button" onclick="addToCart(123)">Sepete Ekle</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
      `;
    document.body.insertAdjacentHTML("beforeend", html);
  };

  const buildCSS = () => {
    const css = `
        body,
        html {
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
        }

        .selected-item {
            background-color: pink;
            width: 68%;
            height: 40%;
            /* height: auto; */
            border-radius: 0px 0px 40px 40px;
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

        .items {
            flex-direction: row;
            background-color: blue;
            justify-content: space-between;
            display: flex;
        }

        .item-card {
            box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.05);
            background-color: red;
            border: solid black 1px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            /* margin-left: auto; */
        }

        .item-img {
            background-color: black;
        }

        .item-desc {
            background-color: black;
        }
      `;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  };

  async function fetchData() {
    try {
      let url =
        "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json";
      const response = await fetch(url);
      const data = await response.json();
      console.log("data-->", data);

      const itemsContainer = document.querySelector(".items");
      itemsContainer.innerHTML = ""; // varsayılan ürünü temizle

      data.forEach((item, index) => {
        const itemHTML = `
        <a href="${item.url}" title="${item.name}" target="_blank" rel="noopener noreferrer">
          <div class="item-card">
            <figure class="item-img">
              <img src="${item.img}" alt="${item.name}" loading="auto" width="155" height="155">
              <figcaption style="display:none;">${item.name}</figcaption>
            </figure>
            <div class="item-desc">
              <p>${item.brand}</p>
              <p>${item.name}</p>
              <p><del>${item.original_price}₺</del></p>
              <p style="color: lime">${item.price}₺</p>
            </div>
            <button type="button" onclick="addToCart(${index})">Sepete Ekle</button>
          </div>
        </a>
      `;
        itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
      });
    } catch (e) {
      console.log("error", e);
    }
  }

  //   const setEvents = () => {
  //     document.querySelector(".container").addEventListener("click", () => {
  //       alert("Tıkladın!");
  //     });
  //   };
  //   function goToCart() {
  //     window.location.href = "/cart";

  init();
})();
