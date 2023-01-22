const userProfile = {
    login: 'name',
    pass: 123456,
    isAuth: true
}
function call() {
    console.log(userProfile)
}

const {login, pass} = userProfile
const {isAuth} = userProfile

console.log(login, pass, isAuth) // name 123456 true


const names = ['dude', 'solo', 'anime']

const [first, third, second] = names

console.log(first, third, second) // dude solo anime


const userInfo = ({login, isAuth}) => {
    if (isAuth = false) {
        return `${login}, check your e-mail`
    }

    return 'Welcome, ' + login

}

console.log(userInfo(userProfile)) // Welcome, name