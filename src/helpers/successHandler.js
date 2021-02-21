const successResponse = (res, status, message, data) => {
  res.status(status).json({
    success: true,
    status,
    message,
    data
  });
};
export default successResponse;
