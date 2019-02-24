const express = require('express');
const router = express.Router();

const fetchVideoInfo = require('youtube-info');

router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET home page. */
router.get('/:videoId', async (req, res, next) => {
  const { videoId } = req.params;

  const videoInfo = await fetchVideoInfo(videoId);

  const { url, title, thumbnailUrl } = videoInfo;

  res.render('video', {
    videoId,
    title,
    url,
    thumbnailUrl
  });
});

module.exports = router;
