const notFoundMiddleware = async (req, res) => {
  return res.status(404).json({
    error: "Endpoint no encontrado",
    path: req.originalUrl,
    method: req.method
  });
}

export default notFoundMiddleware