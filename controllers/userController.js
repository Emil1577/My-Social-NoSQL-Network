const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated apps
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Application.deleteMany({ _id: { $in: user.applications } })
      )
      .then(() => res.json({ message: 'User and associated apps deleted!' }))
      .catch((err) => res.status(500).json(err));
  },


  addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.friendId },
      { $addToSet: { user: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No friend found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Remove assignment from a student
  deleteFriend(req, res) {
    Student.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { assignment: { assignmentId: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((student) =>
        !student
          ? res
            .status(404)
            .json({ message: 'No student found with that ID :(' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },
};