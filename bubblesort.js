function bubbleSort(arr){
  var arr= arr;

    //  debugger;
  if (arr.length > 1) {
    for(var j=0; j<arr.length-1; j++){
      for(var i=0; i<arr.length; i++){
          if (arr[i] > arr[i+1]) {
            arr = bubbleSort.swap(arr, arr[i], arr[i+1], i);
          };
      };
    }
  };
  return arr;

};
bubbleSort.swap = function(arr, x,y, i){

      arr[i]=y;
      arr[i+1]=x;
      return arr;
  };

