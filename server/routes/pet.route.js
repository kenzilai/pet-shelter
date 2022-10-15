const PetController = require("../controllers/pet.controller")

module.exports = (app) => {
    app.post("/api/pets/new", PetController.petCreate);
    app.get("/api/pets", PetController.petFindAll);
    app.get("/api/pets/:id", PetController.petFindOne);
    app.put("/api/pets/edit/:id", PetController.petUpdate);
    app.delete("/api/pets/delete/:id", PetController.petDelete);
}