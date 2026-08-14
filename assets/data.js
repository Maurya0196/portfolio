console.log("JS Loading...");

const myName = "Rohit Maurya";
const myPhone = "+91-9803680196";
const myEmail = "rohitmaurya196@gmail.com";
const myCV = "assets/cv.pdf";
const myRoles = [
  "WordPress frontend Developer",
  "React Developer",
  "Php Web Developer",
  "Php WordPress Developer",
];

const workExperience = [
   {
    role: "Senior Frontend Developer",
    office: "Webriderz",
    location: "Ludhiana",
    startDate: "Dec, 2022",
    endDate: "March, 2026",
  },

  {
    role: "Frontend Developer",
    office: "My Virtual Teams",
    location: "Ludhiana",
    startDate: "Sept, 2021",
    endDate: "Dec, 2022",
  },

  {
    role: "Jr. Frontend Developer",
    office: "Ons Web Solution",
    location: "Ludhiana",
    startDate: "Jan, 2020",
    endDate: "Aug, 2021",
  },
];

const workSample = [
   {
    projectTitle: "Wine Country Motor Sports",
    projectImg: "./assets/images/winemotor.jpg",
    projectLink: "https://winecountrymotorsports.com/",
    category: "shopify",
  },
  {
    projectTitle: "Pettoonies",
    projectImg: "./assets/images/Pettoonies.jpg",
    projectLink: "https://pettoonies.com/",
    category: "shopify",
  },
  // {
  //   projectTitle: "Handicrafts Home",
  //   projectImg: "./assets/images/hh.jpg",
  //   projectLink: "https://handicraftshome.com/",
  //   category: "shopify",
  // },
  // {
  //   projectTitle: "Mystery Guides",
  //   projectImg: "./assets/images/mystery.jpg",
  //   projectLink: "https://www.mysteryguides.co.uk/",
  //   category: "shopify",
  // },
  // {
  //   projectTitle: "Beauty Tailor",
  //   projectImg: "./assets/images/beautytailor.jpg",
  //   projectLink: "https://beautytailornyc.com/",
  //   category: "shopify",
  // },
  {
    projectTitle: "Vaping The Way",
    projectImg: "./assets/images/vaping.jpg",
    projectLink: "https://vapingtheway.ca/",
    category: "shopify",
  },
  {
    projectTitle: "Elveflow",
    projectImg: "./assets/images/Elveflow.jpg",
    projectLink: "https://elveflow.com/",
    category: "wordpress",
  },
  {
    projectTitle: "TestRated",
    projectImg: "./assets/images/TestRated.jpg",
    projectLink: "https://testrated.com/sv/",
    category: "wordpress",
  },

   {
    projectTitle: "Entrepreneur's IQ",
    projectImg: "./assets/images/Entrepreneur.jpg",
    projectLink: "https://www.entrepreneursiq.com/",
    category: "wordpress",
  },
  {
    projectTitle: "Electropro Zaptime",
    projectImg: "./assets/images/zaptime.jpg",
    projectLink: "https://electroprozaptime.com/",
    category: "wordpress",
  },
  {
    projectTitle: "Dazlab",
    projectImg: "./assets/images/Dazlab.jpg",
    projectLink: "https://dazlab.global/",
    category: "wordpress",
  },
    {
    projectTitle: "Trekksoft",
    projectImg: "./assets/images/Trekksoft.jpg",
    projectLink: "https://trekksoft.com/",
    category: "hubspot",
  },
  
   {
    projectTitle: "Fort Restructuring",
    projectImg: "./assets/images/Restructuring.jpg",
    projectLink: "https://www.fortrestructuring.com.au/",
    category: "squarespace",
  },
   {
    projectTitle: "Tyler James Advisory",
    projectImg: "./assets/images/Tyler.jpg",
    projectLink: "https://tylerjamesadvisory.com/",
    category: "squarespace",
  },
  {
    projectTitle: "Igor Lights the Way",
    projectImg: "./assets/images/igor.jpg",
    projectLink: "https://www.igorlightstheway.com/",
    category: "squarespace",
  },
   {
    projectTitle: "BelAire Fencing",
    projectImg: "./assets/images/belairefencing.jpg",
    projectLink: "https://www.belairefencing.co.nz/",
    category: "webflow",
  },
   {
    projectTitle: "Sector Fencing",
    projectImg: "./assets/images/sectorfencing.jpg",
    projectLink: "https://www.sectorfencing.co.nz/",
    category: "webflow",
  },
  {
    projectTitle: "AHH",
    projectImg: "./assets/images/ahh.jpg",
    projectLink: "https://ahh-navy.vercel.app/",
    category: "react",
  },
  
 
];


