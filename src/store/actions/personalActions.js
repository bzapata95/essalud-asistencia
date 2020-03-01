export const createPersonal = personal => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("personal")
      .add({
        ...personal,
        authorFirstName: "Net",
        authorLastName: "Firebase",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PERSONAL", personal });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PERSONAL_ERROR", err });
      });
  };
};
