const { User, Goals } = require("../models")


const goalController = {
    getAllgoals(request,response) {
        Goals.find().then((res)=> {
            console.log(res, "This is the response. UCln7")
            response.json(res)
        }).catch((err)=> {
            console.log(err,"This went WROng. UCln11")
            response.status(500).json(err)
        })
    },

    createGoals(request,response) {
        console.log(request, "This is the Request GCln16")
        Goals.create(request.body).then((res)=> {
            response.json(res)
        }).catch((err)=> {
            console.log(err, "this is the error on GCln20")
            response.status(500).json(err)
        })
    },

    deleteGoals(request,response) {
        console.log(response, "This is Deleting Stuff!")
        Goals.findOneAndRemove(request.body).then((res)=> {
            response.json(res)
        }).catch((err)=> {
        console.log(err, "this is the error on GCln30")
        response.status(500).json(err)
        })
    },

    getGoalsbyId(request,response) {
        console.log(res, "This is Updating Stuff!")
        Goals.findById(request.body).then((res)=> {
            response.json(res)
        }).catch((err)=> {
        console.log(err, "this is the error on GCln30")
        response.status(500).json(err)
        })
    },

    updateGoals(request,response) {
        console.log(res, "This is Updating Stuff!")
        Goals.findOneAndUpdate(request.body).then((res)=> {
            response.json(res)
        }).catch((err)=> {
        console.log(err, "this is the error on GCln30")
        response.status(500).json(err)
        })
    },
    

}

module.exports = goalController