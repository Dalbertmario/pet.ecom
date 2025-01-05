import crypto from 'crypto'

const cryptoGeneration = crypto.randomBytes(32).toString('hex')
console.log(cryptoGeneration)

export default cryptoGeneration;