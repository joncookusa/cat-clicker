class Cat {
    constructor(name, img) {
        this.name = name;
        this.numberOfClicks = 0;
        this.img = img;
    }
}

class Model {
    cats = [];
    currentCat;

    add(cat) {
        this.cats.push(new Cat(cat.name, cat.img));
    }
}

class Controller {

    model = new Model();
    viewList = new ViewList(this);
    viewCat = new ViewCat(this);
    viewAdmin = new ViewAdmin(this);

    init(cats) {
        cats.forEach((cat) => {
            this.model.add(cat);
        });
        this.setCurrentCat(this.model.cats[0]);
        this.updateCat();
    }

    getCats() {
        return this.model.cats;
    }

    getCurrentCat() {
        return this.model.currentCat;
    }

    setCurrentCat(cat) {
        this.model.currentCat = cat;
        this.viewCat.render();
        this.closeViewAdminForm();
    }

    closeViewAdminForm() {
        if (this.viewAdmin.adminOpen) {
            this.viewAdmin.closeForm();
        }
    }

    showViewAdminForm() {
        if (!this.viewAdmin.adminOpen) {
            ViewAdmin.render();
            this.viewAdmin.showForm();
        }
    }

    clickedCat() {
        this.model.currentCat.numberOfClicks++;
        this.viewCat.render(this.model.currentCat);
        this.closeViewAdminForm();
    }



    updateCat() {
        this.viewList.render();
        this.viewCat.render();

    }
}

class ViewList {

    controller;

    constructor(controller) {
        this.controller = controller;
    };

    render() {
        let catList = document.getElementById('cat-list');
        catList.innerHTML = '';
        controller.getCats().forEach((cat) => {
            let li = document.createElement("LI");
            li.innerText = cat.name;
            li.addEventListener('click', ((cat) => {
                return function() {
                    controller.setCurrentCat(cat);
                };
            })(cat));
            catList.appendChild(li);
        });
    }
}

class ViewCat {

    constructor(controller) {
        this.controller = controller;
        document.getElementById('cat-image').addEventListener('click', (event) => {
            this.controller.clickedCat();
        });
    }

    render() {
        let cat = this.controller.getCurrentCat();
        document.getElementById('cat-image').setAttribute('src',cat.img);
        document.getElementById('cat-name').innerText = cat.name;
        document.getElementById('number-of-clicks').innerText = `Number of clicks : ${cat.numberOfClicks}`;
    }

}

class ViewAdmin {

    static render() {
        document.getElementById('name').value = controller.getCurrentCat().name;
        document.getElementById('imageurl').value = controller.getCurrentCat().img;
        document.getElementById('clicks').value = controller.getCurrentCat().numberOfClicks;
    }

    constructor(controller) {
        this.controller = controller;
        this.adminOpen = false;
        this.adminForm = document.getElementById('admin-form');
        document.getElementById('admin-button').addEventListener('click', () => {
            this.controller.showViewAdminForm();
        });
        document.getElementById('save').addEventListener('click', () => {
            this.controller.getCurrentCat().name = document.getElementById('name').value;
            this.controller.getCurrentCat().img = document.getElementById('imageurl').value;
            this.controller.getCurrentCat().numberOfClicks = document.getElementById('clicks').value;
            this.controller.updateCat();
            this.controller.closeViewAdminForm();
        });

        document.getElementById('cancel').addEventListener('click', () => {
            this.controller.closeViewAdminForm();
        });
    }

    closeForm() {
        this.adminForm.classList.remove('show');
        this.adminForm.classList.add('hidden');
        this.adminOpen = false;
    }

    showForm() {
        this.adminForm.classList.remove('hidden');
        this.adminForm.classList.add('show');
        this.adminOpen = true;
    }

}

controller = new Controller();
controller.init([{name: "Sabre", img: "images/cat.jpg"},{name: "Viper", img : "images/cat2.png"},{name: "Satan", img: "images/cat3.png"},{name: "Killer", img: "images/cat4.png"},{name: "Titan", img: "images/cat5.png"},{name: "Cassius", img: "images/cat2.png"}]);
