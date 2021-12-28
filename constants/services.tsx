//Auth Services
export const AUTH = {
  BASE: "/auth",
  LOCAL: "/local",
  REGISTER: "/local/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  EMAIL_CONFIRMATION: "/email-confirmation",
  CHANGE_PASSWORD: "/change-password",
  SEND_EMAIL_CONFIRMATION: "/send-email-confirmation",
  PROVIDER: {
    CONNECT: "/connect",
    CALLBACK: "/callback",
  },
};

//Common sercice
export const COMMON = {
  EMAIL: "/send-email",
};

//Users Services
export const USERS = {
  BASE: "/users",
};

//Users Services
export const USERINFO = {
  BASE: "/user-infos",
  ME: "me",
};

//File services
export const FILE = {
  BASE: "/upload",
  FILE: "/files",
};

export const LANGUAGES = {
  BASE: "/languages",
};
