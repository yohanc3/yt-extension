import "./style.css";
import logo from "@/assets/yt-steroids.png";
import { setupCounter } from "@/components/counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://wxt.dev" target="_blank" class="logo-container">
      <img src="${logo}" class="logo" alt="YT Sub Steroids logo" />
    </a>
    <h1>YT Sub Steroids</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

console.log("this ran");

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
