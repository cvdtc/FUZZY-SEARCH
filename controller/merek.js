import db from "../models/index.js";
import findDataWithFuse from "./fuzzysearch.js";
const merekModel = db.merekModels;
const logsModel = db.logsModel;
import dotenv from "dotenv";
import Fuse from "fuse.js";
dotenv.config();

const searchMerek = async (req, res) => {
  const { keyword, distance, threshold, auth, realtime } = req.body;
  // if(auth!==process.env.ACCESS_SECRET){
  //     return alert('Anda tidak memiliki akses')
  // }
  try {
    const fuseOptions = {
      // isCaseSensitive: false,
      includeScore: true,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      threshold: parseFloat(threshold),
      distance: parseInt(distance),
      // useExtendedSearch: false,
      // ignoreLocation: true,
      // ignoreFieldNorm: true,
      // fieldNormWeight: 1,
      keys: ["merek"],
    };
    await merekModel
      .findAll()
      .then(async (result) => {

        const fuse = new Fuse(result, fuseOptions);

        const hasilSearch =  fuse.search(keyword);
        console.log("🚀 ~ .then ~ hasilSearch:", hasilSearch)
        // return res.status(200).send({ message: "DATA", data: hasilSearch });

        return (res.render('pages/data', {data:hasilSearch, keyword, threshold, distance }))
      })
      .catch((err) => {});
    // console.log("🚀 ~ searchMerek ~ dataMerek:", dataMerek)

    // console.log(findDataWithFuse(JSON.parse(dataMerek), distance, threshold, keyword ))
    // return res.json(dataMerek)
    // return findDataWithFuse
  } catch (error) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({
      success: false,
      message: "Internal Server Error " + error,
    });
  }
};

export default searchMerek;
