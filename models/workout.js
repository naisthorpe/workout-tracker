const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    
    type: {
        type: String
    },
    name: {
        type: String
    },
    duration: {
        type: Number
    }, 
    distance: { 
        type: Number
    }

});

const CardioSchema = new Schema({
    
    type: {
        type: String
    },
    name: {
        type: String
    },
    weight: {
        type: Number
    }, 
    sets: { 
        type: Number
    },
    reps: {
        type: Number
    }, 
    duration: {
        type: Number
    }

});

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    resistance: [
        ResistanceSchema
    ],
    cardio: [
        CardioSchema
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;