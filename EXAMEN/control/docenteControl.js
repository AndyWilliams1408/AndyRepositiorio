const Docente = require('../modelo/docente');

// Operación para crear un nuevo docente
exports.createDocente = async (req, res) => {
  try {
    const docente = new Docente(req.body);
    await docente.save();
    res.status(201).json(docente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el docente.' });
  }
};

// Operación para obtener todos los docentes
exports.getAllDocentes = async (req, res) => {
  try {
    const docentes = await Docente.find();
    res.json(docentes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los docentes.' });
  }
};

// Operación para obtener un docente por su ID
exports.getDocenteById = async (req, res) => {
  try {
    const docente = await Docente.findById(req.params.id);
    if (!docente) {
      res.status(404).json({ error: 'Docente no encontrado.' });
      return;
    }
    res.json(docente);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el docente.' });
  }
};

// Operación para actualizar un docente por su ID
exports.updateDocente = async (req, res) => {
  try {
    const docente = await Docente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!docente) {
      res.status(404).json({ error: 'Docente no encontrado.' });
      return;
    }
    res.json(docente);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el docente.' });
  }
};

// Operación para eliminar un docente por su ID
exports.deleteDocente = async (req, res) => {
  try {
    const docente = await Docente.findByIdAndRemove(req.params.id);
    if (!docente) {
      res.status(404).json({ error: 'Docente no encontrado.' });
      return;
    }
    res.json({ message: 'Docente eliminado exitosamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el docente.' });
  }
};