import { RequestOptionsInterface } from "@/interfaces/RequestOptionsInterface";
import { createStore } from "vuex";

export default createStore({
  state: {
    userId: <string>localStorage.getItem("UserId"),
    userInfo: <any>[],
    userGrade: <string>"",
    showOrHideSubscriptionCard: <boolean>false,
  },
  getters: {},
  mutations: {
    showSubscriptionCard(state, payload): void {
      state.showOrHideSubscriptionCard = !state.showOrHideSubscriptionCard;
    },
  },
  actions: {
    async logout(context, payload): Promise<void> {
      try {
        const requestOptions: RequestOptionsInterface | any = {
          method: "PATCH",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        };

        const response = await fetch(
          `http://192.168.1.241:3000/registration/logout/${this.state.userId}`,
          requestOptions
        );
        const data = await response.json();

        if (data.statusCode >= 200 && data.statusCode < 300) {
          localStorage.clear();
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
