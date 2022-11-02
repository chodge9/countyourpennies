const {Schema, model} = require("mongoose")



const GoalSchema = new Schema({
    amount:{
        type:Number,
        required: true,
        unique: true,
        trim: true,
    },
    timeFrame:{
        type: Number,
        required: true,
        // timeframe must match across users. Must be in weeks! Also needs to be done in front end. Make a drop down in HTML(REACT) to use weeks, months, or years for conversions.
    },
},
{
    toJSON:{
        virtuals:true
    }
})

const Goal = model("Goals", GoalSchema)

module.exports = Goal