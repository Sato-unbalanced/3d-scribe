import { s as setContext, g as getContext, c as create_ssr_component, a as subscribe } from "./ssr.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { w as writable } from "./index.js";
function userStore(auth, startWith = null) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe3 } = writable(startWith);
    return {
      subscribe: subscribe3
    };
  }
  if (!auth) {
    console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe3 } = writable(null);
    return {
      subscribe: subscribe3
    };
  }
  const { subscribe: subscribe2 } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });
  return {
    subscribe: subscribe2
  };
}
const contextKey = "firebase";
function setFirebaseContext(sdks) {
  setContext(contextKey, sdks);
}
function getFirebaseContext() {
  return getContext(contextKey);
}
const SignedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const auth = getFirebaseContext().auth;
  const user = userStore(auth);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({
    user: $user,
    auth,
    signOut: () => signOut(auth)
  }) : ``}` : ``}`;
});
const SignedOut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  const auth = getFirebaseContext().auth;
  const user = userStore(auth);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${!$user ? `${slots.default ? slots.default({ auth }) : ``}` : ``}`;
});
export {
  SignedIn as S,
  SignedOut as a,
  setFirebaseContext as s
};
