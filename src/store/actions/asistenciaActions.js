export const createAsistencia = personal => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("asistencias")
      .add({
        ...personal
      })
      .then(() => {
        dispatch({ type: "ASISTENCIA_SUCCESS", personal });
      })
      .catch(err => {
        dispatch({ type: "ASISTENCIA_ERROR", err });
      });
  };
};
