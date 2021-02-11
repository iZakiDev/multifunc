function probot_tax(amount) {
    if (!amount) throw new ReferenceError('@multifunc => "amount" is not defined')
    let tax = parseInt(amount) == 1 ? parseInt(amount) : Math.floor(amount * (5 / 100));
    return tax;
};

module.exports = probot_tax;