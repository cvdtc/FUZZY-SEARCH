import express from 'express'
const router = express.Router();

import searchMerek from '../controller/merek.js';

router.get("/", (req, res) => {
  return res.render("pages/index", { isLoading: false });
});

router.post("/search", searchMerek)

export default router;
