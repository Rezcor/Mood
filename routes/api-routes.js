// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  console.log(db.Moods)
  app.post("/", function (req, res) {
    db.Strains.bulkCreate([{ id: 1, name: 'OG Kush', strain: 'indica' },
    { id: 2, name: 'Grandaddy Purple', strain: 'indica' }
      , { id: 3, name: 'Northern Lights', strain: 'indica' }
      , { id: 4, name: 'Bubba Kush', strain: 'indica' }
      , { id: 5, name: 'Purple Kush', strain: 'indica' }
      , { id: 6, name: 'Gods Gift', strain: 'indica' }
      , { id: 7, name: 'La Confidential', strain: 'indica' }
      , { id: 8, name: 'Platinum OG', strain: 'indica' }
      , { id: 9, name: 'BlackWater', strain: 'indica' }
      , { id: 10, name: 'MK Ultra', strain: 'indica' }
      , { id: 11, name: 'Blue Skittlez', strain: 'indica' }
      , { id: 12, name: 'SkyWalker OG', strain: 'indica' }
      , { id: 13, name: 'Afghan Kush', strain: 'indica' }
      , { id: 14, name: 'Death Star', strain: 'indica' }
      , { id: 15, name: 'Purple Urkle', strain: 'indica' }
      , { id: 16, name: 'White Rhino', strain: 'indica' }
      , { id: 17, name: 'G13', strain: 'indica' }
      , { id: 18, name: 'Mr.Nice', strain: 'indica' }
      , { id: 19, name: 'Platinum OG', strain: 'indica' }
      , { id: 20, name: 'Do-Si-Dos', strain: 'indica' }
      , { id: 21, name: 'True OG', strain: 'indica' }
      , { id: 22, name: 'Cookies', strain: 'indica' }
      , { id: 23, name: 'XXX OG', strain: 'indica' }
      , { id: 24, name: 'SuperMan OG', strain: 'indica' }
      , { id: 25, name: 'Black Mamba', strain: 'indica' }
      , { id: 26, name: 'Abusive OG', strain: 'indica' }
      , { id: 27, name: 'Alien Kush', strain: 'indica' }
      , { id: 28, name: 'WaterMelon', strain: 'indica' }
      , { id: 29, name: 'A-10', strain: 'indica' }
      , { id: 30, name: 'Blue Mystic', strain: 'indica' }
      , { id: 31, name: 'SoMango', strain: 'indica' }
      , { id: 32, name: '3x Crazy', strain: 'indica' }
      , { id: 33, name: 'Purple Punch', strain: 'indica' }
      , { id: 34, name: 'Afghani BullRider', strain: 'indica' }
      , { id: 35, name: 'Blue Diamond', strain: 'indica' }
      , { id: 36, name: 'Phantom OG', strain: 'indica' }
      , { id: 37, name: 'StrawBerry CheeseCake', strain: 'indica' }
      , { id: 38, name: 'Dynamite OG', strain: 'indica' }
      , { id: 39, name: 'SilverBack OG', strain: 'indica' }
      , { id: 40, name: 'Black Cherry Og', strain: 'indica' }
      , { id: 41, name: 'Recon', strain: 'indica' }
      , { id: 42, name: 'White Kush', strain: 'indica' }
      , { id: 43, name: 'God Berry ', strain: 'indica' }
      , { id: 44, name: '', strain: 'indica' }
      , { id: 45, name: 'Blue knight', strain: 'indica' }
      , { id: 46, name: 'Blue Moonshine ', strain: 'indica' }
      , { id: 47, name: 'Cactus', strain: 'indica' }
      , { id: 48, name: 'Papaya', strain: 'indica' }
      , { id: 49, name: 'Shark Shock', strain: 'indica' }
      , { id: 50, name: 'Purple Candy', strain: 'indica' }
      , { id: 51, name: 'Star Killer', strain: 'indica' }
      , { id: 52, name: 'Tangerine Kush', strain: 'indica' }
      , { id: 53, name: 'Alien Dawg', strain: 'indica' }
      , { id: 54, name: 'Pitbull', strain: 'indica' }
      , { id: 55, name: 'Mars OG', strain: 'indica' }
      , { id: 56, name: 'YumBolt', strain: 'indica' }
      , { id: 57, name: 'White OG', strain: 'indica' }
      , { id: 58, name: 'Bubbas Gift', strain: 'indica' }
      , { id: 59, name: 'Grimace', strain: 'indica' }
      , { id: 60, name: 'Emerald OG', strain: 'indica' }
      , { id: 61, name: 'Forbidden Fruit', strain: 'indica' }
      , { id: 62, name: 'Pink Champagne', strain: 'indica' }
      , { id: 63, name: 'Dr.Funk', strain: 'indica' }
      , { id: 64, name: 'Chem Scout', strain: 'indica' }
      , { id: 65, name: 'Gelato', strain: 'indica' }
      , { id: 66, name: 'Sunset Sherbert', strain: 'indica' }
      , { id: 67, name: 'Blue Dream', strain: 'hybrid' },
    { id: 68, name: 'Pineapple Express', strain: 'hybrid' },
    { id: 69, name: 'White Widow', strain: 'hybrid' },
    { id: 70, name: 'Lemon Kush', strain: 'hybrid' },
    { id: 71, name: 'Alien OG', strain: 'hybrid' },
    { id: 72, name: 'Banana Kush', strain: 'hybrid' },
    { id: 73, name: 'Sour OG', strain: 'hybrid' },
    { id: 74, name: 'Purple Diesel', strain: 'hybrid' },
    { id: 75, name: 'Orange Kush', strain: 'hybrid' },
    { id: 76, name: 'The White', strain: 'hybrid' },
    { id: 77, name: 'Orange Cookies', strain: 'hybrid' },
    { id: 78, name: 'Blue Haze', strain: 'hybrid' },
    { id: 79, name: 'Red Dragon', strain: 'hybrid' },
    { id: 80, name: '3 Kings', strain: 'hybrid' },
    { id: 81, name: 'Nebula', strain: 'hybrid' },
    { id: 82, name: 'Phantom Cookies', strain: 'hybrid' },
    { id: 83, name: 'Bio Diesel', strain: 'hybrid' },
    { id: 84, name: 'Sour Apple', strain: 'hybrid' },
    { id: 85, name: 'AK-47', strain: 'hybrid' },
    { id: 86, name: 'Train Wreck', strain: 'hybrid' },
    { id: 87, name: 'Head Band', strain: 'hybrid' },
    { id: 88, name: 'Agent Orange', strain: 'hybrid' },
    { id: 89, name: 'Tahoe OG Kush', strain: 'hybrid' },
    { id: 90, name: 'Cherry Pie', strain: 'hybrid' },
    { id: 91, name: 'Fire OG', strain: 'hybrid' },
    { id: 92, name: 'Animal Cookies', strain: 'hybrid' },
    { id: 93, name: 'White Fire OG', strain: 'hybrid' },
    { id: 94, name: 'Bruce Banner', strain: 'hybrid' },
    { id: 95, name: 'Cotten Candy ', strain: 'hybrid' },
    { id: 96, name: 'CannaTonic', strain: 'hybrid' },
    { id: 97, name: 'Chernobyl', strain: 'hybrid' },
    { id: 98, name: 'Thin Mint GSC', strain: 'hybrid' },
    { id: 99, name: 'ACDC', strain: 'hybrid' },
    { id: 100, name: 'Sour OG', strain: 'hybrid' },
    { id: 101, name: 'Juicy Fruit', strain: 'hybrid' },
    { id: 102, name: 'Holy Grail Kush', strain: 'hybrid' },
    { id: 103, name: 'Purple Train Wreck', strain: 'hybrid' },
    { id: 104, name: 'UK Cheese', strain: 'hybrid' },
    { id: 105, name: 'Blue Diesel', strain: 'hybrid' },
    { id: 106, name: 'Lemon Diesel', strain: 'hybrid' },
    { id: 107, name: 'Flo', strain: 'hybrid' },
    { id: 108, name: 'J1', strain: 'hybrid' },
    { id: 109, name: 'White Russian', strain: 'hybrid' },
    { id: 110, name: 'Snow Cap', strain: 'hybrid' },
    { id: 111, name: 'Cookies and Cream', strain: 'hybrid' },
    { id: 112, name: 'Ghost OG', strain: 'hybrid' },
    { id: 113, name: 'Star Dawg', strain: 'hybrid' },
    { id: 114, name: 'Khalifa Kush', strain: 'hybrid' },
    { id: 115, name: 'Dead Head OG', strain: 'hybrid' },
    { id: 116, name: 'Jack Frost', strain: 'hybrid' },
    { id: 117, name: 'Blue Widow', strain: 'hybrid' },
    { id: 118, name: 'PermaFrost', strain: 'hybrid' },
    { id: 119, name: 'Snoops Dream', strain: 'hybrid' },
    { id: 120, name: '707 Head Band', strain: 'hybrid' },
    { id: 121, name: 'Red Dragon', strain: 'hybrid' },
    { id: 122, name: 'Ogre', strain: 'hybrid' },
    { id: 123, name: 'California Orange', strain: 'hybrid' },
    { id: 124, name: 'Blue Cookies', strain: 'hybrid' },
    { id: 125, name: 'Cherry Kush', strain: 'hybrid' },
    { id: 126, name: 'Phantom Cookies', strain: 'hybrid' },
    { id: 127, name: 'Sour Apple', strain: 'hybrid' },
    { id: 128, name: 'Super Glue', strain: 'hybrid' },
    { id: 129, name: 'Ice Cream', strain: 'hybrid' },
    { id: 130, name: 'Blue Hawaiian', strain: 'hybrid' },
    { id: 131, name: 'Green Ribbon', strain: 'hybrid' },
    { id: 132, name: 'ChemDog 91', strain: 'hybrid' },
    { id: 133, name: 'Sour Grape', strain: 'hybrid' },
    { id: 134, name: 'Royal Kush', strain: 'hybrid' },
    { id: 135, name: 'Burmese Kush', strain: 'hybrid' },
    { id: 136, name: 'Goji OG', strain: 'hybrid' },
    { id: 137, name: 'Critical Plus', strain: 'hybrid' },
    { id: 138, name: 'Hells OG', strain: 'hybrid' },
    { id: 139, name: 'Kosher Tangie', strain: 'hybrid' },
    { id: 140, name: 'Sour Diesel', strain: 'sativa'},
    { id: 141, name: 'Strawberry Cough', strain: 'sativa'},
    { id: 142, name: 'Super Silver Haze', strain: 'sativa'},
    { id: 143, name: 'Candyland', strain: 'sativa'},
    { id: 144, name: 'Ammnesia', strain: 'sativa'},
    { id: 145, name: 'Great White Shark', strain: 'sativa'},
    { id: 146, name: 'Candy Jack', strain: 'sativa'},
    { id: 147, name: 'Trinity', strain: 'sativa'},
    { id: 148, name: 'Lemon G', strain: 'sativa'},
    { id: 149, name: 'Euforia', strain: 'sativa'},
    { id: 150, name: 'Pineapple', strain: 'sativa'},
    { id: 151, name: 'Alpha Blue', strain: 'sativa'},
    { id: 152, name: 'Sour Amnesia', strain: 'sativa'},
    { id: 153, name: 'Green Goblin', strain: 'sativa'},
    { id: 154, name: 'Sweet Diesel', strain: 'sativa'},
    { id: 155, name: 'Alaska', strain: 'sativa'},
    { id: 156, name: 'Sugar Plum', strain: 'sativa'},
    { id: 157, name: 'Pineapple OG', strain: 'sativa'},
    { id: 158, name: 'Lemon Pie', strain: 'sativa'},
    { id: 159, name: 'Mickey Kush', strain: 'sativa'},
    { id: 160, name: 'Dirty Girl', strain: 'sativa'},
    { id: 161, name: 'Allen Wrench', strain: 'sativa'},
    { id: 162, name: 'Sour Jack', strain: 'sativa'},
    { id: 163, name: 'Strawberry', strain: 'sativa'},
    { id: 164, name: 'Panama Red', strain: 'sativa'},
    { id: 165, name: 'Maui', strain: 'sativa'},
    { id: 166, name: 'Hempstar', strain: 'sativa'},
    { id: 167, name: 'Moonshine Haze', strain: 'sativa'},
    { id: 168, name: 'Alice in Wonderland', strain: 'sativa'},
    { id: 169, name: 'Silver Kush', strain: 'sativa'},
    { id: 170, name: 'Alpha Blue', strain: 'sativa'},
    { id: 171, name: 'Super Snow Dog', strain: 'sativa'},
    { id: 172, name: 'Raspberry Cough', strain: 'sativa'},
    { id: 173, name: 'Hawaiian Dream', strain: 'sativa'},
    { id: 174, name: 'Outer Space', strain: 'sativa'},
    { id: 175, name: 'Triple Diesel', strain: 'sativa'},
    { id: 176, name: 'Lime Skunk', strain: 'sativa'},
    { id: 177, name: 'Seattle Cough', strain: 'sativa'},
    { id: 178, name: 'Blue Satellite', strain: 'sativa'},
    { id: 179, name: 'NYPD', strain: 'sativa'},
    { id: 180, name: 'Mexican Sativa', strain: 'sativa'},
    { id: 181, name: 'Dream Beaver', strain: 'sativa'},
    { id: 182, name: 'Firewalker OG', strain: 'sativa'},
    { id: 183, name: 'Asian Fantasy', strain: 'sativa'},
    { id: 184, name: 'Chocolate Fondue', strain: 'sativa'},
    { id: 185, name: 'Green Lantern', strain: 'sativa'},
    { id: 186, name: 'In The Pines', strain: 'sativa'},
    { id: 187, name: 'Mango Dream', strain: 'sativa'},
    { id: 188, name: '1024', strain: 'sativa'},
    { id: 189, name: 'Durban Cookies', strain: 'sativa'},
    { id: 190, name: 'Nepalese', strain: 'sativa'},
    { id: 191, name: 'Hippie Chicken', strain: 'sativa'},
    { id: 192, name: 'Killing Fields', strain: 'sativa'},
    { id: 193, name: 'Aloha', strain: 'sativa'},
    { id: 194, name: 'Ultimate Trainwreck', strain: 'sativa'},
    { id: 195, name: 'Lemon Bubble', strain: 'sativa'},
    { id: 196, name: 'African', strain: 'sativa'},
    { id: 197, name: 'Venice OG', strain: 'sativa'},
    { id: 198, name: 'Ultra Sour', strain: 'sativa'},
    { id: 199, name: 'Memory Loss', strain: 'sativa'},
    { id: 200, name: 'Lavender Haze', strain: 'sativa'},
    { id: 201, name: 'Lime Haze', strain: 'sativa'},
    { id: 202, name: 'Blackberry Haze', strain: 'sativa'},
    { id: 203, name: 'Purple Tangie', strain: 'sativa'},
    { id: 204, name: 'Kings Bread', strain: 'sativa'},
    { id: 205, name: 'Rootbeer Kush', strain: 'sativa'},
    { id: 206, name: 'Jamaican Lion', strain: 'sativa'},
    { id: 207, name: 'The Cough', strain: 'sativa'},
    { id: 208, name: 'Dance World', strain: 'sativa'},
    { id: 209, name: 'Sour Pebbles', strain: 'sativa'},
    { id: 210, name: 'Pineapple Fields', strain: 'sativa'},
    { id: 211, name: 'South American', strain: 'sativa'},
    { id: 212, name: 'Stella Blue', strain: 'sativa'},
    { id: 213, name: 'Schrom', strain: 'sativa'},
    { id: 214, name: 'Sonoma Coma', strain: 'sativa'},
    { id: 215, name: 'Space Jill', strain: 'sativa'},
    { id: 216, name: 'Sleeslack', strain: 'sativa'},
    { id: 217, name: 'Mother Tongue', strain: 'sativa'},
    { id: 218, name: 'Twisted Circus', strain: 'sativa'},
    { id: 219, name: 'Caramelo', strain: 'sativa'},
    { id: 220, name: 'Frostbite', strain: 'sativa'},
    { id: 221, name: 'Lemon Cake', strain: 'sativa'},
    { id: 222, name: 'Limon', strain: 'sativa'},
    { id: 223, name: 'Jock Horrow', strain: 'sativa'},
    { id: 224, name: 'Sublime', strain: 'sativa'},
    { id: 225, name: 'White Durban', strain: 'sativa'},
    { id: 226, name: 'Supernatural', strain: 'sativa'},
    { id: 227, name: 'Thors Hammer', strain: 'sativa'},
    { id: 228, name: 'Berkely', strain: 'sativa'},
    { id: 229, name: 'Sputnik', strain: 'sativa'},
    { id: 230, name: 'Serious 6', strain: 'sativa'},
    { id: 231, name: 'Astro Boy', strain: 'sativa'},
    { id: 232, name: 'Catfish', strain: 'sativa'},
    { id: 233, name: 'OCD', strain: 'sativa'},


    ]).then(function (response) {
      console.log(response)
    }).catch(function (err) {
      console.log("Err: " + err)
    })
  })
  // GET route for getting all of the todos
  app.get("/api/:strain", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Strains.findAll({ where: {strain: req.params.strain}  }).then(function (strainArr) {
      // We have access to the todos as an argument inside of the callback function
      res.json(strainArr);
    });
  });

  app.get("/users", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function (moodArr) {
      // We have access to the todos as an argument inside of the callback function
      console.log(moodArr)
      res.json(moodArr);
    });
  });

  // POST route for saving a new todo
  app.post("/api/mood", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.User.create({
    name: req.body.name,
      mood: req.body.mood
      // complete: req.body.complete
    }).then(function (dbMood) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbMood);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/todos/:id", function (req, res) {

  });

  // PUT route for updating todos. We can get the updated todo from req.body
  app.put("/api/todos", function (req, res) {

  });

  app.get("/getrandom/:strain", function (req, res) {
    db.Strains.findAll({ strain: req.params.strain }).then(function (result) {
      res.json(result)
    })
  })
};
