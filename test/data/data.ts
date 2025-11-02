export const users = {
  validUser: {
    email: "cbAtm@test.com",
    password: "1234423",
    phone: "12346897",
    company:"chrisatm",
    Username:"practice",
    PasswordUI:"SuperSecretPassword!",
  },
  dataInvalid:{
    user:"23giugbwqu$%&/#",
    password: "basidñfubdsuibf"
  }
};

const BASE = "https://practice.expandtesting.com/"
export const url = {
    base : BASE,
    notes: `${BASE}notes/api`,
    user : `${BASE}notes/api/users`,
    login : `${BASE}login`,
    register : `${BASE}register`

}
