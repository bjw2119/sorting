describe('Bubble Sort', function(){

  //spy
 beforeEach(function(){
  spyOn(bubbleSort, 'swap').and.callThrough();
});


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function(){
    expect( bubbleSort([23]) ).toEqual( [23] );

  });

  it('handles multiple item arrays', function(){
    var arr = [23, 5, 1, 48, 4, 7];
    expect( bubbleSort(arr)).toEqual([1, 4, 5, 7, 23, 48]);
    expect( bubbleSort.swap.calls.count()).toEqual(8);
  });
});
