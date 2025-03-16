function otpGenerator(otpLength) {
    let otp = "";
    for (let i = 0; i < otpLength; i++) {
        otp = otp + Math.floor(Math.random() * 10);
    }
    return otp
}

console.log(otpGenerator(4))
