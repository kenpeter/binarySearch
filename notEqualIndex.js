//https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470

function bs(arr, tar) {
  let s = 0;
  let e = arr.length; // full len
  
  while(s < e) {
    let m = Math.floor((s + e) / 2);
    
    if(tar === arr[m]) {
      return m;
    }
    
    if(tar > arr[m]) {
      s = m + 1; // because s=0;
    }

    // end, exact index
    if(tar < arr[m]) {
      e = m; // not m-1, because arr.length???
    }
  }
  
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let tar = 5;
let out = bs(arr, tar);
console.log(out);