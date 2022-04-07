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

  function addProject() {
    let item = "";
    projectsArray.forEach((project) => {
      item += `<div><img src="${project.imageLink}" /><p>${project.title}</p><p>${project.description}</p><button  data-modal-target="#project">See Project</button></div>`;
    });
    portfolio.innerHTML = item;
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
};
