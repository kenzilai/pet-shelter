const Pet = require("../models/pet.model")

module.exports.petCreate = (req, res) => {
    Pet.create(req.body)
        .then(newPet => {
            res.json({results: newPet})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.petFindAll = (req, res) => {
    Pet.find()
    .then((foundPet) => {
        res.json({results: foundPet})
    })
    .catch((err) => {
        res.json({ message: 'Error Message Here', error: err })
    })
}

module.exports.petFindOne = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then((onePet) => {
            res.json({results: onePet})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.petUpdate = (req, res) => {
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then((updatePet) => {res.json({results: updatePet})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.petDelete = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then((deletePet) => {
            res.json({results: deletePet})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        })
}
