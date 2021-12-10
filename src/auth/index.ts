interface Auth {
  login: (email: string, password: string) => Promise<void>;
}

const auth: Auth = {
  login: async (email: string, password: string) => {
    console.log(email, password);
  },
};

export default auth;
