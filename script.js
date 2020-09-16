function range(start, stop) {
  let res = [];
  res.unshift(start);
  for (i = start; i < stop; i++){
    res.push(start += 1);
  }
  return res;
}

console.log(range(-5, 5));
