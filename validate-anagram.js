class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const stMap = {}
       

        for (const c of s ) {
           stMap[c] = (stMap[c] || 0) + 1
        }
       
        for ( const c of t ) {
            if(!stMap[c]) return false
            stMap[c]--
            
            
        }
        

        return true
       
    }
    isAnagram1(s, t) {
        if (s.length !== t.length) return false
        const fn = (w)=> w.split('').sort((a,b)=> a.localeCompare(b, undefined), {sensitivity: 'base'}).join()
        return fn(s) === fn(t)
       
    }
}
