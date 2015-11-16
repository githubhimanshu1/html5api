//The example demonstrate the use of filter method used for array
//suppose i have this array containing numbers upto 10 and i want to remove all numbers 
//which are greater than 5 then this can be done in many ways --one of the very
//easy way of filtering the elements of array is by making use of filter
var myarray=[1,2,3,4,5,6,7,8,9,10];
myarray=myarray.filter(function(ref){
			if(ref<6)
			{
			return true;
			}
			else
			{
				return false;
			}

});
console.log(myarray);

//push,pop -from end of array
//shift,unshift - from start of array -shift add to index 0 unshift -remove from 

var mysecondarray=[32,21,5,111,57,21,8,32];
mysecondarray=mysecondarray.sort(function(a,b){
	
	return mysecondarray;
});
alert(mysecondarray);