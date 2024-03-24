// Created an interface for the validation which implemention is below.
interface ValidationRules {
  [key: string]: {
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

export const formValidations: ValidationRules = {
  firstName: {
    required: "First name is required",
    minLength: {
      value: 2,
      message: "First name must be at least 2 characters long",
    },
    maxLength: {
      value: 30,
      message: "First name cannot exceed 30 characters",
    },
  },
  lastName: {
    required: "Last name is required",
    minLength: {
      value: 2,
      message: "Last name must be at least 2 characters long",
    },
    maxLength: {
      value: 30,
      message: "Last name cannot exceed 30 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Invalid email address",
    },
  },
  phoneNumber: {
    required: "Phone number is required",
    pattern: {
      value: /^\d{10}$/,
      message: "Invalid phone number",
    },
  },
  address: {
    required: "Address is required",
    maxLength: {
      value: 100,
      message: "Addess cannot exceed 100 characters",
    },
  },
  parentNames: {
    required: "Parents Name required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters long",
    },
  },
  dob: {
    required: "Date of birth required",
  },
  relation: {
    required: "Relationship required",
  },
};
