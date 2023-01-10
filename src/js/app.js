import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  const body = document.querySelector("body");
  body.addEventListener("click", () => {
    var body=document.querySelector('body');
        for (var i=1; i<6;i++){
          var article = document.createElement("article")
          article.textContent = "message " + i;
          article.setAttribute("class", "message");
          body.appendChild(article);
        }
  });
});
