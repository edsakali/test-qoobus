export const isEmail = (value: string) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value);
  }

  export const isStandartPassword = (value: string) => {
    const standartPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!$.,^%@#£€*?&]{8,}$/;
    return standartPassword.test(value);
  }

  export const checkLength = (value: string, length: number) => value.length >= length