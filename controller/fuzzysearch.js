import Fuse from "fuse.js";

const findDataWithFuse = (data, distance, threshold, keyword) => {
  console.log("🚀 ~ findDataWithFuse ~ data, distance, threshold, keyword:", data, distance, threshold, keyword)
  const fuse = new Fuse(data, fuseOptions);
  const fuseOptions = {
    // isCaseSensitive: false,
    includeScore: true,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: threshold,
    distance: distance,
    // useExtendedSearch: false,
    // ignoreLocation: true,
    // ignoreFieldNorm: true,
    // fieldNormWeight: 1,
    keys: ["Merek"],
  };

  return fuse.search(keyword);
};

// const searchPattern = "Morning Glory";

// const theOutputs = fuse.search(searchPattern);
// console.log("Data Length : ", theOutputs.length, "; Output ? ", theOutputs);

export default findDataWithFuse;
