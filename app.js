// ===============================
// HORIZON • Asia 2026
// Version 2.0
// ===============================

const state = {
  page: "home",
  budget: JSON.parse(localStorage.getItem("budget")) || [],
  journal: localStorage.getItem("journal") || ""
};

const trip = [
  ["20.10","✈️","Frankfurt → Osaka","APA Namba Hotel"],
  ["21.10","🍜","Dotonbori & Namba","Osaka"],
  ["22.10","🕊️","Peace Memorial Park","Hiroshima"],
  ["23.10","⛩️","Miyajima","Hiroshima"],
  ["24.10","🍺","Ura Namba","Osaka"],
  ["25.10","🏯","Osaka Castle","Osaka"],
  ["26.10","🎮","Shinsekai","Osaka"],
  ["27.10","🛍️","Den Den Town","Osaka"],
  ["28.10","🚄","Shinkansen nach Tokio","GLANSIT"],
  ["29.10","🏮","Asakusa","Tokio"],
  ["30.10","🗻","Fuji Expedition","Tokio"],
  ["31.10","🎃","Golden Gai","Tokio"],
  ["01.11","☕","Hidden Tokyo","Tokio"],
  ["02.11","🌺","Flug Okinawa","Y's Cabin"],
  ["03.11","🇺🇸","American Village","Okinawa"],
  ["04.11","✈️","Kadena Spotting","Okinawa"],
  ["05.11","🌊","Beach Day","Okinawa"],
  ["06.11","🚗","Cape Zanpa","Okinawa"],
  ["07.11","🇹🇼","Flug Taipei","Daan Park"],
  ["08.11","🏙️","Taipei 101","Taipei"],
  ["09.11","🏮","Jiufen","Taipei"],
  ["10.11","♨️","Beitou","Taipei"],
  ["11.11","🍜","Raohe Night Market","Taipei"],
  ["12.11","🚡","Maokong","Taipei"],
  ["13.11","🇰🇷","Flug Seoul","MOOGM"],
  ["14.11","🏯","Gyeongbokgung","Seoul"],
  ["15.11","🎤","Hongdae","Seoul"],
  ["16.11","🧱","Suwon Fortress","Seoul"],
  ["17.11","🌆","N Seoul Tower","Seoul"],
  ["18.11","✨","COEX","Seoul"],
  ["19.11","🍸","Euljiro","Seoul"],
  ["20.11","🛫","Heimflug","Frankfurt"]
];

const flights = [
  ["MU220 / MU225","Frankfurt → Osaka","20.10 14:30"],
  ["MM507","Tokio → Okinawa","02.11 14:00"],
  ["MM925","Okinawa → Taipei","07.11 13:35"],
  ["OZ714","Taipei → Seoul","13.11 17:05"],
  ["KE945","Seoul → Frankfurt","20.11 11:25"]
];

// Splash
window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
    openPage("home");
  },1200);
};

// Navigation
document.addEventListener("click",(e)=>{
  const btn = e.target.closest("[data-page]");
  if(!btn) return;
  openPage(btn.dataset.page);
});

function openPage(page){
  state.page = page;

  document.querySelectorAll(".tab").forEach(t=>{
    t.classList.remove("active");
    if(t.dataset.page===page) t.classList.add("active");
  });

  if(page==="home") renderHome();
  if(page==="plan") renderPlan();
  if(page==="explore") renderExplore();
  if(page==="wallet") renderWallet();
  if(page==="more") renderMore();
}

function renderHome(){
  const total = state.budget.reduce((a,b)=>a+b.amount,0);

  content.innerHTML = `
    <section class="hero">
      <span class="eyebrow">DAY 11 • TOKYO</span>
      <h2>Fuji Expedition</h2>
      <p>30.10.2026 • Kawaguchiko</p>

      <div class="grid">
        <div class="stat">
          <small>WETTER</small>
          <h3>☀️ 19°C</h3>
          <p>Fuji sichtbar</p>
        </div>

        <div class="stat">
          <small>BUDGET</small>
          <h3>€ ${4000-total}</h3>
          <p>verfügbar</p>
        </div>
      </div>
    </section>

    <section class="card">
      <h3>✈️ Nächster Flug</h3>
      <p><b>MU220</b> Frankfurt → Osaka</p>
      <small>20. Oktober • 14:30</small>
    </section>

    <section class="card">
      <h3>🏨 Hotels</h3>
      <p>6 Unterkünfte bereits gebucht</p>
    </section>
  `;
}

