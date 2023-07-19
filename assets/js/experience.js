AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Machine Learning Engineer",
    cardImage: "assets/images/experience-page/zhongyuan.webp",
    place: "Zhongyuan Consumer Finance",
    time: "(Sep, 2021 - Aug, 2023)",
    desp: "Applied and customized machine learning algorithms to analyze, track and forecast user behavior, effectively addressing advertising & marketing challenges. This involved tasks such as scorecard development, user responses prediction, advertise frequency controlling modeling, bidding analysis, uplift modeling, and utilizing transfer learning algorithm to predict potential target customers, etc.",
  },
  {
    title: "Data Scientist",
    cardImage: "assets/images/experience-page/chief.webp",
    place: "ChiefClouds",
    time: "(Mar - Sep, 2021)",
    desp: "Conducted comprehensive customer analytics, including business analysis, preliminary modeling, and interpretation of statistical outputs, resulting in effective growth strategies and targeted advertising recommendations.",
  },
  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/metrodata.jpeg",
    place: "MetroDataTech",
    time: "(Sep, 18 - Mar, 21)",
    desp: "Developed data-driven metrics, interactive dashboards, and predictive modeling, for government programs utilizing visualization and analytics tools.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  // {
  //   title: "GirlScript Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/1.jpg",
  //   description:
  //     "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Road Safety and Traffic Accidents in London",
    subtitle: "CUSP  London Data Dive 2018",
    image: "assets/images/experience-page/cusp.jpeg",
    desp: "Used data analysis skills and machine learning models (Random Forest model and logistic regression) to better understand what causes accidents, and how to prevent them.",
    href: "http://london.worldmapper.org/",
  },
  {
    title: "London Air Spatial-Temporal Variability Tool",
    subtitle: "University College London",
    image: "assets/images/experience-page/mapper.png",
    desp: "Developed a mapping tool that quickly discovers which boroughs in London have the most serious air pollution problems and when they occur by using the spatial interpolation skills.",
    href: "https://cp.catapult.org.uk/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
