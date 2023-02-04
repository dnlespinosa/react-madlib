function addCommas(num) {
    let nums = Array.from(String(num), Number)
    let numArr = []
    while (nums.length > 0) {
        numArr.push(nums.splice(nums.length-3))
    }

    let str = ''
    for (let i=0; i<numArr.length; i++) {
        str = ','+String(numArr[i]).replaceAll(',','')+str
    }

    if (str[0] === ',') {
        str = str.replace(',', '')
    }

    return str
}



module.exports = addCommas;