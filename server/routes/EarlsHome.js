const express = require('express')
const router = express.Router();


const {
    getHomeContents,
    getHomeContentById,
    updateHomeContent,
    deleteHomeContent
} = require('../controllers/EarlsHome')

router.route('/').get(getHomeContents)
// .post(createContent);
router.route('/:contentId').get(getHomeContentById).put(updateHomeContent).delete(deleteHomeContent)

module.exports = router