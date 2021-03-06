import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../firebase.config';

export const initializeAppFirebase = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


// SignIn With Google
export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            return successfulResponse(res);
        })
        .catch(error => {
            return errorResponse(error);
        });
}


// SingUp With Name, Email and Password
export const signUpWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            return firebase.auth().currentUser.updateProfile({
                displayName: name,
            }).then(() => {
                console.log(res)
                const { displayName, email, photoURL } = res.user;
                return ((prevData) => {
                    return {
                        ...prevData,
                        name: displayName,
                        email,
                        photo: photoURL,
                        isSignIn: true,
                        error: null
                    }
                })
            });
        })
        .catch(error => {
            return errorResponse(error)
        })
}

// SingIn with Email and Password
export const signInWithEmailAndPasswordOwn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            return successfulResponse(res);
        })
        .catch(error => {
            return errorResponse(error);
        })

}




// if response successful
function successfulResponse(res) {
    const { displayName, email, photoURL, emailVerified } = res.user;
    return ((prevData) => {
        return {
            ...prevData,
            name: displayName,
            email,
            photo: photoURL,
            isValidEmail: emailVerified,
            isSignIn: true,
            error: null
        }
    })
}

// if response error 
function errorResponse(error) {
    const errorMessage = error.message;
    return ((prevData) => {
        return {
            ...prevData,
            error: errorMessage
        }
    })
}