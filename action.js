const projectsArray = [
  {
    title: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modaldesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: "./images/Snapshoot.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Back End Dev",
    company: "Canopy",
    year: "2015",
    sourceLink: "",
    demoLink: "",
  },
  {
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modaldesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: "./images/Snap2.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Back End Dev",
    company: "Canopy",
    year: "2015",
    sourceLink: "",
    demoLink: "",
  },
  {
    title: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modaldesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: "./images/Snap3.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Back End Dev",
    company: "Canopy",
    year: "2015",
    sourceLink: "",
    demoLink: "",
  },
  {
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modaldesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: "/images/Snapshoot.png",
    tags: ["HTML", "CSS", "Javascript"],
    role: "Back End Dev",
    company: "Canopy",
    year: "2015",
    sourceLink: "",
    demoLink: "",
  },
];

window.onload = function () {
  const div = document.querySelector(".close-page");
  const open = document.querySelector(".open");
  const close = document.querySelector(".close");
  const links = document.querySelectorAll(".menu-link");
  const main = document.querySelector("main");
  const portfolio = document.getElementById("portfolio");
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.querySelector(".overlay");
  let active = "";

  if (portfolio.childNodes.length > 0) {
    const op = document.querySelectorAll("[data-modal-target]");
    console.log(op);
  }

  function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = function () {};
  }

  function addModal(project, i) {
    let modal_div = document.createElement("div");
    modal_div.setAttribute("class", "project-item");
    modal_div.setAttribute("id", `project${i + 1}`);
    let header_container = document.createElement("div");
    let project_name = document.createElement("div");
    project_name.textContent = `${project.title}`;
    let but = document.createElement("button");
    but.setAttribute("data-close-button", `project${i + 1}`);
    but.textContent = `&times;`;
    but.addEventListener("click", (e) => {
      const modal = but.closest(".project-item");
      closeModal(modal);
    });
    header_container.appendChild(project_name);
    header_container.appendChild(but);

    modal_div.appendChild(header_container);
    let tag_container = document.createElement("div");
    let tags = "";
    project.tags.forEach((item) => {
      tags += `<span>${item}</span>`;
    });
    tag_container.innerHTML = tags;
    modal_div.appendChild(tag_container);
    let body_container = document.createElement("div");
    let body = `<p>${project.modaldesc}</p><div><button>See Live</button><button>See Source</button></div>`;
    body_container.innerHTML = body;
    modal_div.appendChild(body_container);
    main.appendChild(modal_div);
  }

  function addProject() {
    let fragment = document.createDocumentFragment();
    projectsArray.forEach((project, i) => {
      addModal(project, i);
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = `${project.imageLink}`;
      let title = document.createElement("p");
      title.textContent = `${project.title}`;
      let desc = document.createElement("p");
      desc.textContent = `${project.description}`;
      let button = document.createElement("button");
      button.textContent = "See Project";
      button.setAttribute("data-modal-target", `#project${i + 1}`);

      button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
      });
      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(desc);
      div.appendChild(button);
      fragment.appendChild(div);
    });
    portfolio.appendChild(fragment);
  }

  function openModal(modal) {
    console.log(modal);
    if (modal == null) return;
    modal.classList.add("active");
    active = `#${modal.id}.active`;
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  addProject();

  open.addEventListener("click", () => {
    div.style.display = "block";
    disableScroll();
    main.style.filter = "blur(4px)";
  });

  close.addEventListener("click", () => {
    div.style.display = "none";
    enableScroll();
    main.style.filter = "none";
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      enableScroll();
      div.style.display = "none";
      main.style.filter = "none";
    });
  });

  openModalButtons.forEach((link) => {
    link.addEventListener("click", () => {
      console.log("clicked");
      // const modal = document.querySelector(link.dataset.modalTarget);
      // openModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".project-item");
      closeModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(active);
    // console.log(active)
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });
};
