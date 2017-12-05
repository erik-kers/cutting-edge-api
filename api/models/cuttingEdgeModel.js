let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RecipeSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  time: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  images: [
    {
      path: {
        type: String
      }
    }
  ],
  course: {
    type: String,
    enum: [
      'starter', 
      'main', 
      'desert', 
      'drink', 
      'side'
    ]
  },
  categories: [
    {
      name: {
        type: String
      }
    }
  ],
  ingredients: [
    {
      name: {
        type: String
      },
      amount: {
        type: Number
      },
      unit: {
        type: String
      }
    }
  ],
  instruction: [
    {
      step: {
        type: Number
      },
      body: {
        type: String
      }
    }
  ],
  extra: [
    {
      body: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model('Recipes', RecipeSchema);




