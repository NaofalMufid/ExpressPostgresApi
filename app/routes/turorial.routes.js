module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller")

    var router = require("express").Router()

    // create new tutorial
    router.post("/", tutorials.create)

    // retrieve all tutorials
    router.get("/", tutorials.findAll)

    // retrieve all publshied tutorials
    router.get("/published", tutorials.findAllPublished)

    // retrive a single tutorials with id
    router.get("/:id", tutorials.findOne)

    // update a tutorials
    router.put("/:id", tutorials.update)

    // delete a tutorial with id
    router.delete("/:id", tutorials.delete)

    // delete all tutorials
    router.delete("/", tutorials.deleteAll)

    app.use('/api/tutorials', router)
}