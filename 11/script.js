const email = document.querySelector("#email")
const span = document.querySelector(".erro")
const regExpEmail = /(\w+@)([\w.]+)/g

function handleKey() {
  const emailnovo = email.value
  if (emailnovo.search(regExpEmail) != -1) {
    console.log(emailnovo)
    email.classList.remove("ativo")
    span.classList.remove("ativo")
  } else {
    email.classList.add("ativo")
    span.classList.add("ativo")
  }
}

email.addEventListener("change", handleKey)

function togglePassword() {
  document.querySelectorAll(".eye").forEach((eye) => {
    eye.classList.toggle("hide")
  })

  const type = senha.getAttribute("type") === "password" ? "text" : "password"
  senha.setAttribute("type", type)
}
