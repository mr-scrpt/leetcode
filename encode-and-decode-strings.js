class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length < 1) return [""]
        if (strs.length < 2) return ""
        return strs.join(';')
       
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.length ? str.split(';') : [""]
    }
}
