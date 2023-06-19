//Footer leading to github page.

const Footer = () => {
  const content = document.getElementById("container");

  const footer = document.createElement("div");
  footer.id = "footer";
  content.appendChild(footer);

  const link = document.createElement("a");
  link.id = "github-link";
  link.href = "https://github.com/uwuzumaki/top-weather-app";
  footer.appendChild(link);

  const logo = document.createElement("img");
  logo.id = "github-img";
  logo.alt = "github logo";
  logo.src = "/Modules/Footer/github-dark.png";
  link.appendChild(logo);

  const githubAccount = document.createElement("p");
  githubAccount.innerHTML = "uwuzumaki";
  link.appendChild(githubAccount);
};

export default Footer;
