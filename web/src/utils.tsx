const getError = (error: any) => (error.response && error.response.data.message
  ? error.response.data.message
  : error.message);

export default getError;