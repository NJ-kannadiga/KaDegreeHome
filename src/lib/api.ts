const BASE_URL = "http://localhost:5000/api";

export const api = {
  async startSession() {
    try {
      const res = await fetch(`${BASE_URL}/start_session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) throw new Error('Failed to start session');
      return await res.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  async sendMessage(sessionId: number, content: string) {
    try {
      const res = await fetch(`${BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, content })
      });
      if (!res.ok) throw new Error('Failed to send message');
      return await res.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  async getRoadmap(userId: number) {
    try {
      const res = await fetch(`${BASE_URL}/roadmap/${userId}`);
      if (!res.ok) throw new Error("Roadmap not ready");
      return await res.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }
};
