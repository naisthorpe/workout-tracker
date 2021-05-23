const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        // Cardio or Resistance
        type: {
            type: String
        },
        // Cardio or Resistance
        name: {
            type: String
        },
        // Cardio or Resistance
        duration: {
            type: Number
        },
        // Cardio
        distance: {
            type: Number
        },
        // Resistance
        weight: {
            type: Number
        },
        // Resistance 
        sets: {
            type: Number
        },
        // Resistance
        reps: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;