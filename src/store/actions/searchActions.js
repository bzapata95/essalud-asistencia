export const searchPersonal = dni => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "SEARCH_LOADING" });
    const firestore = getFirestore();
    firestore
      .collection("personal")
      .where("dni", "==", `${dni}`)
      .where("estado", "==", true)
      .get()
      .then(function(querySnapshot) {
        if (querySnapshot.docs) {
          const data = querySnapshot.docs[0].data();
          const id = querySnapshot.docs[0].id;
          dispatch({ type: "SEARCH_SUCCESS", payload: { data, id } });
        } else {
          dispatch({ type: "SEARCH_NOT_FOUND" });
        }
      })
      .catch(function(error) {
        dispatch({ type: "SEARCH_ERROR", error });
      });
  };
};

export const resetSearch = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "SEARCH_RESET" });
  };
};
