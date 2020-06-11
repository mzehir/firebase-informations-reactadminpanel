import Fire from './config'

class LoginFire {

    async registerBringToFirebase(email, password) {
        try {
            let user = await Fire.auth.signInWithEmailAndPassword(email, password)
            if(user) {
                return user
            }
        } catch (error) {
            alert(error.message)
        }
    }

}


export default new LoginFire()