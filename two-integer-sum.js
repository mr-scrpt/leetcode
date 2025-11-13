const nums = [3,4,5,6]
const target = 7

class Solution {

   twoSum(nums, target) {

        const setNums = new Map();

        for (let i = 0; i < nums.length; i++){
            const current = nums[i]
            const summ = target - current
            const isSatisfice = setNums.has(summ)
            if(isSatisfice) return [setNums.get(summ), i]

            setNums.set(current, i)
        }
    }
}

const nums2 = [4,5,6], target2 = 10
const i = new Solution()
i.twoSum(nums, target)
//i.twoSum(nums2, target2)

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @return {number[]}
//      */
//     twoSum(nums, target) {
       
//         let reduceArray = [...nums]
//         let indexes = []
        
//         for (const [index, num] of nums.entries()){
//             if(indexes.length === 2) break
//             const rest = target - num
//             for(const [subIndex, subNum] of reduceArray.entries()){
 
//                 if(subNum === rest){
//                     indexes.push(index) 
//                     indexes.push(subIndex)                                      
//                     break
//                 }

//             }

//             reduceArray.shift()
            
//         }
       
//         return indexes
//     }
// }
