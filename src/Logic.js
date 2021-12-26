export function updateAList(id, text, array) {
  array.forEach((val) => {
    if (id === val.id) {
      val.message = text;
    }
    updateAList(id, text, val.child);
  });
}

export function deleteAnItemFromList(id, array) {
  let fill = array.filter((val) => {
    return val.id !== id;
  });
  array = fill;
  array.forEach((val) => {
    let fill1 = val.child.filter((value) => {
      return value.id !== id;
    });
    val.child = fill1;
    // goes deep inside a child array.
    return deleteAnItemFromList(id, val.child);
  });
  // we need updated array
  return array;
}

export function addIntoList(id, newObj, array) {
  array.forEach((val) => {
    if (val.id === id) {
      val.child.push(newObj);
    }
    return addIntoList(id, newObj, val.child);
  });
  return array;
}
