const generalServerError = () => {
    return {code: '99', message: 'Unknown error occurred. Please contact administrator.'};
}

module.exports  = {generalServerError}