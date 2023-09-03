// creating navbar
const create_Navbar = document.createElement("nav");
create_Navbar.className = "navbar";
console.log(create_Navbar);
document.body.appendChild(create_Navbar);

// creating div inside the navbar for logo
const logo_div = document.createElement("div");
logo_div.id = "logo_Div";
logo_div.innerHTML = `<img src="images/Enayatlogo.png" alt="">`;
create_Navbar.appendChild(logo_div);

// creating div for the links in the navbar
// creating an array of links
const all_links = [
  { name: "HOME", url: "#" },
  { name: "ABOUT", url: "#about" },
  { name: "CONTACT", url: "#contact" },
  { name: "PORTFOLIO", url: "#portfolio" },
];

// creating div for the links in the navbar
const create_linksDiv = document.createElement("div");
create_linksDiv.id = "links_div";
// create_linksDiv.innerHTML
create_Navbar.appendChild(create_linksDiv);

// creating the <ul> element for navbar links
const links_list = document.createElement("ul");
links_list.className = "ul_list";
create_linksDiv.appendChild(links_list);

all_links.forEach((link) => {
  const list_item = document.createElement("li");
  list_item.addEventListener("click", function (event) {
    event.preventDefault();
    alert(`clicked on: ${link.name}`);
  });

  const anchor = document.createElement("a");
  anchor.href = link.url;
  anchor.textContent = link.name;

  list_item.appendChild(anchor);
  links_list.appendChild(list_item); // checking
});

// **** creating hamburger in navbar
const hamburger = document.createElement("div");
hamburger.id = "hamburger";
hamburger.innerHTML = `
<span class="bar-1"></span>
<span class="bar-2"></span>
<span class="bar-3"></span>`;
create_Navbar.appendChild(hamburger);

var isOpen = false; // boolean  true / false

hamburger.onclick = function () {
  hamburger.classList.toggle("openMenu");

  if (isOpen) {
    isOpen = false;
    create_linksDiv.id = "links_div";
  } else {
    create_linksDiv.id = "links_divShow";

    isOpen = true;
  }
};

// hamburger.addEventListener("click", () => {
//   if (isOpen) {
//     isOpen = false;
//     create_linksDiv.id = "links_div";
//     // hamburger.innerHTML = `
//     //   <span class="bar"></span>
//     //   <span class="bar"></span>
//     //   <span class="bar"></span>`;
//     // create_Navbar.appendChild(hamburger);
//   } else {
//     create_linksDiv.id = "links_divShow";
//     // hamburger.innerHTML = `
//     //   <span id='rotate-bar-1'></span>
//     //   <span id='rotate-bar-2'></span>`;
//     // create_Navbar.appendChild(hamburger);
//     isOpen = true;
//   }
// });

// the body section
// creating a div in which  a image div and text div will be created
const container_div = document.createElement("div");
container_div.id = "container";
document.body.appendChild(container_div);

// creating a div for image
const image_div = document.createElement("div");
image_div.id = "imageDiv";
container_div.appendChild(image_div);
// creating a image element
const my_image = document.createElement("img");
// my_image.src = "images/wallpaperflare.com_wallpaper.jpg";
my_image.src = "images/emojii.gif";
image_div.appendChild(my_image);

// creating a div for profile section
const profile_div = document.createElement("div");
profile_div.id = "profileDiv";
container_div.appendChild(profile_div);

// create div for name section in the profile section
const name_div = document.createElement("div");
name_div.id = "nameDiv";
name_div.innerHTML = `<h3>ENAYATULLAH</h3>`;
profile_div.appendChild(name_div);

// create div for about section in the profile section
const about_div = document.createElement("div");
about_div.id = "aboutDiv";
about_div.innerHTML = `
    <p>👨‍💻 Coding Enthusiast | 📚 Student | 🌐 Web Development Enthusiast | Studying CSE at Sister Nivedita University 🎓 | Based in Kolkata 🏠.</p>
    <p>Aspiring coder experienced in C, HTML, and CSS, currently mastering JavaScript.</p>
`;
profile_div.appendChild(about_div);

// **********
// making footer ***************

var socialMedia_links = [
  {
    image: "images/facebook icon.webp",
    url: "https://www.facebook.com/enayat.bhai.73",
  },
  {
    image: "images/insta icon.png",
    url: "https://www.instagram.com/enayatullah0786/",
  },
  {
    image: "images/twitter icon.png",
    url: "https://twitter.com/Enayatulla76941",
  },
  {
    image: "images/youtube icon.png",
    url: "https://www.youtube.com/channel/UCSNazIMeRMgV02mhgvnuZHA",
  },
];

function create_footer() {
  const footer = document.createElement("div");
  footer.id = "footer";
  document.body.appendChild(footer);

  // creating a div in footer for links
  const socialMedia = document.createElement("div");
  socialMedia.id = "socialMedia";
  footer.appendChild(socialMedia);

  //   creating div in socialMedia for text
  const text_footer = document.createElement("div");
  text_footer.id = "footer_text";
  text_footer.innerHTML = `<p>Connect With Me: </p>`;
  socialMedia.appendChild(text_footer);

  //   creating div in socialMedia for social media links
  const socialMedia_elements = document.createElement("div");
  socialMedia_elements.id = "socialMedia_div";
  socialMedia.appendChild(socialMedia_elements);

  socialMedia_links.forEach((mediaLink) => {
    const footerAnchor = document.createElement("a");
    footerAnchor.href = mediaLink.url;

    const footerImage = document.createElement("img");
    footerImage.src = mediaLink.image;

    footerAnchor.appendChild(footerImage);
    socialMedia_elements.appendChild(footerAnchor);
  });

  // creating div in footer for copyright
  const copyright_div = document.createElement("div");
  copyright_div.id = "copyright_div";
  footer.appendChild(copyright_div);
  copyright_div.innerHTML = `<p>© 2023 Enayat. All Rights Reserved.</p>`;
}
create_footer();
