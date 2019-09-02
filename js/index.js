const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.querySelectorAll("nav a");
//console.log(links);
links[0].innerHTML = siteContent['nav']['nav-item-1'];
links[1].innerHTML = siteContent['nav']['nav-item-2'];
links[2].innerHTML = siteContent['nav']['nav-item-3'];
links[3].innerHTML = siteContent['nav']['nav-item-4'];
links[4].innerHTML = siteContent['nav']['nav-item-5'];
links[5].innerHTML = siteContent['nav']['nav-item-6'];




links[0].style.color = "green";
links[1].style.color = "green";
links[2].style.color = "green";
links[3].style.color = "green";
links[4].style.color = "green";
links[5].style.color = "green";






let cta = document.querySelector('h1')
cta.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent['cta']['button'];

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent['cta']['img-src']);

let mainContent = document.querySelectorAll(".text-content");
//console.log(mainContent);
mainContent[0].getElementsByTagName("h4")[0].innerHTML = siteContent['main-content']['features-h4'];
mainContent[0].getElementsByTagName("p")[0].innerHTML = siteContent['main-content']['features-content'];
mainContent[1].getElementsByTagName("h4")[0].innerHTML = siteContent['main-content']['about-h4'];
mainContent[1].getElementsByTagName("p")[0].innerHTML = siteContent['main-content']['about-content'];

mainContent[2].getElementsByTagName("h4")[0].innerHTML = siteContent['main-content']['services-h4'];
mainContent[2].getElementsByTagName("p")[0].innerHTML = siteContent['main-content']['services-content'];

mainContent[3].getElementsByTagName("h4")[0].innerHTML = siteContent['main-content']['product-h4'];
mainContent[3].getElementsByTagName("p")[0].innerHTML = siteContent['main-content']['product-content'];

mainContent[4].getElementsByTagName("h4")[0].innerHTML = siteContent['main-content']['vision-h4'];
mainContent[4].getElementsByTagName("p")[0].innerHTML = siteContent['main-content']['vision-content'];


let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contactsList = document.getElementsByClassName("contact");
contactsList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"];
contactsList[0].getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
contactsList[0].getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"];
contactsList[0].getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"];


// Task 3 adding two new items to nav bar using .appendChild and .prepend
let newLink = document.createElement("a");
newLink.textContent = 'Forum';
linksTwo = document.querySelector("nav a")

linksTwo.appendChild(newLink);
newLink.style.color = "red";
newLink.style.marginLeft = "19px";

let newerLink = document.createElement("a")
newerLink.textContent = "Interviews";
linksTwo.prepend(newerLink);
newerLink.style.color = "red";
newerLink.style.marginRight = "19px";


let footer = document.querySelector("footer");
footer.innerHTML = siteContent['footer']['copyright'];

