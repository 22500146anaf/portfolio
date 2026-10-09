const SKILLS = {
  programming: {
    en: ["JavaScript", "HTML", "CSS", "C#", "MySQL", "Git & GitHub"],
    pt: ["JavaScript", "HTML", "CSS", "C#", "MySQL", "Git e GitHub"],
  },
  data: {
    en: ["Excel / Google Sheets", "SQL queries", "Microsoft Office", "Organization of schedules"],
    pt: ["Excel / Google Planilhas", "Consultas SQL", "Microsoft Office", "Organização de cronogramas"],
  },
  ai: {
    en: ["Prompting AI assistants", "AI tools for studying and coding"],
    pt: ["Uso de assistentes de IA", "Ferramentas de IA para estudo e programação"],
  },
  cybersecurity: {
    en: ["Security fundamentals", "Safe passwords and authentication", "Career goal in progress"],
    pt: ["Fundamentos de segurança", "Senhas seguras e autenticação", "Objetivo de carreira em andamento"],
  },
  "soft-skills": {
    en: ["Communication", "Teamwork", "Event organization", "Problem solving", "Adaptability"],
    pt: ["Comunicação", "Trabalho em equipe", "Organização de eventos", "Resolução de problemas", "Adaptabilidade"],
  },
  languages: {
    en: ["Portuguese (native)", "English"],
    pt: ["Português (nativo)", "Inglês"],
  },
};

const PT = {
  "skip": "Pular para o conteúdo",
  "nav.about": "Sobre mim",
  "nav.projects": "Projetos",
  "nav.contact": "Contato",
  "hero.role": "Desenvolvedora e estudante de TI",
  "hero.desc": "Crio sites e aplicações web com JavaScript, HTML, CSS, C# e MySQL, e estou a caminho da cibersegurança.",
  "hero.work": "Ver meus projetos",
  "hero.touch": "Fale comigo",
  "hero.alt": "Retrato de Ana Flávia",
  "gallery.band": "No estúdio da TV Band",
  "gallery.emfl": "Recebendo certificado de conclusão de curso",
  "gallery.cer": "Certificados de conclusão de curso",
  "gallery.zero9": "Estúdio de podcast Zero Nove",
  "about.lead": "Meu nome é Ana Flávia Fernandes da Silva. Desde que entrei no COTEMIG, venho construindo uma trajetória contínua de aprendizado e crescimento na área de tecnologia, ampliando minhas habilidades e minha paixão pela área a cada dia.",
  "about.p1": "Sou movida pela curiosidade sobre tecnologia e pelo objetivo de criar projetos que façam uma diferença real.",
  "about.p2": "Estou no segundo ano do ensino médio técnico no COTEMIG, com uma grande paixão por tecnologia e pelo mundo digital. Sigo aprendendo e evoluindo em desenvolvimento de software, trabalhando principalmente com JavaScript e C#.",
  "about.p3": "Meu objetivo é construir uma carreira em Cibersegurança, protegendo pessoas e sistemas, e estou construindo a base técnica para isso, um projeto de cada vez.",
  "skills.title": "Habilidades e Experiência",
  "tl1.title": "Embaixadora da escola",
  "tl1.text": "Trabalho junto a alunos, professores e direção da escola, ajudando a organizar eventos, feiras e projetos escolares.",
  "tl1.l1": "Organização de eventos e atividades escolares",
  "tl1.l2": "Apoio e atendimento aos alunos",
  "tl1.l3": "Resolução de dúvidas e imprevistos",
  "tl1.l4": "Acompanhamento de cronogramas e projetos",
  "tl1.l5": "Trabalho em equipe e comunicação com públicos diferentes",
  "tl2.title": "Ensino Médio Técnico em Informática",
  "tl2.text": "Segundo ano, com foco em desenvolvimento de software.",
  "folders.hint": "Abra uma pasta para ver o que tem dentro.",
  "skill.programming": "Programação e Web",
  "skill.data": "Dados e Produtividade",
  "skill.ai": "Inteligência Artificial",
  "skill.cybersecurity": "Cibersegurança",
  "skill.soft-skills": "Soft Skills",
  "skill.languages": "Idiomas",
  "projects.note": 'Mais projetos no <a href="https://github.com/22500146anaf" target="_blank" rel="noopener" class="link">GitHub</a>.',
  "contact.headline": "Vamos construir algo real, com impacto real.",
  "contact.hint": "Escolha um canal ou mande uma mensagem. Respondo assim que puder.",
  "contact.divider": "ou me escreva",
  "field.name": "Nome",
  "field.email": "E-mail",
  "field.phone": 'Telefone <span class="field__opt">(opcional)</span>',
  "field.linkedin": 'LinkedIn <span class="field__opt">(opcional)</span>',
  "field.message": "Mensagem",
  "ph.name": "Como devo te chamar?",
  "ph.email": "voce@exemplo.com",
  "ph.message": "Conte rapidamente o que você tem em mente.",
  "form.send": "Enviar mensagem",
  "dialog.close": "Fechar",
};

const MESSAGES = {
  en: {
    title: "Ana Flávia — Developer & IT student",
    invalid: "Fill in your name, a valid email and a message.",
    sending: "Sending…",
    sent: "Message sent. I'll get back to you soon.",
    failed: (email) => `Couldn't send right now. Try again or email ${email}.`,
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    langLabel: "Mudar para português",
    langShort: "PT",
  },
  pt: {
    title: "Ana Flávia — Desenvolvedora e estudante de TI",
    invalid: "Preencha seu nome, um e-mail válido e a mensagem.",
    sending: "Enviando…",
    sent: "Mensagem enviada. Respondo em breve.",
    failed: (email) => `Não foi possível enviar agora. Tente de novo ou escreva para ${email}.`,
    toLight: "Mudar para o modo claro",
    toDark: "Mudar para o modo escuro",
    langLabel: "Switch to English",
    langShort: "EN",
  },
};

