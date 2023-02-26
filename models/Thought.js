const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      type: String,
      required: true,
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

reactionSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return reaction.length
  });

  const Thought = model('Thought', thoughtSchema); 


module.exports = thoughtSchema;
