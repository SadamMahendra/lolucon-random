const jokeContainer = document.querySelector("#lolucon");
const btn = document.querySelector("#btn");
const url = "https://candaan-lrh1exyfh-ardhptr21.vercel.app/api/text";

let getjoke = async function () {
  let jokeRandom = Math.trunc(Math.random() * 101);
  jokeContainer.classList.remove("fade");

  const api = await fetch(url);
  const data = await api.json();
  console.log(data.data.length);
  jokeContainer.textContent = `${data.data[jokeRandom]}`;
  jokeContainer.classList.add("fade");
};

btn.addEventListener("click", getjoke);
