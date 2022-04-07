const projectsArray = [
  {
    title: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    modaldesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum han printer took a galley of type and scrambled it 1960s",
    imageLink: "images/Snapshoot.png",
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
    imageLink: "images/Snap2.png",
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
    imageLink: "images/Snap3.png",
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
    imageLink: "images/Snapshoot.png",
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
  const modals = document.querySelector(".modals");
  const overlay = document.querySelector(".overlay");
  const log = document.getElementById("log");
  const form = document.getElementById("form");
  const email_input = document.getElementById("Email");
  const username_input = document.getElementById("user-name");
  const message_input = document.getElementById("message");

  let active = "";
  let email = "";
  let username = "";
  let message = "";

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

  function addModals() {
    let modalitem = "";
    projectsArray.forEach((project, i) => {
      let tags = "";
      project.tags.forEach((tag) => {
        tags += `<span>${tag}</span>`;
      });
      modalitem += `
      <div class="project-item" id="project${i + 1}">
        <div class="item-header">
          <div class="title">${project.title}</div>
          <button data-close-button class="close-button">&times;</button>
        </div>
        <div class="item-body">
          <div class="item-details">
            <span>${project.company}</span>
            <span class="item-role">${project.role}</span>
            <span>${project.year}</span>
          </div>
          <div class="item-img img${i + 1}">
            <p>image point</p>
          </div>
          <p>${project.modaldesc}</p>
          <div class="tags">
            ${tags}
          </div>
          <div class="modal-links">
            <a href="${project.sourceLink}"><span>See live</span></a>
            <a href="${project.demoLink}"><span>See Source</span></a>
          </div>
        </div>        
      </div>`;
    });
    modals.innerHTML = modalitem;
  }

  function addProject() {
    let proj = "";
    projectsArray.forEach((project, i) => {
      let tags = "";
      project.tags.forEach((tag) => {
        tags += `<span>${tag}</span>`;
      });
      proj += `<div>
      <img src="${project.imageLink}" />
      <p>${project.title}</p>
      <p>${project.description}</p>
      <div class="tags">
        ${tags}
      </div>
      <button data-modal-target="#project${i + 1}">See Project</button>
      </div>`;
    });
    portfolio.innerHTML = proj;
  }

  function openModal(modal) {
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

  function reset() {
    username = "";
    email = "";
    message = "";
  }

  // Function Call
  addModals();
  addProject();

  // Event Listeners
  portfolio.addEventListener("click", (e) => {
    if (e.target.nodeName !== "BUTTON") {
      return;
    }
    const modal = document.querySelector(e.target.dataset.modalTarget);
    openModal(modal);
  });

  modals.addEventListener("click", (e) => {
    if (e.target.nodeName !== "BUTTON") {
      return;
    }
    let modal = e.target.closest(".project-item");
    closeModal(modal);
  });

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

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(active);
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  email_input.addEventListener("input", (e) => {
    email += e.target.value;
  });

  username_input.addEventListener("input", (e) => {
    username += e.target.value;
  });

  message_input.addEventListener("input", (e) => {
    message += e.target.value;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(email);

    let caps = /[A-Z]/g;

    if (email.match(caps)) {
      log.innerText = "The content of email field has to be in lower case";
      reset();
      return;
    } else {
      reset();
    }
  });
};
