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
  // dom variables
  const div = document.querySelector(".close-page");
  const open = document.querySelector(".open");
  const close = document.querySelector(".close");
  const links = document.querySelectorAll(".menu-link");
  const main = document.querySelector("main");
  const portfolio = document.getElementById("portfolio");
  const modals = document.querySelector(".modals");
  const overlay = document.querySelector(".overlay");
  const email_input = document.getElementById("email");
  const username_input = document.getElementById("username");
  const message_input = document.getElementById("message");
  // non-dom variables
  let active = "";
  let input = {
    email: "",
    username: "",
    message: "",
  };

  function checkLocalStorage() {
    let values = localStorage.getItem("input");

    if (values) {
      input = JSON.parse(values);
      email_input.value = input.email;
      username_input.value = input.username;
      message_input.value = input.message;
    } else {
      localStorage.setItem("input", JSON.stringify(input));
    }
  }

  function updateLocalStorage(e) {
    input = { ...input, [e.target.name]: e.target.value };
    let serialized = JSON.stringify(input);
    localStorage.setItem("input", serialized);
    console.log(localStorage);
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

  // Function Call
  checkLocalStorage();
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

  email_input.addEventListener("input", updateLocalStorage);

  username_input.addEventListener("input", updateLocalStorage);

  message_input.addEventListener("input", updateLocalStorage);
};
