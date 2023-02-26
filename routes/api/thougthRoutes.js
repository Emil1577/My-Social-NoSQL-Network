const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addTag,
  removeTag,
} = require('../../controllers/appController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/tags
router.route('/:thoughtId/tags').post(addTag);

// /api/Thoughts/:ThoughtId/tags/:tagId
router.route('/:thoughtId/tags/:tagId').delete(removeTag);

module.exports = router;