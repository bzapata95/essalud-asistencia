export const createPersonal = personal => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("personal")
      .add({
        ...personal,
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

export const updateEstado = (id, estado) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("personal")
      .doc(`${id}`)
      .update({
        estado: !estado
      })
      .then(() => {
        dispatch({ type: "UPDATE_STATUS_SUCCESS" });
      })
      .catch(err => console.log(err));
  };
};

export const updatePersonal = personal => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("personal")
      .doc(`${personal.id}`)
      .update({
        dni: personal.dni,
        nombres: personal.nombres,
        fechNacimiento: personal.fechNacimiento,
        celular: personal.celular,
        cargo: personal.cargo,
        updatedAt: new Date()
      })
      .then(() => {
        dispatch({ type: "UPDATE_PERSONAL_SUCCESS", personal });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_PERSONAL_ERROR", err });
      });
  };
};

export const createJustificacion = personal => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("justificaciones")
      .add({ ...personal, fechEmision: new Date(), fechJustificado: "" })
      .then(() => {
        dispatch({ type: "CREATE_JUSTIFICACION", personal });
      })
      .catch(err => {
        dispatch({ type: "CREATE_JUSTIFICACION_ERROR", err });
      });
  };
};

export const justificar = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("justificaciones")
      .doc(`${id}`)
      .update({
        fechJustificado: new Date(),
        estado: false
      })
      .then(() => {
        dispatch({ type: "UPDATE_JUSTIFICACION", id });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_JUSTIFICACION_ERROR", err });
      });
  };
};

export const deleteJustificacion = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("justificaciones")
      .doc(`${id}`)
      .delete()
      .then(() => {
        console.log("deleted");
      })
      .catch(err => {
        console.log(err);
      });
  };
};
