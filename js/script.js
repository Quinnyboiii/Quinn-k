// ==========================================
// QUINN'S PORTFOLIO JAVASCRIPT
// ==========================================


// ==========================================
// SURPRISE BUTTON
// ==========================================

const surpriseBtn =
  document.querySelector("#surpriseBtn");

const surpriseText =
  document.querySelector("#surpriseText");


const surprises = [

  "🎮 Gamer mode activated!",

  "⚽ Soccer mode activated!",

  "🏔️ Ski mode activated!",

  "💻 Coding XP +10!",

  "🚀 Mission accepted!",

  "🔥 Website power increased!",

  "✨ You found a random message!",

  "🧠 Big brain coding moment!"

];


if (surpriseBtn) {

  surpriseBtn.addEventListener(
    "click",
    function () {

      const random =
        Math.floor(
          Math.random() *
          surprises.length
        );

      surpriseText.textContent =
        surprises[random];

      surpriseText.classList.add("show");

    }
  );

}


// ==========================================
// HELLO BUTTON
// ==========================================

const helloBtn =
  document.querySelector("#helloBtn");

const helloText =
  document.querySelector("#helloText");


if (helloBtn) {

  helloBtn.addEventListener(
    "click",
    function () {

      helloText.textContent =
        "👋 Hey! Thanks for checking out my website!";

      helloText.classList.add("show");

      helloBtn.textContent =
        "👋 Hello!";

    }
  );

}


// ==========================================
// ALL DATA-MESSAGE BUTTONS
// ==========================================

const messageButtons =
  document.querySelectorAll(
    "[data-message]"
  );


messageButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        const message =
          button.dataset.message;


        const section =
          button.closest("section");


        let messageBox =
          section
            ? section.querySelector(".message")
            : null;


        if (messageBox) {

          messageBox.textContent =
            message;

          messageBox.classList.add("show");

        }


        button.classList.add(
          "clicked"
        );


        setTimeout(
          function () {

            button.classList.remove(
              "clicked"
            );

          },
          250
        );

      }
    );

  }
);


// ==========================================
// GOAL BUTTON
// ==========================================

const goalBtn =
  document.querySelector("#goalBtn");

const goalMessage =
  document.querySelector("#goalMessage");


if (goalBtn) {

  goalBtn.addEventListener(
    "click",
    function () {

      goalBtn.textContent =
        "🔥 MISSION ACTIVE!";

      goalMessage.textContent =
        "🚀 Mission started! Time to keep learning and build that game.";

      goalMessage.classList.add(
        "show"
      );

    }
  );

}


// ==========================================
// FAVOURITE GAMES BUTTON
// ==========================================

const gamesBtn =
  document.querySelector("#gamesBtn");

const gamesText =
  document.querySelector("#gamesText");


if (gamesBtn) {

  gamesBtn.addEventListener(
    "click",
    function () {

      if (
        gamesText.classList.contains(
          "show"
        )
      ) {

        gamesText.textContent = "";

        gamesText.classList.remove(
          "show"
        );

        gamesBtn.textContent =
          "🎮 Show Favourite Games";

      }

      else {

        gamesText.textContent =
          "🎮 Some games I like are Minecraft, Roblox, and Fortnite.";

        gamesText.classList.add(
          "show"
        );

        gamesBtn.textContent =
          "🎮 Hide Favourite Games";

      }

    }
  );

}


// ==========================================
// QUEST BUTTON
// ==========================================

const questBtn =
  document.querySelector("#questBtn");

const questMessage =
  document.querySelector("#questMessage");


if (questBtn) {

  questBtn.addEventListener(
    "click",
    function () {

      questBtn.textContent =
        "🏆 QUEST COMPLETE!";

      questMessage.textContent =
        "⭐ Quest complete! Keep learning, keep coding, and keep building.";

      questMessage.classList.add(
        "show"
      );

    }
  );

}


// ==========================================
// PROJECT CARDS
// ==========================================

const projectInfo =
  document.querySelector(
    "#projectInfo"
  );


const projects = {

  shooter: {

    title:
      "🎯 Top-Down Shooter",

    text:
      "Coming Soon! 🚀"

  },


  homework: {

    title:
      "📚 Homework Organizer",

    text:
      "Coming Soon! 🚀"

  },


  math: {

    title:
      "🧮 Math Helper",

    text:
      "Coming Soon! 🚀"

  }

};


const projectButtons =
  document.querySelectorAll(
    ".project"
  );


projectButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        const project =
          projects[
            button.dataset.project
          ];


        projectInfo.innerHTML = `

          <p class="tag">
            🚧 PROJECT STATUS
          </p>

          <h2>
            Coming Soon!
          </h2>

          <p>
            ${project.title}
          </p>

          <p>
            🚀 This project is not ready yet.
            Check back later for updates!
          </p>

          <button
            class="small-button"
            id="closeProject"
            type="button"
          >
            ✖ Close
          </button>

        `;


        projectInfo.classList.add(
          "show"
        );


        projectInfo.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });


        const closeProject =
          document.querySelector(
            "#closeProject"
          );


        if (closeProject) {

          closeProject.addEventListener(
            "click",
            function () {

              projectInfo.innerHTML = `

                <p class="tag">
                  PROJECT CONSOLE
                </p>

                <h2>
                  Choose a project 👆
                </h2>

                <p>
                  Click one of the three project cards above
                  to open more information.
                </p>

              `;


              projectInfo.classList.remove(
                "show"
              );

            }
          );

        }

      }
    );

  }
);


// ==========================================
// SECRET BUTTON
// ==========================================

const secretBtn =
  document.querySelector(
    "#secretBtn"
  );

const secretMessage =
  document.querySelector(
    "#secretMessage"
  );


if (secretBtn) {

  secretBtn.addEventListener(
    "click",
    function () {

      secretMessage.textContent =
        "😈 YOU PRESSED IT! You found the secret button!";

      secretMessage.classList.add(
        "show"
      );

      secretBtn.textContent =
        "💥 YOU FOUND IT!";

    }
  );

}
/* =========================================================
   QUINN PORTFOLIO VISUAL UPGRADE
   JAVASCRIPT ADD-ON
   Paste at the VERY BOTTOM of script.js
   ========================================================= */

