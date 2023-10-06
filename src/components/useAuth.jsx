import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

export default function useAuth() {
	const contextData = useContext(AuthContext);
	return contextData;
}
