// auth.js
import { auth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "./firebase-config.js";

// Función para iniciar sesión
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuario autenticado:", userCredential.user);
  } catch (error) {
    console.error("Error en inicio de sesión:", error.message);
  }
};

// Función para cerrar sesión
const logout = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada");
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
  }
};

// Verificar el estado del usuario
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuario activo:", user.email);
  } else {
    console.log("No hay usuario autenticado");
  }
});

export { login, logout };
