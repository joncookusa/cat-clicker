const CatClicker = (() => {
    class cat {

        constructor(name, img) {
            this.name = name;
            this.numberOfClicks = 0;
            this.img = img;
        }
    }

    function init(cats) {

        let catList = document.getElementById('cat-list');

        // We need to loop thru the cats and add the cat name to a list item
        let catsListHTML = "";
        cats.forEach((cat) => {
            let li = document.createElement("LI");
            li.innerText = cat.name;
            li.addEventListener('click', () => {
                let catImage = document.getElementById('cat-image');
                catImage.setAttribute('src',cat.img);
                catImage.setAttribute('data-name',cat.name);
                let catName = document.getElementById('cat-name');
                catName.innerText = cat.name;
                let numberOfClicks = document.getElementById('number-of-clicks');
                numberOfClicks.innerText = `Number of clicks : ${cat.numberOfClicks}`;
            });
            catList.appendChild(li);
        });

        document.getElementById('cat-image').addEventListener('click', (event) => {
            let cat = cats.find((cat) => cat.name === event.target.dataset.name);
            cat.numberOfClicks ++;
            let numberOfClicks = document.getElementById('number-of-clicks');
            numberOfClicks.innerText = `Number of clicks : ${cat.numberOfClicks}`;
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

let cats = [CatClicker.cat("Sabre", "images/cat.jpg"), CatClicker.cat("Viper", "images/cat2.png"), CatClicker.cat("Killer", "images/cat3.png"), CatClicker.cat("Titan", "images/cat4.png"), CatClicker.cat("Satan", "images/cat5.png")];

CatClicker.init(cats);


