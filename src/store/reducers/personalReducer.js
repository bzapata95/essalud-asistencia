const initState = {
  personales: [
    {
      id: "1",
      dni: "70430819",
      nombres: "Bryan Zapata",
      fechNacimiento: "12-12-21",
      celular: "987654321",
      cargo: "Programador senior",
      estado: true
    },
    {
      id: "2",
      dni: "98765432",
      nombres: "Otro gato",
      fechNacimiento: "12-12-21",
      celular: "123445234",
      cargo: "ingsistemas",
      estado: false
    },
    {
      id: "3",
      dni: "98765432",
      nombres: "Otro gato",
      fechNacimiento: "12-12-21",
      celular: "123445234",
      cargo: "ingsistemas",
      estado: true
    }
  ]
};

const personalReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PERSONAL":
      console.log("created personal", action.personal);
      return state;
    case "CREATE_PERSONAL_ERROR":
      console.log("create personal error", action.err);
      return state;
    default:
      return state;
  }
};

export default personalReducer;
