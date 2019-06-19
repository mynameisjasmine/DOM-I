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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};





// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// The images
let cta = document.getElementById('cta-img');
cta.src = siteContent['cta']['img-src']

let middlePic = document.getElementById('middle-img');
middlePic.src = siteContent['main-content']['middle-img-src']


//Content
let refLinks = document.querySelectorAll('a');
refLinks[0].textContent = siteContent['nav']['nav-item-1']
refLinks[1].textContent = siteContent['nav']['nav-item-2']
refLinks[2].textContent = siteContent['nav']['nav-item-3']
refLinks[3].textContent = siteContent['nav']['nav-item-4']
refLinks[4].textContent = siteContent['nav']['nav-item-5']
refLinks[5].textContent = siteContent['nav']['nav-item-6']
refLinks[0].style.color = 'green';
refLinks[1].style.color = 'green';
refLinks[2].style.color = 'green';
refLinks[3].style.color = 'green';
refLinks[4].style.color = 'green';
refLinks[5].style.color = 'green';

//Headers
let awesomeDom = document.getElementById('h1');
awesomeDom.textContext = siteContent['cta']['h1']


//Button
let startButton = document.getElementById('button');
startButton.textContent = siteContent['cta']['button']

let h4Headers = document.querySelectorAll('h4');
h4Headers[0].textContent = siteContent['main-content']['features-h4']
h4Headers[1].textContent = siteContent['main-content']['about-h4']
h4Headers[2].textContent = siteContent['main-content']['services-h4']
h4Headers[3].textContent = siteContent['main-content']['product-h4']
h4Headers[4].textContent = siteContent['main-content']['vision-h4']
h4Headers[5].textContent = siteContent['contact']['contact-h4']

//Content
let mainContent = document.querySelectorAll('content');
mainContent[0].textContent = siteContent['main-content']['features-content']
mainContent[1].textContent = siteContent['main-content']['about-content']
mainContent[2].textContent = siteContent['main-content']['services-content']
mainContent[3].textContent = siteContent['main-content']['product-content']
mainContent[4].textContent = siteContent['main-content']['vision-content']

