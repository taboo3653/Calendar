export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";

export const addEvent = (date, name, participants, description) => (
    {
        type: ADD,
        payload: {date, name, participants, description}
    }
)


export const deleteEvent = (event) => (
    {
        type: DELETE,
        payload: event,
    }
)

export const updateEvent = (id, date, name, participants, description) => (
    {
        type: UPDATE,
        payload: {id, date, name, participants, description}
    }
)