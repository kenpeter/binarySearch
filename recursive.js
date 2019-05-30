
function bs(a, tar, l, h) {
  // pass index, so equal
  if (h >= l) { 
    // not m = (h-l)/2
    // l+diff
    let m = l + Math.floor( (h - l) / 2 ); 

    if (a[m] == tar) 
      return m; 

    // tar... a[m]....
    if (a[m] > tar) 
        return bs(a, tar, l, m - 1); 

    // a[m]..tar...
    return bs(a, tar, m + 1, h); 
  }

  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let tar = 5;
let out = bs(arr, tar, 0, arr.length-1);
console.log(out);



function bs1(a, tar, l, h) {
  // pass index, so equal
  if (h > l) { 
    // not m = (h+l)/2
    // l+diff
    //let m = l + Math.floor( (h - l) / 2 ); 
    let m = Math.floor( (h + l) / 2 ); 

    if (a[m] == tar) 
      return m; 

    // tar... a[m]....
    if (a[m] > tar) 
        return bs1(a, tar, l, m - 1); 

    // a[m]..tar...
    return bs1(a, tar, m + 1, h); 
  }

  return -1;
}

arr = [1, 2, 3, 4, 5, 6, 7];
tar = 5;
out = bs1(arr, tar, 0, arr.length);
console.log(out);