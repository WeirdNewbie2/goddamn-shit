const newProfile = (profile, regTime = Date ()) => ({
    ...profile,
    regTime
})

const userProfile = {
    login: 'asdqwe',
    pass: 123456

}

console.log(newProfile(userProfile)) 
/* {
  login: 'asdqwe',
  pass: 123456,
  regTime: 'Wed Jan 18 2023 23:39:00 GMT+0200 (Восточная Европа, стандартное время)'
} */

const errorTrig = () => {
    throw new Error('error')
}

try {
    errorTrig()
}   catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('continue')