class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    
    topKFrequent_v1(nums, k) {
        const map = new Map   
        for ( let [i,n] of nums.entries() ) {
            const hasKey = map.has(n)
            
            if(!hasKey) map.set(n, 1)
            
            else {
                const el = map.get(n) + 1
                map.set(n, el)
            }
    
        }
    
        console.log(map)
        const arr = [...map].sort((a,b)=> b[1] - a[1]).slice(0, k).map(([a]) => a )
        return arr
    } 
   topKFrequent_v2_multi_value_freq(nums, k) {
        const map = new Map   
        for ( let [i,n] of nums.entries() ) {
            const hasKey = map.has(n)
            
            if(!hasKey) map.set(n, 1)
            
            else {
                const el = map.get(n) + 1
                map.set(n, el)
            }
    
        }
        const buckets = []
        
        for (let [num, freq] of map){

            if (!buckets[freq]) buckets[freq] = []
            buckets[freq].push(num)

        }

        const res = []
        for (let i = buckets.length; i >= 0; i--){
            const el = buckets[i-1]
            if(el && res.length < k){ 

                res.push(...el)
            }

        }
        
        return res
    } 
    topKFrequent(nums, k) {
        
        const map = new Map();
        for (const num of nums) {
            
            map.set(num, (map.get(num) || 0) + 1);
        }

        
        const buckets = [];

        
        for (const [num, freq] of map) {
           
            if (!buckets[freq]) {
                buckets[freq] = [];
            }
           
            buckets[freq].push(num);
        }

       
        const res = [];
        
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (res.length >= k) break;
            if (buckets[i])  res.push(...buckets[i]);
            
        }

        return res.slice(0, k);
    }
}
const inst = new Solution()
const input = [1,2,2,3,3,3,4,7,6,6], k = 2
const input2 = [7,7], k2 = 1
inst.topKFrequent(input, k)
