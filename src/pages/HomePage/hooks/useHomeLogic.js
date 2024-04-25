import { useState } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../../firebase";

import useAuthStoreSelectors from "../../../stores/useAuthStore";

const useHomeLogic = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUpActive, setIsSignUpActive] = useState(true);
    const user = useAuthStoreSelectors.use.user();
    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    const handleSignUp = () => {
        if (!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
    };

    const handleSignIn = () => {
        if (!email || !password) return;
        signInWithEmailAndPassword(auth, email, password).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
    };

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    return {
        email,
        password,
        isSignUpActive,
        user,
        handleMethodChange,
        handleSignUp,
        handleSignIn,
        handleEmailChange,
        handlePasswordChange
    };
}

export default useHomeLogic;