/*

 */
var Alphabet = {
    BINARY:        '01',
    OCTAL:         '01234567',
    DECIMAL:       '0123456789',
    HEXA_DECIMAL:  '0123456789abcdef',
    ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function convert(input, source, target) {
    let acc = 0
    let result = ''
    for (let sym of input) {
        acc *= source.length
        acc += source.indexOf(sym)
    }
    while (acc !== 0) {
        let d = target[acc % target.length]
        acc = Math.floor(acc / target.length)
        result = d.concat(result)
    }
    return !!result ?  result : target.at(0)
}

console.log(convert("15", Alphabet.DECIMAL, Alphabet.BINARY))
