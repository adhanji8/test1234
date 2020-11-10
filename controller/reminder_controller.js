// Some comment
let database = require("../database");

let remindersController = {
  // Show a list of reminders
  // some changes
  list: (req, res) => {
    res.render('reminder/index', { reminders: database.cindy.reminders })
  },

  // Show a Create Reminder Page
  new: (req, res) => {
    res.render('reminder/create')
  },

  // Show the details of a Single Reminder
  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: database.cindy.reminders })
    }
  },

  // Create a reminder
  // ⚠️ TODO: Currently hardcoded to always create a reminder for Cindy only. You need to make this dynamic. 
  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false
    }
    database.cindy.reminders.push(reminder);
    res.redirect('/reminders');
  },

  // Show the Edit Reminder Page
  edit: (req, res) => {
    // ⭐️ your implementation here ⭐️
    // get reminder from id in req object
    // search the database to see if cindy has a reminder matching that id
    // send that result to res.render

    res.render('reminder/edit', { reminderItem: searchResult })

  },

  // Edit the Reminder this is a change
  update: (req, res) => {
    // ⭐️ your implementation here ⭐️
    // get reminder from id in req object params
    // search the database to see if cindy has a reminder matching that id
    // update the values
    // redirect back to /reminders
    // res.redirect("/")
  },

  // Delete the Reminder
  delete: (req, res) => {
    // ⭐️ your implementation here ⭐️
    console.log("delete finished!");
  }
}

module.exports = remindersController;
