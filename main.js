const buttonSwitch = document.querySelector('#switch');
const themeLink = document.querySelector('link[href="./styles/light.css"]');

buttonSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  buttonSwitch.classList.toggle('active');
  themeLink.href = document.body.classList.contains('dark') ? './styles/dark.css' : './styles/light.css';

  //Changing the github Logo
  let githubImages = document.querySelectorAll('img[src="./assets/Logo_Github.png"],img[src="./assets/Logo_GithubWhite.png"]');
  for (let i = 0; i < githubImages.length; i++) {
    githubImages[i].src = document.body.classList.contains('dark') ? "./assets/Logo_GithubWhite.png" : "./assets/Logo_Github.png";
  }
});