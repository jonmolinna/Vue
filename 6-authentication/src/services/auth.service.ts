import { Ref, ref } from "vue";

class AuthService {
  private jwt: Ref<string>;
  private error: Ref<string>;

  constructor() {
    this.jwt = ref("");
    this.error = ref("");
  }

  getJwt(): Ref<string> {
    return this.jwt;
  }

  getError(): Ref<string> {
    return this.error;
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await fetch("http://localhost:9000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("TOOOOO", data.access_token);

      if ("errors" in data) {
        this.error.value = "Login Failed";
        return false;
      }

      this.jwt.value = data.access_token;
      return true;
    } catch (err) {
      console.log("Error", err);
      this.error.value = "Login Failed";
      return false;
    }
  }
}

export default AuthService;
