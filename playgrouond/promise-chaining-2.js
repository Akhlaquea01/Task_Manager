require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndDelete('5fcfad18aa2b603a8c675339').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed : false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteAgeAndCount = async(id)=>{
    const user = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed : false })
    return count
}
deleteAgeAndCount('5fcfc995f45bb45054e688fe').then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
});