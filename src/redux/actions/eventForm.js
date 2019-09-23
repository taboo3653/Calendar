export const SHOW = "SHOW";
export const HIDE = "HIDE";

export const showEventForm = (info, date, isEdit = false) => (
    {
        type: SHOW,
        payload: {info, date, isEdit: (isEdit || info === undefined)}
    }
)

export const hideEventForm = () => (
    {
        type: HIDE,
    }
)
