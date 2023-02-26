const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThought,
  removeThought,
} = require('../../controllers/thoughtController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/tags
router.route('/:thoughtId/tags').post(addThought);

// /api/Thoughts/:ThoughtId/tags/:tagId
router.route('/:thoughtId/tags/:tagId').delete(removeThought).put(updateThought);

module.exports = router;