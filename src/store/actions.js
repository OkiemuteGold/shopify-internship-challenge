export const fetchNasaImages = ({ commit, state }) => {
    console.log("here 1")
    let url = `${state.apiUrl}?sol=1000&page=2&api_key=${state.apiKey}`;
    // console.log(state.apiUrl)

    this.$axios.get(url).then((response) => {
        commit("SAVE_NASA_IMAGES", response.data.photos);

        localStorage.setItem("nasaImages", JSON.stringify(response.data.photos))
        console.log(response.data.photos);

    }).catch((error) => {
        console.log(`Error: ${error}`);
    })
}

export const saveNasaImages = ({ commit }, data) => {
    commit("SAVE_NASA_IMAGES", data);
}