export const FIRST_NAME_RULES = {
    first_name: {
        presence: { allowEmpty: false, message: "First name cannot be empty" },
        length: { minimum: 3, message: "First name minimum 3 chars" },
    },
}

export const MOBILE_NUMBER_RULES = {
    mobile_number: {
        presence: { allowEmpty: false, message: "Mobile number cannot be empty" },
        length: { is: 10, message: "Mobile number should be 10 number" },
    }
}

export const EMAIL_RULES = {
    email: {
        presence: { allowEmpty: false, message: "Email is required" },
        format: {
            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: "Please enter a valid email address"
        }
    }
};

export const ADDRESS = {
    communication_address: {
        presence: { allowEmpty: false, message: "Address cannot be empty" },
    }
}

export const PINCODE = {
    pincode: {
        presence: { allowEmpty: false, message: "Pincode cannot be empty" },
        length: { is: 6, message: "Pincode should be 6 number" },
    }
}


export const PASSWORD = {
    password: {
        presence: { allowEmpty: false, message: "Password cannot be empty" },
        length: { minimum: 8, message: "Password minimum 8 chars" },
    }
}
