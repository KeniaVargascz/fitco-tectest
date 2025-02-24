import { setUser, startLoadingUser } from "./userSlice";
import { Api } from "../../../api/Api";

export const getUser = ({ username }) => {

    return async (dispatch) => {
        dispatch(startLoadingUser());

        try {
            const { data } = await Api.get(`/user/${username}`);

            dispatch(setUser({
                user: data,
                error: false
            }))
        } catch (error) {
            dispatch(setUser({
                error: true,
            }))
        }
    }
}