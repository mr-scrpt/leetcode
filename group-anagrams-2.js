class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams_v1(strs) {
        const res = []
        const visited = new Array(strs.length).fill(false)
        
        for (let i = 0; i < strs.length; i++){
            //console.log(visited)
            if(visited[i]) continue
            
            const currentWord = strs[i]
            const subGroup = [currentWord]
            
            for (let j = i+1; j < strs.length; j++){
                const currentSubWord = strs[j]
                
                if(fn(currentWord) === fn(currentSubWord)){
                    visited[j] = true
                    subGroup.push(currentSubWord)
                }
            }
            
            res.push(subGroup)

        }
        return res
      
      
    }
      groupAnagrams(strs) {
          const map = new Map()
          for (let currentWord of strs) {
              const key = fn(currentWord)
              const currenGroup = map.get(key)
              if(currenGroup){
                  //map.set(key, [...currenGroup, currentWord]) // новый массив, иммутабельно - тратит память и посути делает 
                  currenGroup.push(currentWord);
              }
              else{
                  map.set(key, [currentWord])
              }
              
              
          }
          return Array.from(map.values())
      }
}
const fn = (w)=> w.split('').sort((a,b)=> a.localeCompare(b, undefined), {sensitivity: 'base'}).join()
const inst = new Solution()
const input = ["act","pots","tops","cat","stop","hat"]
const input2 = ["ape","and","cat"]
const inputT = ["act","cat","hat"]
const inputT2 = ["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"]
inst.groupAnagrams(input)