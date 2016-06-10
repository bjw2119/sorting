describe("mergeSort", function(){
      beforeEach(function(){
      spyOn(window, 'mergeSort').and.callThrough();
    });

  it('is able to split an array into an array of single-value arrays', function(){
    expect(splitArray([1,2,3,4])).toEqual([[1],[2],[3],[4]])
  });

    it('merges arrays in ascending order', function(){
    expect(merge([3,7], [1,8])).toEqual([1,3,7,8]);
    expect(merge([4,7], [5])).toEqual([4,5,7]);
  });

     it('sorts an array in ascending order', function(){
    expect(mergeSort([3,7,1,8])).toEqual([1,3,7,8]);
    expect(mergeSort([4,7,5, 10, 1])).toEqual([1,4,5,7,10]);
    expect(mergeSort([13,101,5,27,0,11,14])).toEqual([0,5,11,13,14,27,101]);
    expect(mergeSort.calls.count()).toEqual(13);
  });

});


