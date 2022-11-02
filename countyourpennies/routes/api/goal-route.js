const router = require("express").Router();
const {
    getAllgoals,
    getGoalsbyId,
    createGoals,
    updateGoals,
    deleteGoals,
} = require("../../controllers/user-controllers")

router.route("/getAllgoals").get(getAllgoals)

router.route("/getGoalsbyId").get(getGoalsbyId)

router.route("/createGoals").post(createGoals)

router.route("/updateGoals").patch(updateGoals)

router.route("/deleteGoals").delete(deleteGoals)


module.exports = router 