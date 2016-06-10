function splitArray(arr){
  var ans = [];
  // if(arr.length%2 ===1) ans.push(arr.pop());
  // if(arr.length !==0){
  //   ans.push(arr.splice(0,(arr.length)/2));
  //   ans.push(arr);
  // }
  for(var i =0; i< arr.length; i++){
    var j =[arr[i]];
    ans.push(j);
  }
  return ans;
};

function merge(arr1, arr2){
  var ans =[];
  var length = arr1.length + arr2.length;
  for(var i =0; i< length; i++){
    if(arr1[0] === undefined) ans.push(arr2.shift());
    else if (arr2[0] === undefined) ans.push(arr1.shift());
    else arr1[0] < arr2[0] ? ans.push(arr1.shift()) : ans.push(arr2.shift());
  }
  return ans;
}

function mergeSort(arr){
  if (typeof arr[0] !== 'object') arr = splitArray(arr);
  arr.push(merge(arr.shift(),arr.shift()));
  if(arr.length !==1) mergeSort(arr);
  return arr[0];
}
