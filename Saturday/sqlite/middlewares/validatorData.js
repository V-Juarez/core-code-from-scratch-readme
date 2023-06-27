const validatorData = (request, response, next) => {
  if(request.body.name === undefined || request.body.age === undefined){
    return response.status(400).json({ message: 'Faltan datos' })
  }

  if (request.body.name.length < 4) {
    return response.status(400).json({ message: 'El nombre es my corto' })
  }

  if (request.body.age < 18 ) {
    return response.status(400).json({ message: 'Debe ser mayor de edad' })
  }
  console.log('Aqui');
  next()
}

module.exports = validatorData