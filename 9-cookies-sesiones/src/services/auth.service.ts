import { inject, Ref, ref } from "vue";
import { VueCookies } from "vue-cookies";

class AuthService {
  private jwt: Ref<string>;
  private error: Ref<string>;
  $cookies = inject<VueCookies>("$cookies");

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
      this.jwt.value = data.access_token;
      // this.$cookies?.set("cookie-auth", data.access_token);
      $session.start();
      $session.set("auth", data.access_token);
      return true;
    } catch (error) {
      this.error.value = "Login Failed";
      return false;
    }
  }
}

export default AuthService;
