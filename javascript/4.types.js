const userProfile = {
    login: 'username',
    pass: 123456,
    isAuth: true
}
userProfile.pass = 654321
console.log(userProfile.pass)
// 654321

let oldPass = userProfile.pass // save value
console.log(oldPass)
// 654321

const fakeProfile = userProfile // copy by reference
fakeProfile.pass = 'qwerty'
console.log(userProfile.pass)
// qwerty

console.log(oldPass) // repeated value
// 654321


// ====================
const resProfile = Object.assign({}, userProfile)
resProfile.pass = 'null'

console.log(userProfile.pass)
// qwerty

// BUT links to enclosed options are saved

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
//const reAuth = Object.assign({}, newProfile.auth)
//reAuth.checkResult = false
newProfile.auth.checkResult = false
newProfile.login = 'nameUser'

console.log(newProfile)
console.log(myProfile)
