const formSection = document.getElementById("x-formSection") as HTMLDivElement;

export default function toggleForm(this: HTMLButtonElement): void {
  if (formSection.style.display === "block") {
    formSection.style.display = "none";
  } else {
    formSection.style.display = "block";
  }
}
