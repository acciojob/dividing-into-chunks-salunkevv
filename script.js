const arr = [4,3,2,1];
const divide = (arr, n) => {
  // Write your code here
	let ans=[];
	let temp=[];
	let sum=0;
	for(let i=0;i<arr.length;i++)
		{
			sum+=arr[i];
			if(sum<=n)
			{
				temp.push(arr[i]);
			}
			else
			{
				ans.push(temp);
				temp=[];
				sum=0;
				i--;
			}
		}
	ans.push(temp);
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));