// const validatorData = (req, res, next) => {
//   if (req.body.title === undefined || req.body.description === undefined){
//     return res.status(400).json({ message: 'Faltan datos'})
//   }

//   if (req.body.name.length < 8) {
//     return res.status(400).json({ message: 'El nombre es my corto' })
//   }

//   if (req.body.description < 18) {
//     return res.status(400).json({ message: 'Deve ser mayor de edad' })
//   }

//   console.log('Aqui')
//   next()
// }

// const validatorData = (req, res, next) => {
//   const { title, description, isdone, created_at } = req.body;

//   if (!title || !description || !isdone || !created_at) {
//     return res.status(400).json({ message: "Faltan campos obligatorios" });
//   }

//   req.validatedData = {
//     title,
//     description,
//     isdone,
//     created_at,
//   };

//   next(); 
// };

// module.exports = validatorData

const validateData = (req, res, next) => {
  try {
    const { title, description, isdone, created_at } = req.body;

    if (!title || !description || !isdone || !created_at) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const currentDate = new Date();
    const inputDate = new Date(created_at);

    if (inputDate > currentDate) {
      return res.status(400).json({ message: "La fecha de creación no puede ser en el futuro" });
    }

    req.validatedData = {
      title,
      description,
      isdone,
      created_at,
    };

    next();
  } catch (error) {
    res.status(500).json({ 
      message: "Error en el servidor",
      error: error.message, // Capturar el mensaje de error y pasarlo en la respuesta
    });
  }
};

module.exports = validateData;
