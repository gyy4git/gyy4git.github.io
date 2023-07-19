/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Spatial-Temporal Analysis of Human Dynamics Based on Visual Surveillance Video Stream",
    authors:
      "Yiyang Gu",
    conferences:
      "",
    researchYr: 2018,
    citebox: "",
    image: "assets/images/research-page/detection.png",
    citation: { },
    abstract:
      "This research intends to provide an efficient and effective approach to visualize the motion pattern of pedestrians and crowds directly from the untreated surveillance video. A good understanding of the crowd motion pattern can help the user of a surveillance system to save more time and energy to abstract the useful information from the video. In this dissertation, the researcher proposes a surveillance system which processes the raw video with an existing object detection and tracking algorithm.",
    absbox: "",
  },

  {
    title: "What are the most important factors that influence changes in London Real Estate Prices? How to quantify them?",
    authors:
      "Yiyang Gu",
    conferences:
      "Journal of Economics Bibliography Vol 5, No 1 (2018)",
    researchYr: 2018,
    citebox: "",
    image: "assets/images/research-page/house.png",
    citation: {},
    abstract:
      "",
    absbox: "",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
