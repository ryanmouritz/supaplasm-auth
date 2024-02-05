const getSortFunc = (fieldName, direction) => {
  return function (a, b) {
    let valA = a[fieldName];
    let valB = b[fieldName];

    //if field vals are string, convert to lowercase
    if (typeof valA === "string") {
      valA = valA.toLowerCase();
    }

    if (typeof valB === "string") {
      valB = valB.toLowerCase();
    }

    //Sort
    if (direction === "asc") {
      return valA > valB ? 1 : -1;
    } else {
      return valA < valB ? 1 : -1;
    }
  };
};

export default getSortFunc;