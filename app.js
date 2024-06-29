import Fuse from "fuse.js";
import data from "./data.json" assert { type: "json" };

const fuseOptions = {
    includeScore: true,
  threshold: 0.5,
  distance: 100,
  keys: ["Merek"],
};

const fuse = new Fuse(data, fuseOptions);

const searchPattern = "Tornado";

const theOutputs = fuse.search(searchPattern);
console.log("Data Length : ", theOutputs.length, "Output ? ", theOutputs);
