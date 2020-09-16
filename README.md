# Javascript-range-function

# Description

In Javascript, there is no built-in function or method to generate an Array of range between 2 points (start, end), by example: 

In Ruby, if we want to generate an Array from 2 points (-2, 2), we just need to do 
```Ruby
(-2..2).to_a #=> [-2, -1, 0, 1, 2]
```
but in JS, we need to build a function from scratch to do that. so here are the function:

```JavaScript
function range(start, stop) {
  let res = [];
  res.unshift(start);
  for (i = start; i < stop; i++){
    res.push(start += 1);
  }
  return res;
}
```
 now if you want to generate an Array of range between 2 points, you just need to do:

```
range(-1, 5) // => [-1, 0, 1, 2, 3, 4, 5]
```


## The function step by step
1- create an empty array ("res" in our function) inside the function to stock the range

2- Add into the beggining of the Array the "start" value with the method .unshift()

3- create a loop between start and stop to push inside the array the value of (start +=1) in each loop:

* loop 1 : start = start + 1
* loop 2 : start = start + 2
* loop n : start = start + n




## Author
Mario Randrianomearisoa
