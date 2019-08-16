# Cat Clicker Project

### Reasoning
The cat clicker is an example project to demonstrate separations of concerns in the Javascript programming language. The concerns being a model, view and 
octopus (or controller, or what ever "middle man" name you would like to use). The applications separates these concerns in the app.js 
file, to make the application more scalable and maintainable as the requirements change.

### Functionality

The desired functionality was to create an application with a master list of cats. When the user clicks on the cats name,
an image displaying the cat would be rendered, along with a count of the amount of times the cat image has been clicked.
Clicking on the cat image would increment the click count for that particular cat, and the count would be persisted even
when the user chose another cat.

### Concerns

The model stores a list of cats along with the current cat, and a method to add additional cats. The list view and cat view
are responsible for rendering the list and cats, and also for setting up and detecting the various user clicks. The controller
ties the model and views together.

###Installing
To install the Cat Clicker, you will need to ensure that git is installed on your computer. If you don't have git, follow the instructions at...

    https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
Once git is installed, open a command line or terminal window and navigate to a folder where you want to install the project. Then clone the project by entering...

    git clone https://github.com/joncookusa/cat-clicker.git
Once the project has been copied to your install folder, simply open the index.html file to use cat clicker.

###Dependencies
The game is built using HTML5, CSS and Javascript. There are no other dependencies. 
