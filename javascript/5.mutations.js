// There are few ways to reassign values inside new objects

// 1
const userName = 'Username'
const userPass = 123456

const myProfile = {
    login: userName,
    pass: userPass,
    auth: {
        checkResult: true
    }
}

const newProfile = Object.assign({}, myProfile)
console.log(newProfile)
const reAuth = Object.assign({}, newProfile.auth)
reAuth.checkResult = false
newProfile.auth = reAuth
newProfile.login = 'nameUser'

console.log(newProfile)
console.log(myProfile)

// 2
const newestProfile = { ...myProfile }

// 3
const jsonProfile = JSON.parse(JSON.stringify(myProfile))
console.log(jsonProfile)
jsonProfile.auth.checkResult = false
console.log(jsonProfile)
console.log(myProfile)