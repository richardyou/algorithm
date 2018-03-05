function sequezeSearch(arr, key) {
  let ret = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      ret = index
    }
  }
  return ret
}
//假定顺序排
function binarySearch(arr,key){
  let mid,
   low = 0,
   high = arr.length -1;
   while(low <= high){
     mid = Math.floor((high - low)/2)
     let midEl = arr[mid]
     if(key > midEl){
       low = mid+1
     }else if(key < midEl){
       high = mid -1
     }else{
       return mid
     }
   }
   return -1
}