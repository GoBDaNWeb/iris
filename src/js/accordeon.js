function accordeon() {
  const accordion = document.querySelectorAll(".accordion");
  console.log(accordion);
  if (accordion) {
    const acc = () => {
      accordion.forEach((accordion) => {
        accordion.querySelectorAll(".accordion-item").forEach((item) => {
          window.addEventListener("resize", () => {
            item.style.maxHeight =
              item.querySelector(".accordion-title").scrollHeight + "px";
          });
          item.style.maxHeight =
            item.querySelector(".accordion-title").scrollHeight + "px";
          item.addEventListener("click", (event) => {
            if (event.target.classList.contains("accordion-title") || event.target.closest(".accordion-title")) {
              item.classList.toggle("active");
              window.addEventListener("resize", () => {
                if (item.classList.contains("active")) {
                  // item.style.maxHeight = item.scrollHeight + "px";
                  item.style.maxHeight =
                    item.querySelector(".accordion-body").scrollHeight +
                    110 +
                    item.querySelector(".accordion-title").scrollHeight +
                    "px";
                } else {
                  item.style.maxHeight =
                    item.querySelector(".accordion-title").scrollHeight + "px";
                }
              });
              if (item.classList.contains("active")) {
                // item.style.maxHeight = item.scrollHeight + "px";
                item.style.maxHeight =
                  item.querySelector(".accordion-body").scrollHeight +
                  110 +
                  item.querySelector(".accordion-title").scrollHeight +
                  "px";
              } else {
                item.style.maxHeight =
                  item.querySelector(".accordion-title").scrollHeight + "px";
              }
            }
          });
        });
      });
    };
    acc();
  }
};

accordeon();