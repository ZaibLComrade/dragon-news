import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config"
import { createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup,
	GithubAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, userState => setUser(userState));
		return () => unsubscribe();
	}, [])
	
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	
	const signInUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	}
	
	const signOutUser = () => {
		return signOut(auth);
	}
	
	const updateName = (userCred, name) => {
		return updateProfile(userCred, { displayName: name });
	}
	
	const googleSignIn = () => {
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	}
	
	const githubSignIn = () => {
		const githubProvider = new GithubAuthProvider();
		return signInWithPopup(auth, githubProvider);
	}
	
	const authData = {
		user,
		createUser,
		signInUser,
		signOutUser,
		updateName,
		googleSignIn,
		githubSignIn,
	}
	
	return <AuthContext.Provider value={ authData }>
		{ children }
	</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node,
}
