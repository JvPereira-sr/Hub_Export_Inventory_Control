/* Monta a página a partir de assets/js/bis.js. Não é preciso editar este arquivo. */
(function () {
  var D = window.EIC;
  if (!D) return;

  var seta =
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/></svg>';
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var plural = function (n) { return n + (n === 1 ? " BI" : " BIs"); };
  var dois = function (n) { return (n < 10 ? "0" : "") + n; };


  // índice da abertura e navegação
  var indice = document.getElementById("indice");
  var nav = document.getElementById("nav");
  D.frentes.forEach(function (f, i) {
    indice.insertAdjacentHTML(
      "beforeend",
      '<li><a href="#' + f.id + '" style="--c:' + f.cor + '"><span>' + esc(f.nome) + "</span>" + seta + "</a></li>"
    );
    nav.insertAdjacentHTML(
      "beforeend",
      '<a href="#' + f.id + '" style="--c:' + f.cor + '">' + esc(f.nome) + "</a>"
    );
  });

  // frentes
  var main = document.getElementById("frentes");
  D.frentes.forEach(function (f, i) {
    var itens = f.bis.map(function (b) {
      var mini = b.preview
        ? '<span class="bi-mini"><img src="' + b.preview + '" alt="" loading="lazy"></span>'
        : "";
      return (
        '<li class="bi"><a href="' + esc(b.link) + '" target="_blank" rel="noopener"' +
        (b.preview ? ' data-previa="' + b.preview + '"' : "") +
        ' aria-label="Abrir ' + esc(b.nome) + ' no Power BI (nova aba)">' +
        '<span class="bi-texto"><h3>' + esc(b.nome) + "</h3><p>" + esc(b.descricao) + "</p></span>" +
        '<span class="seta">' + seta + "</span>" + mini + "</a></li>"
      );
    }).join("");

    main.insertAdjacentHTML(
      "beforeend",
      '<section class="frente' + (i % 2 === 1 ? " inverte" : "") + '" id="' + f.id + '" style="--c:' + f.cor + '"><div class="wrap">' +
        '<div class="frente-conteudo"><h2>' + esc(f.nome) + '</h2><ul class="lista">' + itens + "</ul></div>" +
        (f.foto ? '<div class="frente-foto"><img src="' + f.foto + '" alt="" data-parallax></div>' : "") +
        "</div></section>"
    );
  });

  // rodapé
  document.getElementById("ws").href = D.workspace;
  document.getElementById("ws-topo").href = D.workspace;
  document.getElementById("email").textContent = D.contato;
  document.getElementById("ano").textContent = new Date().getFullYear();

  var btn = document.getElementById("copiar");
  btn.addEventListener("click", function () {
    var ok = function () {
      btn.textContent = "Copiado";
      setTimeout(function () { btn.textContent = "Copiar e-mail"; }, 1800);
    };
    var selecionar = function () {
      var r = document.createRange();
      r.selectNodeContents(document.getElementById("email"));
      var s = getSelection(); s.removeAllRanges(); s.addRange(r);
    };
    try {
      navigator.clipboard.writeText(D.contato).then(ok, selecionar);
    } catch (e) { selecionar(); }
  });

  // cabeçalho com borda ao rolar + item ativo
  var topo = document.querySelector(".topo");
  var links = nav.querySelectorAll("a");
  var secoes = document.querySelectorAll(".frente");
  var reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var parallax = document.querySelectorAll("[data-parallax]");
  var pilulas = document.querySelectorAll(".pilula img");

  function aoRolar() {
    topo.classList.toggle("rolou", scrollY > 8);
    var meio = innerHeight * 0.4, atual = null;
    secoes.forEach(function (s) { if (s.getBoundingClientRect().top < meio) atual = s.id; });
    links.forEach(function (a) { a.classList.toggle("ativo", a.getAttribute("href") === "#" + atual); });
    if (!reduz) {
      parallax.forEach(function (img) {
        var r = img.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        var p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        img.style.transform = "translate3d(0," + (p * -5).toFixed(2) + "%,0)";
      });
      pilulas.forEach(function (img) {
        img.style.transform = "translate(-50%, calc(-50% + " + (scrollY * img.dataset.vel).toFixed(1) + "px)) rotate(-24deg)";
      });
    }
  }
  var pend = false;
  addEventListener("scroll", function () {
    if (pend) return; pend = true;
    requestAnimationFrame(function () { pend = false; aoRolar(); });
  }, { passive: true });
  aoRolar();

  // prévia que segue o cursor (apenas mouse)
  if (reduz || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  var prev = document.createElement("div");
  prev.className = "previa";
  prev.setAttribute("aria-hidden", "true");
  prev.innerHTML =
    '<div class="previa-borda"></div><div class="previa-img"><img alt=""></div>' +
    '<div class="previa-rodape"><span></span><span>Abre no Power BI</span></div>';
  document.body.appendChild(prev);
  var pImg = prev.querySelector("img"), pNome = prev.querySelector(".previa-rodape span");

  var mx = 0, my = 0, x = 0, y = 0, ativo = false, rodando = false;
  function loop() {
    x += (mx - x) * 0.14; y += (my - y) * 0.14;
    var w = prev.offsetWidth, h = prev.offsetHeight;
    var px = mx + 32 + w > innerWidth ? x - w - 32 : x + 32;
    var py = Math.min(Math.max(y - h / 2, 16), innerHeight - h - 16);
    var inc = Math.max(-6, Math.min(6, (mx - x) * 0.08));
    prev.style.transform = "translate3d(" + px + "px," + py + "px,0) rotate(" + inc + "deg)";
    if (ativo || Math.abs(mx - x) > 0.5) requestAnimationFrame(loop); else rodando = false;
  }
  addEventListener("mousemove", function (e) {
    mx = e.clientX; my = e.clientY;
    if (!rodando) { rodando = true; requestAnimationFrame(loop); }
  });

  document.querySelectorAll("a[data-previa]").forEach(function (a) {
    var sec = a.closest(".frente");
    a.addEventListener("mouseenter", function (e) {
      if (!ativo) { x = mx = e.clientX; y = my = e.clientY; }
      pImg.src = a.dataset.previa;
      pNome.textContent = a.querySelector("h3").textContent;
      prev.style.setProperty("--c", getComputedStyle(sec).getPropertyValue("--c"));
      prev.classList.add("on"); ativo = true;
      if (!rodando) { rodando = true; requestAnimationFrame(loop); }
    });
    a.addEventListener("mouseleave", function () { prev.classList.remove("on"); ativo = false; });

    // seta magnética
    var s = a.querySelector(".seta");
    a.addEventListener("mousemove", function (e) {
      var r = s.getBoundingClientRect();
      var dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      var d = Math.hypot(dx, dy);
      if (d < 140) s.style.transform = "translate(" + dx * 0.18 + "px," + dy * 0.18 + "px)";
      else s.style.transform = "";
    });
    a.addEventListener("mouseleave", function () { s.style.transform = ""; });
  });
})();
