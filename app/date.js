'use strict';

module.exports.endpoint = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hola, la fecha actual es ${new Date().toDateString()}.`,
        }),
    };

    callback(null, response);
};