(function () {

  "use strict";


  /* =====================================================
     BASIC SETUP
     ===================================================== */

  const body =
    document.body;

  if (!body) {
    return;
  }


  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  const finePointer =
    window.matchMedia(
      "(pointer:fine)"
    ).matches;


  /* =====================================================
     TOAST SYSTEM
     ===================================================== */

  const toast =
    document.getElementById(
      "quinnToast"
    );


  let toastTimer;


  function quinnToast(message) {

    if (!toast) {
      return;
    }


    toast.textContent =
      message;


    toast.classList.remove(
      "show"
    );


    void toast.offsetWidth;


    toast.classList.add(
      "show"
    );


    clearTimeout(
      toastTimer
    );


    toastTimer =
      setTimeout(
        function () {

          toast.classList.remove(
            "show"
          );

        },
        2300
      );

  }


  window.quinnToast =
    quinnToast;


  /* =====================================================
     SCROLL PROGRESS
     ===================================================== */

  const progress =
    document.getElementById(
      "quinnScrollProgress"
    );


  const topButton =
    document.getElementById(
      "quinnTopButton"
    );


  function updateScroll() {

    const max =
      document.documentElement
        .scrollHeight -
      window.innerHeight;


    const percent =
      max > 0
        ? (
            window.scrollY /
            max
          ) * 100
        : 0;


    if (progress) {

      progress.style.width =
        percent + "%";

    }


    if (topButton) {

      topButton.classList.toggle(
        "show",
        window.scrollY > 450
      );

    }


    if (window.scrollY > 40) {

      body.classList.add(
        "quinn-scrolled"
      );

    } else {

      body.classList.remove(
        "quinn-scrolled"
      );

    }

  }


  window.addEventListener(
    "scroll",
    updateScroll,
    {
      passive: true
    }
  );


  updateScroll();


  /* =====================================================
     BACK TO TOP
     ===================================================== */

  if (topButton) {

    topButton.addEventListener(
      "click",
      function () {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =====================================================
     MOUSE LIGHTING
     ===================================================== */

  const mouseGlow =
    document.getElementById(
      "quinnMouseGlow"
    );


  const mouseRing =
    document.getElementById(
      "quinnMouseRing"
    );


  if (
    finePointer &&
    !reduceMotion
  ) {

    let mouseX =
      window.innerWidth / 2;

    let mouseY =
      window.innerHeight / 2;


    let ringX =
      mouseX;

    let ringY =
      mouseY;


    window.addEventListener(
      "pointermove",
      function (event) {

        mouseX =
          event.clientX;

        mouseY =
          event.clientY;


        if (mouseGlow) {

          mouseGlow.style.left =
            mouseX + "px";

          mouseGlow.style.top =
            mouseY + "px";

        }

      },
      {
        passive: true
      }
    );


    function moveRing() {

      ringX +=
        (
          mouseX -
          ringX
        ) * 0.15;


      ringY +=
        (
          mouseY -
          ringY
        ) * 0.15;


      if (mouseRing) {

        mouseRing.style.transform =
          "translate3d(" +
          ringX +
          "px," +
          ringY +
          "px,0)";

      }


      requestAnimationFrame(
        moveRing
      );

    }


    requestAnimationFrame(
      moveRing
    );

  }


  /* =====================================================
     PARTICLE SYSTEM
     ===================================================== */

  const canvas =
    document.getElementById(
      "quinnParticles"
    );


  if (
    canvas &&
    !reduceMotion
  ) {

    const ctx =
      canvas.getContext("2d");


    let particles = [];


    function resizeCanvas() {

      canvas.width =
        window.innerWidth;

      canvas.height =
        window.innerHeight;

    }


    resizeCanvas();


    window.addEventListener(
      "resize",
      resizeCanvas
    );


    const particleCount =
      window.innerWidth < 700
        ? 24
        : 55;


    for (
      let i = 0;
      i < particleCount;
      i++
    ) {

      particles.push({

        x:
          Math.random() *
          canvas.width,

        y:
          Math.random() *
          canvas.height,

        size:
          Math.random() *
          2 +
          0.5,

        speedX:
          (
            Math.random() -
            0.5
          ) * 0.25,

        speedY:
          (
            Math.random() -
            0.5
          ) * 0.25,

        opacity:
          Math.random() *
          0.55 +
          0.15

      });

    }


    function drawParticles() {

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );


      particles.forEach(
        function (particle) {

          particle.x +=
            particle.speedX;

          particle.y +=
            particle.speedY;


          if (
            particle.x < -10
          ) {
            particle.x =
              canvas.width + 10;
          }


          if (
            particle.x >
            canvas.width + 10
          ) {
            particle.x = -10;
          }


          if (
            particle.y < -10
          ) {
            particle.y =
              canvas.height + 10;
          }


          if (
            particle.y >
            canvas.height + 10
          ) {
            particle.y = -10;
          }


          ctx.beginPath();


          ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
          );


          ctx.fillStyle =
            "rgba(90, 210, 255, " +
            particle.opacity +
            ")";


          ctx.fill();

        }
      );


      requestAnimationFrame(
        drawParticles
      );

    }


    drawParticles();

  }


  /* =====================================================
     3D CARD EFFECT
     ===================================================== */

  const cards =
    document.querySelectorAll(
      ".card, " +
      ".profile-card, " +
      ".about-box, " +
      ".project-info, " +
      ".callout, " +
      ".info-box, " +
      ".fun-card, " +
      ".fact"
    );


  cards.forEach(
    function (card) {

      card.style.setProperty(
        "--shine-x",
        "50%"
      );


      card.style.setProperty(
        "--shine-y",
        "50%"
      );


      if (
        !finePointer ||
        reduceMotion
      ) {
        return;
      }


      card.addEventListener(
        "pointermove",
        function (event) {

          const rect =
            card.getBoundingClientRect();


          const x =
            (
              event.clientX -
              rect.left
            ) / rect.width;


          const y =
            (
              event.clientY -
              rect.top
            ) / rect.height;


          const rotateX =
            (
              (0.5 - y) *
              5
            ).toFixed(2);


          const rotateY =
            (
              (x - 0.5) *
              5
            ).toFixed(2);


          card.style.transform =
            "perspective(900px) " +
            "rotateX(" +
            rotateX +
            "deg) " +
            "rotateY(" +
            rotateY +
            "deg) " +
            "translateY(-5px)";


          card.style.setProperty(
            "--shine-x",
            (x * 100) +
            "%"
          );


          card.style.setProperty(
            "--shine-y",
            (y * 100) +
            "%"
          );

        }
      );


      card.addEventListener(
        "pointerleave",
        function () {

          card.style.transform =
            "";

          card.style.setProperty(
            "--shine-x",
            "50%"
          );


          card.style.setProperty(
            "--shine-y",
            "50%"
          );

        }
      );

    }
  );


  /* =====================================================
     BUTTON MAGNET EFFECT
     ===================================================== */

  if (
    finePointer &&
    !reduceMotion
  ) {

    document
      .querySelectorAll(
        ".button, .small-button"
      )
      .forEach(
        function (button) {

          button.addEventListener(
            "pointermove",
            function (event) {

              const rect =
                button.getBoundingClientRect();


              const x =
                event.clientX -
                rect.left -
                rect.width / 2;


              const y =
                event.clientY -
                rect.top -
                rect.height / 2;


              button.style.transform =
                "translate(" +
                (x * 0.08) +
                "px," +
                (y * 0.08) +
                "px)";

            }
          );


          button.addEventListener(
            "pointerleave",
            function () {

              button.style.transform =
                "";

            }
          );

        }
      );

  }


  /* =====================================================
     CLICK SPARKS
     ===================================================== */

  function makeSpark(
    x,
    y
  ) {

    const spark =
      document.createElement(
        "span"
      );


    spark.className =
      "quinn-spark";


    spark.style.left =
      x + "px";


    spark.style.top =
      y + "px";


    const angle =
      Math.random() *
      Math.PI *
      2;


    const distance =
      25 +
      Math.random() *
      50;


    spark.style.setProperty(
      "--spark-x",
      (
        Math.cos(angle) *
        distance
      ) + "px"
    );


    spark.style.setProperty(
      "--spark-y",
      (
        Math.sin(angle) *
        distance
      ) + "px"
    );


    document.body.appendChild(
      spark
    );


    setTimeout(
      function () {

        spark.remove();

      },
      700
    );

  }


  document.addEventListener(
    "pointerdown",
    function (event) {

      const target =
        event.target.closest(
          "button, a, .card, " +
          ".fun-card, .fact"
        );


      if (!target) {
        return;
      }


      if (!finePointer) {
        return;
      }


      for (
        let i = 0;
        i < 6;
        i++
      ) {

        setTimeout(
          function () {

            makeSpark(
              event.clientX,
              event.clientY
            );

          },
          i * 25
        );

      }

    }
  );


  /* =====================================================
     RIPPLE EFFECT
     ===================================================== */

  document.addEventListener(
    "click",
    function (event) {

      const target =
        event.target.closest(
          ".button, " +
          ".small-button, " +
          ".card, " +
          ".fun-card, " +
          ".fact"
        );


      if (!target) {
        return;
      }


      if (
        getComputedStyle(
          target
        ).position ===
        "static"
      ) {
        target.style.position =
          "relative";
      }


      const rect =
        target.getBoundingClientRect();


      const size =
        Math.max(
          rect.width,
          rect.height
        );


      const ripple =
        document.createElement(
          "span"
        );


      ripple.className =
        "quinn-ripple";


      ripple.style.width =
        size + "px";


      ripple.style.height =
        size + "px";


      ripple.style.left =
        (
          event.clientX -
          rect.left -
          size / 2
        ) + "px";


      ripple.style.top =
        (
          event.clientY -
          rect.top -
          size / 2
        ) + "px";


      target.appendChild(
        ripple
      );


      setTimeout(
        function () {

          ripple.remove();

        },
        700
      );

    }
  );


  /* =====================================================
     SCROLL REVEAL
     ===================================================== */

  const revealElements =
    document.querySelectorAll(
      "main > section, " +
      ".hero-text, " +
      ".profile-card, " +
      "footer"
    );


  if (
    "IntersectionObserver" in window &&
    !reduceMotion
  ) {

    const revealObserver =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(
            function (entry) {

              if (
                !entry.isIntersecting
              ) {
                return;
              }


              entry.target.classList.add(
                "quinn-visible"
              );


              revealObserver.unobserve(
                entry.target
              );

            }
          );

        },
        {
          threshold: 0.08
        }
      );


    revealElements.forEach(
      function (element) {

        element.classList.add(
          "quinn-reveal"
        );


        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      function (element) {

        element.classList.add(
          "quinn-visible"
        );

      }
    );

  }


  /* =====================================================
     FX TOGGLE
     ===================================================== */

  const fxButton =
    document.getElementById(
      "quinnFxButton"
    );


  if (fxButton) {

    fxButton.addEventListener(
      "click",
      function () {

        const disabled =
          body.classList.toggle(
            "quinn-fx-off"
          );


        fxButton.textContent =
          disabled
            ? "⚪ FX"
            : "✨ FX";


        if (disabled) {

          quinnToast(
            "Visual effects paused"
          );

        } else {

          quinnToast(
            "Visual effects enabled ✨"
          );

        }

      }
    );

  }


  /* =====================================================
     KEYBOARD SHORTCUT
     E = FX
     ESC = TOP
     ===================================================== */

  document.addEventListener(
    "keydown",
    function (event) {

      const active =
        document.activeElement;


      const typing =
        active &&
        (
          active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          active.isContentEditable
        );


      if (
        !typing &&
        event.key.toLowerCase() === "e" &&
        fxButton
      ) {

        fxButton.click();

      }


      if (
        event.key === "Escape" &&
        topButton &&
        window.scrollY > 450
      ) {

        topButton.click();

      }

    }
  );


  /* =====================================================
     EASTER EGG
     CLICK QUINN LOGO 5 TIMES
     ===================================================== */

  const logo =
    document.querySelector(
      ".logo"
    );


  let logoClicks = 0;

  let logoTimer;


  if (logo) {

    logo.addEventListener(
      "click",
      function () {

        logoClicks++;


        clearTimeout(
          logoTimer
        );


        logoTimer =
          setTimeout(
            function () {

              logoClicks = 0;

            },
            1500
          );


        if (
          logoClicks === 5
        ) {

          logoClicks = 0;


          body.classList.add(
            "quinn-secret-mode"
          );


          quinnToast(
            "🚀 SECRET MODE ACTIVATED!"
          );


          setTimeout(
            function () {

              body.classList.remove(
                "quinn-secret-mode"
              );

            },
            3000
          );

        }

      }
    );

  }


  /* =====================================================
     WELCOME MESSAGE
     ===================================================== */

  setTimeout(
    function () {

      quinnToast(
        "Welcome to Quinn's portfolio 🚀"
      );

    },
    900
  );


})();
/* =========================================================
   QUINN MOUSE GLOW + TRAIL
   ========================================================= */