function renderPlan(){

  let html = `<section class="card"><h3>🗓 Gesamtreise</h3>`;

  trip.forEach(day=>{
    html += `
      <div style="margin:14px 0;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.08)">
        <b>${day[0]} ${day[1]}</b>
        <p>${day[2]}</p>
        <small>${day[3]}</small>
      </div>`;
  });

  html += `</section>`;

  content.innerHTML = html;
}

function renderExplore(){

  content.innerHTML = `
    <section class="card">
      <h3>🗺 Städte</h3>

      <div style="display:grid;gap:12px">

        <div class="stat">
          <h3>🍜 Osaka</h3>
          <p>Dotonbori • Shinsekai • Den Den Town</p>
        </div>

        <div class="stat">
          <h3>🕊 Hiroshima</h3>
          <p>Peace Park • Miyajima</p>
        </div>

        <div class="stat">
          <h3>🗻 Tokio</h3>
          <p>Fuji • Asakusa • Akihabara</p>
        </div>

        <div class="stat">
          <h3>🌺 Okinawa</h3>
          <p>American Village • Cape Zanpa</p>
        </div>

        <div class="stat">
          <h3>🏮 Taipei</h3>
          <p>Jiufen • Beitou • Raohe</p>
        </div>

        <div class="stat">
          <h3>🇰🇷 Seoul</h3>
          <p>Hongdae • Suwon • COEX</p>
        </div>

      </div>
    </section>
  `;
}

function renderWallet(){

  let html = `<section class="card"><h3>✈️ Travel Wallet</h3>`;

  flights.forEach(f=>{
    html += `
      <div style="margin:16px 0;padding:14px;border-radius:16px;background:rgba(255,255,255,.06)">
        <b>${f[0]}</b>
        <p>${f[1]}</p>
        <small>${f[2]}</small>
      </div>`;
  });

  html += `
    <h3 style="margin-top:22px">🚄 Shinkansen</h3>

    <div class="stat">
      <p><b>Shin-Osaka → Hiroshima</b></p>
      <small>Noch nicht gebucht</small>
    </div>

    <div class="stat" style="margin-top:12px">
      <p><b>Shin-Osaka → Tokio</b></p>
      <small>Noch nicht gebucht</small>
    </div>

  </section>`;

  content.innerHTML = html;
}

function renderMore(){

  const total = state.budget.reduce((a,b)=>a+b.amount,0);

  let expenses = "";

  state.budget.forEach(e=>{
    expenses += `<p>${e.title} — €${e.amount}</p>`;
  });

  content.innerHTML = `
    <section class="card">
      <h3>💴 Budget</h3>

      <h2>€ ${total}</h2>

      <input id="title" placeholder="Takoyaki">
      <br><br>
      <input id="amount" type="number" placeholder="8.50">

      <br><br>

      <button onclick="addExpense()" style="width:100%;padding:14px;border:none;border-radius:14px;background:#EA580C;color:white">
        Ausgabe speichern
      </button>

      <div style="margin-top:18px">
        ${expenses || "<small>Noch keine Ausgaben.</small>"}
      </div>

    </section>

    <section class="card">
      <h3>📔 Captain's Log</h3>

      <textarea id="journal" rows="6" style="width:100%;background:#111827;color:white;border:none;border-radius:12px;padding:12px">${state.journal}</textarea>

      <br><br>

      <button onclick="saveJournal()" style="width:100%;padding:14px;border:none;border-radius:14px;background:#2563EB;color:white">
        Journal speichern
      </button>

    </section>
  `;
}

function addExpense(){

  const title = document.getElementById("title").value;
  const amount = Number(document.getElementById("amount").value);

  if(!title || !amount) return;

  state.budget.push({
    title,
    amount
  });

  localStorage.setItem("budget",JSON.stringify(state.budget));

  renderMore();
}

function saveJournal(){

  state.journal = document.getElementById("journal").value;

  localStorage.setItem("journal",state.journal);

  alert("Captain's Log gespeichert ✨");
}