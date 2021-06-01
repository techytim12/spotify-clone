export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove the token ⏬   after development. this token authenticates the user & stays logged in
    //token: "BQBMTfR3ke5FegMNhxOxsTE6p7_HaLE7lysZFqutvuatKWyIeKh52U9yxTOJWQ-XXWIbt5TS7UQo3hqgCCbKSbbWiEVPq10OzF78748YVV1a5Dkn01B5UD7LT62JZ4vW5j5XNY-ZvP5Rum3f4AjD8C7e9utKsQ0c4fB1lqmkGo86JhTwrvXG"
}

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
               discover_weekly: action.discover_weekly, 
            }

        default:
            return state;
    }
};

export default reducer;