class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const ang = new Map()
        const res = []
        const fn = (w)=> w.split('').sort((a,b)=> a.localeCompare(b, undefined), {sensitivity: 'base'}).join()
        for (let i = 0; i < strs.length; i++){
            const w = strs[i]
            const wLen = w.length
            const vArr = ang.get(wLen)
            
            if(vArr) {

                const lastEl = vArr.at(-1)
                const subLastEl = lastEl.at(-1)

                if (fn(subLastEl) === fn(w)){
                    const localRes = [[...lastEl, w]]
                    ang.set(wLen, localRes)
                }else {
                    const localRes = [[...lastEl], [w]]
                    ang.set(wLen, localRes)
                }
            }
            else ang.set(wLen, [[w]])
            
        }
       
        return Array.from(ang.values()).flat()
    }
}
const inst = new Solution()
const input = ["act","pots","tops","cat","stop","hat"]
inst.groupAnagrams(input)