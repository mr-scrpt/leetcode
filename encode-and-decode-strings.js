class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    sep = '#'

    
    encode(strs) {
        let res = ""
        const len = strs.length
        if(!len) return res
        
        for (let [i,str] of strs.entries()){
            const strLen = str.length
            res += `${strLen}${this.sep}${str}`

        }
        console.log('encode',res)
        return res
       
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode_v1(str) {
        
        if (!str.length) return [] 
      
        const res = []
      
        
        let i = 0
        let count = ''
            
        while(i < str.length){
                
            const char = str[i]
            
            if(!isNaN(Number(char))) count += char
            
            
            
            if(char === this.sep && !!count.length){
                const wEnd = i + 1 + Number(count)
                const w = str.slice(i+1, wEnd)
                
                res.push(w)
                count = ''
                console.log('end',wEnd)
                i = wEnd
                continue
            }        
                i++
        }
            
       
        console.log('res', res)
        return res
    }
        decode(str) {
        
        if (!str.length) return [] 
      
        const res = []
      
        
        let i = 0
        let count = ''
            
        while (i < str.length) {
           
            const j = str.indexOf(this.sep, i); 
            
           
            const countStr = str.slice(i, j);
            const count = Number(countStr);
        
            
            const word = str.slice(j + 1, j + 1 + count);
            res.push(word);
        
           
            i = j + 1 + count;
        }
            
       
        console.log('res', res)
        return res
    }
}

const inst = new Solution()
const input = ["neet","o","code","kdkdkdkdkdkdkdkdkksksks","love","you"]
const input2 = [""]
const input3 = []
const input4 = ["1,23","45,6","7,8,9"]
const res = inst.encode(input)
const res2 = inst.decode(res)
console.log('decode',res2)