(function () {

  /* Create the big glow */

  const glow = document.createElement("div");

  glow.id = "mouseGlow";

  document.body.appendChild(glow);


  /* Create the cursor ring */

  const ring = document.createElement("div");

  ring.id = "mouseRing";

  document.body.appendChild(ring);


  /* Mouse position */

  let mouseX = 0;
  let mouseY = 0;

  let ringX = 0;
  let ringY = 0;


  /* -----------------------------------------
     MOUSE MOVEMENT
     ----------------------------------------- */

  document.addEventListener("mousemove", function (event) {

    mouseX = event.clientX;
    mouseY = event.clientY;


    /* Move glow */

    glow.style.left = mouseX + "px";
    glow.style.top = mouseY + "px";


    /* Create trail dot */

    const dot = document.createElement("div");

    dot.className = "mouseTrailDot";

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";


    document.body.appendChild(dot);


    /* Remove old dot */

    setTimeout(function () {

      dot.remove();

    }, 600);

  });


  /* -----------------------------------------
     SMOOTH RING
     ----------------------------------------- */

  function moveRing() {

    ringX += (mouseX - ringX) * 0.20;

    ringY += (mouseY - ringY) * 0.20;


    ring.style.left = ringX + "px";

    ring.style.top = ringY + "px";


    requestAnimationFrame(moveRing);

  }


  moveRing();


  /* -----------------------------------------
     BUTTON / LINK HOVER
     ----------------------------------------- */

  document.addEventListener("mouseover", function (event) {

    if (
      event.target.closest("a") ||
      event.target.closest("button") ||
      event.target.closest(".card") ||
      event.target.closest(".project") ||
      event.target.closest(".fun-card") ||
      event.target.closest(".fact")
    ) {

      ring.style.width = "50px";

      ring.style.height = "50px";

      ring.style.borderColor = "#ff4ecd";

      ring.style.boxShadow =
        "0 0 10px #ff4ecd," +
        "0 0 25px #9b5cff," +
        "0 0 45px #26d9ff";

    }

  });


  document.addEventListener("mouseout", function (event) {

    if (
      event.target.closest("a") ||
      event.target.closest("button") ||
      event.target.closest(".card") ||
      event.target.closest(".project") ||
      event.target.closest(".fun-card") ||
      event.target.closest(".fact")
    ) {

      ring.style.width = "32px";

      ring.style.height = "32px";

      ring.style.borderColor = "#26d9ff";

      ring.style.boxShadow =
        "0 0 10px #26d9ff," +
        "0 0 25px #26d9ff," +
        "0 0 40px #9b5cff";

    }

  });

})();