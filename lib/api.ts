const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name?: string;
  };
};

export type RegisterData = {
  email: string;
  password: string;
  name?: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export const auth = {
  async register(data: RegisterData): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to register");
    }

    return res.json();
  },

  async login(data: LoginData): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to login");
    }

    return res.json();
  },

  async getProfile(token: string) {
    const res = await fetch(`${API_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to get profile");
    }

    return res.json();
  },
};
