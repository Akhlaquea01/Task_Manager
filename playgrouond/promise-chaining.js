require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5fd11674f459f52d8843aee0', { age: 11 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 11 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })
const updateAgeAndCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}
updateAgeAndCount('5fd11674f459f52d8843aee0',15).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
});