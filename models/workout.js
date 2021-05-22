const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Exercise schema includes keys from both exercise types
// Null values won't be added when specific exercise is created
const ExerciseSchema = new Schema({
    
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

});

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        ExerciseSchema
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;