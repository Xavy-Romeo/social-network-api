const {Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat')

// Reaction Schema
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Please enter your reaction!'
        },
        username: {
            type: String,
            required: 'Please enter your username!'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }

);

// Thoughts Schema
const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Please enter your thoughts!',
            min: 1,
            max: 280,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: 'Please enter your username!'
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtual: true,
            getters: true
        },
        id: false
    }
);

// get total count of reactions to the Thought
ThoughtsSchema.virtual('reactionsCount').get(function() {
    return this.reactions.length;
});

// create Thoughts model using the Thoughts Schema
const Thought = model('Thought', ThoughtsSchema);

// exporting Thoughts model
module.exports = Thought;