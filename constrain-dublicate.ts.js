class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate1(nums) {
        return nums.length !== new Set(nums).size 
       
    }

    hasDuplicate(nums) {
        const seen = new Set()
        for (const el of nums) {
            if (seen.has(el)) return true
            seen.add(el)
        } 
        return false
       
    }
}