const copyRight = "© All rights reserved Rohit Maurya.";

const aboutME = `Hi, I’m Rohit, a passionate Web Developer with over 6 years of experience building modern, responsive, and user-friendly websites. I specialize in frontend development using technologies like HTML, CSS, and JavaScript, and I have extensive experience working with CMS and website platforms including WordPress, Shopify, Squarespace, Webflow, Wix, HubSpot, and Go High Level.
<br><br>I enjoy turning ideas into functional and visually appealing digital experiences that help businesses grow and users engage effortlessly.`;


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".logos-row").forEach((el) => {
    myRoles.forEach((role) => {
      const roleH3 = document.createElement("h3");
      roleH3.textContent = role;
      el.append(roleH3);
    });
  });

  document.querySelectorAll(".about-me-txt").forEach((el) => {
    el.innerHTML = aboutME;
  });

  document.title = myName;

  document.querySelectorAll(".my-name").forEach((el) => {
    el.textContent = myName;
  });

  document.querySelectorAll(".my-email").forEach((el) => {
    if (el.tagName.toLowerCase() === "a") {
      el.href = "mailto:" + myEmail;
      if (el.innerHTML === "") {
        el.textContent = myEmail;
      }
    } else if (el.tagName.toLowerCase() === "button") {
      el.textContent = myEmail;
      el.addEventListener("click", () => {
        window.location.href = myEmail;
      });
    } else {
      el.textContent = myEmail;
    }
  });

  document.querySelectorAll(".my-phone").forEach((el) => {
    if (el.tagName.toLowerCase() === "a") {
      el.href = "tel:" + myPhone;
      if (el.innerHTML === "") {
        el.textContent = myPhone;
      }
    } else if (el.tagName.toLowerCase() === "button") {
      el.textContent = myEmail;
      el.addEventListener("click", () => {
        window.location.href = myPhone;
      });
    } else {
      el.textContent = myPhone;
    }
  });

  document.querySelectorAll(".my-cv").forEach((el) => {
    if (el.tagName.toLowerCase() === "a") {
      el.href = myCV;
      if (el.innerHTML === "") {
        el.textContent = myCV;
      }
    } else if (el.tagName.toLowerCase() === "button") {
      el.textContent = myCV;
      el.addEventListener("click", () => {
        window.location.href = myPhone;
      });
    } else {
      // do nothing
    }
  });

  document.querySelectorAll(".text-copyright").forEach((el) => {
    el.textContent = copyRight;
  });

  const expListUL = document.querySelector("#exp-lst");
    if (expListUL) {
      workExperience.forEach((exp) => {
        // console.log(exp.endDate);
        const expListLI = document.createElement("li");
        expListLI.classList.add("li-abt-info");
        expListLI.innerHTML = `
                <span class="time-line">${exp.startDate} - ${exp.endDate}</span>
                  <span class="compony-name">
                    ${exp.role} <br />
                    ${exp.office}, ${exp.location}
                </span>`;
        expListUL.append(expListLI);
      });
    }
const workSampleUL = document.querySelector(
  "#completed-projects .project-list"
);

const tabBtns = document.querySelectorAll(
  "#completed-projects .tab-btn"
);

