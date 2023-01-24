
const createError = (status, message) => {
    const err = new Error();
    err.status = 404;
    err.message = "Hey, Yo! something is InAccurate!";
    return err;
}

 module.exports = { createError }
 