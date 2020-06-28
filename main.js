let coin = {
    state: 0,
    flip: function() {
       return this.state = Math.round(Math.random() *1)
      
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },

    toString: function() {
        return this.state === 0 ? "Heads" : "Tails"

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },

    toHTML: function() {
        let image = document.createElement('img');
        image.style.width = "300px"
        image.style.height = "300px"
       
        if (this.state === 0) {
            image.src = "https://www.dhresource.com/0x0s/f2-albu-g4-M01-CB-6B-rBVaEFf172SADIH4AAxRIyzuR3s387.jpg/united-states-of-america-coins-liberty-head.jpg"
        }

        else {
            image.src = "https://www.englishexercises.org/makeagame/my_documents/my_pictures/2012/apr/A63_nickel-coin-tail.jpg"
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

        return document.body.append(image);   
    }
};

function display20Flips() {
    for (let counter = 0; counter <= 20; counter++) {
        let textBox = document.createElement('p')
        textBox.style.margin = "15px"
        textBox.style.color= "White"
        coin.flip()
        textBox.append(coin.toString())
        document.body.append(textBox)
        }
        return console.log("Flips")
    }
    


function display20Images() {
    for (let counter = 0; counter <= 20; counter++) {
        coin.flip()
        coin.toHTML()
       
    }
}

display20Flips()

display20Images()