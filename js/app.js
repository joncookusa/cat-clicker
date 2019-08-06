const CatClicker = (() => {
    class cat {

        constructor(name, img) {
            this.name = name;
            this.numberOfClicks = 0;
            this.img = img;
        }

        generateCatHTML() {
            return `<div class="box">
    <p>${this.name}</p>
    <img  id="${this.name}" src="${this.img}">
    <p id="${this.name}Clicks">Number of clicks : ${this.numberOfClicks}</p>
</div>`;
        }


    }

    function init(cats) {


        let container = document.querySelector('.container');
        let catsHTML = "";
        cats.forEach((cat) => {
            catsHTML += cat.generateCatHTML();
        });
        container.innerHTML = catsHTML;

        // Add click listeners
        cats.forEach((cat) => {
            document.getElementById(`${cat.name}`).addEventListener('click', () => {
                cat.numberOfClicks ++;
                document.getElementById(`${cat.name}Clicks`).innerText = `Number of clicks : ${cat.numberOfClicks}`
            });
        });
    }

    return {
        init: (cats) => {
            init(cats);
        },
        cat: (name, img) => {
            return new cat(name, img);
        }
    };
})();

let catOne = CatClicker.cat("Sabre", "images/cat.jpg");
let catTwo = CatClicker.cat("Viper", "images/cat2.png");
let catThree = CatClicker.cat("Killer", "images/cat2.png");
let cats = [];
cats.push(catOne);
cats.push(catTwo);
cats.push(catThree);

CatClicker.init(cats);