if (workSampleUL) {

  function renderProjects(filter) {
    workSampleUL.innerHTML = "";

    const filteredProjects =
      filter === "all"
        ? workSample
        : workSample.filter((work) =>
            Array.isArray(work.category)
              ? work.category.includes(filter)
              : work.category === filter
          );

    filteredProjects.forEach((work, index) => {
      const workSingle = document.createElement("a");
      workSingle.classList.add("project-item");
      workSingle.href = work.projectLink;
      workSingle.target = "_blank";
      workSingle.rel = "noreferrer";

      workSingle.innerHTML = `
        <div class="proj-img-cont">
          <img src="${work.projectImg}" alt="${work.projectTitle}">
        </div>

        <div class="proj-desc">
          <h3>${work.projectTitle}</h3>
          <div class="proj-tags">
            <i class="fa-solid fa-arrow-up"></i>
          </div>
        </div>
      `;

      workSampleUL.append(workSingle);
    });
  }

  // Default load
  renderProjects("all");

  // Tab click logic
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {

      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");
      renderProjects(filterValue);
    });
  });
}


  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.05,
    rootMargin: "0px 0px -10% 0px",
  }
);

  document.querySelectorAll(".about-content").forEach((el) => {
    observer.observe(el);
  });

  let expBtn = document.getElementById("exp-btn");
  let eduBtn = document.getElementById("edu-btn");

  expBtn.addEventListener("click", function () {
    document.getElementById("experience").style.display = "block";
    document.getElementById("education").style.display = "none";
    expBtn.classList.add("active-btn");
    eduBtn.classList.remove("active-btn");
  });

  eduBtn.addEventListener("click", function () {
    document.getElementById("education").style.display = "block";
    document.getElementById("experience").style.display = "none";
    eduBtn.classList.add("active-btn");
    expBtn.classList.remove("active-btn");
  });

  

  document.querySelectorAll(".cstm-icon").forEach((item) => {
    const progress = item.getAttribute("data-progress") + "%";

    item.style.background = `
        conic-gradient(
          from 0deg,
          #f5b754 0%,
          #f5b754 ${progress},
          transparent ${progress}
        )
      `;
  });

  const hmbrgIcon = document.getElementById("mob-menu-icn");
  const hmbrgCancl = document.getElementById("mob-menu-icn-can");
  const mobMnu = document.getElementById("mob-menu-link");

  hmbrgIcon.addEventListener("click", function () {
    mobMnu.classList.add("show-menu");
    hmbrgCancl.style.display = "block";
    hmbrgIcon.style.display = "none";
  });

  hmbrgCancl.addEventListener("click", function () {
    mobMnu.classList.remove("show-menu");
    hmbrgCancl.style.display = "none";
    hmbrgIcon.style.display = "block";
  });

  const hdr = document.getElementById("header").offsetHeight;
  document.getElementById("mob-menu-link").style.top = hdr + "px";
  // document.getElementById('banner-section').style.marginTop = hdr + 'px';

  document.querySelectorAll(".mob-menu-link a").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelector(".mob-menu-link").classList.remove("show-menu");
      hmbrgCancl.style.display = "none";
      hmbrgIcon.style.display = "block";
    });
  });

  let lastScroll = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    let current = window.pageYOffset;

    // 1. Scroll UP → header fixed
    if (current > lastScroll) {
      header.classList.add("header-sticky");
    }

    // 3. If scroll = 0 → remove fixed (only at top)
    if (current <= 0) {
      header.classList.remove("header-sticky");
    }

    lastScroll = current;
  });

  const count = document.querySelectorAll("#experience .li-abt-info").length;
  if (count > 4) {
    document.getElementById("exp-lst").style.overflowY = "scroll";
    document.getElementById("exp-lst").style.maxHeight = "500px"; // aap height adjust kar sakte ho
  }
});

console.log("JS Fully Loaded");
