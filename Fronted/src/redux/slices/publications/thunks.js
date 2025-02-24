import { setAllPublications, startLoadingPublication, addPublication } from "./publicationSlice";
import { Api } from "../../../api/Api";

export const getAllPublications = ({ user_id }) => {
    return async (dispatch) => {
        dispatch(startLoadingPublication());

        const { data } = await Api.get(`/publication/all/${user_id}`);

        dispatch(setAllPublications({
            publications: data
        }))
    }
}

export const createPublication = ({ user_id, description }) => {
    return async (dispatch) => {
        try {
            const { data } = await Api.post("/publish", { user_id, description });

            dispatch(addPublication(data));
        } catch (error) {
            console.error("Error", error);
        }
    };
};

export const createReaction = ({ user_id, publication_id, value }) => {
    return async () => {
        try {
            await Api.put("/reaction", { user_id, publication_id, value });
        } catch (error) {
            console.error("Error", error);
        }
    };
};