const OWNER_EMAIL = "anafiisilva8@gmail.com";
const FORMSPREE_ID = "mzedralr";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const lang = () => (root.lang.startsWith("pt") ? "pt" : "en");
  const msg = (key) => MESSAGES[lang()][key];

  const EN = {};
  const textNodes = document.querySelectorAll("[data-i18n]");
  const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
  const altNodes = document.querySelectorAll("[data-i18n-alt]");
  textNodes.forEach((el) => { EN[el.dataset.i18n] ??= el.innerHTML.trim(); });
  placeholderNodes.forEach((el) => { EN[el.dataset.i18nPlaceholder] ??= el.placeholder; });
  altNodes.forEach((el) => { EN[el.dataset.i18nAlt] ??= el.alt; });
  const t = (key) => (lang() === "pt" ? PT[key] : EN[key]);

  const dialog = document.querySelector(".skill-dialog");
  const title = dialog.querySelector(".skill-dialog__title");
  const list = dialog.querySelector(".skill-dialog__list");
  let opener = null;

  const renderSkill = () => {
    const key = opener.dataset.skill;
    title.textContent = t(`skill.${key}`).replace("&amp;", "&");
    list.replaceChildren(...SKILLS[key][lang()].map((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      return li;
    }));
  };

  document.querySelectorAll(".folder").forEach((folder) => {
    folder.addEventListener("click", () => {
      if (!SKILLS[folder.dataset.skill]) return;
      opener = folder;
      renderSkill();
      dialog.showModal();
    });
  });

  dialog.querySelector(".skill-dialog__close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => opener?.focus());

  const form = document.querySelector(".contact__form");
  const status = form.querySelector(".form-status");
  const submit = form.querySelector('button[type="submit"]');
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let firstInvalid = null;
    form.querySelectorAll("input, textarea").forEach((field) => {
      const ok = field.checkValidity();
      field.setAttribute("aria-invalid", String(!ok));
      if (!ok && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      status.textContent = msg("invalid");
      firstInvalid.focus();
      return;
    }
    const data = new FormData(form);
    data.append("_subject", `Portfolio contact from ${data.get("name")}`);

    submit.disabled = true;
    submit.textContent = msg("sending");
    status.textContent = "";
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      form.reset();
      status.textContent = msg("sent");
    } catch {
      status.textContent = msg("failed")(OWNER_EMAIL);
    } finally {
      submit.disabled = false;
      submit.innerHTML = t("form.send");
    }
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MAX_TILT = 10;

  const rotateEvery5s = (container, items) => {
    const rotate = () => items.forEach((item) => {
      item.dataset.pos = (Number(item.dataset.pos) + items.length - 1) % items.length;
    });
    let timer = null;
    const start = () => { if (!reduceMotion && !timer) timer = setInterval(rotate, 5000); };
    const stop = () => { clearInterval(timer); timer = null; };
    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);
    start();
  };

  const gallery = document.querySelector(".skills__gallery");
  const cells = [...gallery.querySelectorAll(".skills__gallery-cell")];
  rotateEvery5s(gallery, cells);

  const projects = document.querySelector(".projects__track");
  rotateEvery5s(projects, [...projects.querySelectorAll(".project-card")]);

  if (!reduceMotion) {
    [...cells, document.querySelector(".hero__photo")].forEach((cell) => {
      cell.addEventListener("mousemove", (e) => {
        const r = cell.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        cell.style.transform = `perspective(700px) rotateX(${-y * 2 * MAX_TILT}deg) rotateY(${x * 2 * MAX_TILT}deg)`;
      });
      cell.addEventListener("mouseleave", () => { cell.style.transform = ""; });
    });
  }

  const themeToggle = document.querySelector(".theme-toggle");
  const syncToggleLabel = () => {
    themeToggle.setAttribute("aria-label", root.dataset.theme === "light" ? msg("toDark") : msg("toLight"));
  };
  const applyTheme = () => {
    if (root.dataset.theme === "light") {
      delete root.dataset.theme;
      localStorage.setItem("theme", "dark");
    } else {
      root.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    }
    syncToggleLabel();
  };
  themeToggle.addEventListener("click", () => {
    if (!document.startViewTransition || reduceMotion) return applyTheme();

    const r = themeToggle.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(applyTheme).ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(.65, 0, .35, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  });

  const langToggle = document.querySelector(".lang-toggle");
  const applyLanguage = () => {
    textNodes.forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    placeholderNodes.forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    altNodes.forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
    document.title = msg("title");
    langToggle.textContent = msg("langShort");
    langToggle.setAttribute("aria-label", msg("langLabel"));
    status.textContent = "";
    if (dialog.open) renderSkill();
    syncToggleLabel();
  };
  langToggle.addEventListener("click", () => {
    root.lang = lang() === "pt" ? "en" : "pt-BR";
    localStorage.setItem("lang", root.lang);
    applyLanguage();
  });
  applyLanguage();

  const links = document.querySelectorAll(".navbar__link");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));

  const navbar = document.querySelector(".navbar");
  const contact = document.querySelector("#contact");
  const toggleNavbar = () => {
    navbar.classList.toggle("is-hidden", contact.getBoundingClientRect().top < innerHeight * 0.6);
  };
  addEventListener("scroll", toggleNavbar, { passive: true });
  addEventListener("resize", toggleNavbar);
  toggleNavbar();
});
