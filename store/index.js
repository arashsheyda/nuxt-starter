export const state = () => ({
    message: null,
});
  

export const mutations = {
    setMessage(state, message) {
        state.message = message;
    },
    clearMessage(state) {
        state.message = null;
    },
};

export const actions = {
   
};