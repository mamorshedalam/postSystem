import sharePost from "./Functions/SharePost";
import toggleForm from "./Functions/ToggleForm";
// HTML ELEMENTS
const formCloseBtn = document.getElementById(
  "x-formClose"
) as HTMLButtonElement;
const formOpenBtn = document.getElementById("x-formOpen") as HTMLButtonElement;
const postForm = document.getElementById("x-form") as HTMLFormElement;
// EVENT LISTENER
formCloseBtn.addEventListener("click", toggleForm);
formOpenBtn.addEventListener("click", toggleForm);
postForm.addEventListener("submit", sharePost);
