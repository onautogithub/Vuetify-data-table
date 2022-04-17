const db = require("../models")
const Tutorial = db.tutorials
const Op = db.Sequelize.Op

// Create and Save a new tutorial record
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: `You must enter a title for this tutorial`
    })
    return
  }
  // Create the record for this tutorial
  const tutorial = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
  }
  // Save the tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data)
  }).catch(err => {
    message:
    err.message || " An error occured while creating a tutorial record"
  })
}

// Retrieve all the tutorial records from the database
exports.findAll = (req, res) => {
const title = req.query.title
var condition = title ? { title: { [Op.like]: `%${title}%` }} : null

Tutorial.findAll({where: condition})
.then(data => {
  res.send(data)
}).catch(err => {
  res.status(500).send({
    message:
    err.message || "An error occured retrieving all the tutorials"
  })
})
}

// Search, Find a single tutorial which is identified by its id
exports.findOne = (req, res) => {
  const id = req.params.id

  Tutorial.findByPk(id)
  .then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message:
      err.message || " Error retrieving tutorial with id= " + id
    })
  })

}

// Locate and Update the tutorial which is identified by its id
exports.update = (req, res) => {
    const id = req.params.id

    Tutorial.update(req.body, {
      where: {id: id}
    })
    .then(num => {
      if (num ==1 ) {
      res.send({
        message:
        "Tutorial was sucessfully updated"
      })
    } else {
      res.send({
        message:
        "Unable to locate the tutorial with id " + id
      })
    }
    }).catch(err => {
      res.status(500).send({
        message:
        err.message ||"Error updating the tutorial with id " + id
      })
    })
  }

// Delete a specific tutorial using its id
exports.delete = (req, res) => {
  const id = req.params.id

  Tutorial.destroy({
    where: {id: id}
  })
  .then(num => {
    if (num == 1 ) {
      res.send({
        message:
        "Tutorial was sucessfully deleted"
      })
    } else {
      res.send({
        message:
        "Unable to delete the selected tutorial"
      })
    }
  }).catch(err => {
    res.status(500).send({
      message:
      `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
    })
  })

}

// Delete all tutorials from the database
exports.deleteAll = (req, res) => {

  Tutorial.destroy({
    where: {},
    truncate: false
  })
  .then(nums => {
    res.send({
      message:
      `${nums} tutorials were deleted successfully`
    })
  })
}

// Find all published tutorials that are published
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: {published: true}})
  .then(data =>
    res.send(data)
    ).catch(err => {
      message:
      err.message || "An error occured fetching all published tutorials"
    })
}

