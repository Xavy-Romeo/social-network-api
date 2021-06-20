const {Schema, model} = require('mongoose');

// User Schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'Please enter your username!',
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: 'Please enter your email address!',
            unique: true,
            match: /.+\@.+\..+/,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }

);

// get total count of friends
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create User model using the UserSchema
const User = model('User', UserSchema);

// exporting User model
module.exports = User;