const initialState = {
    text: 'sidebar'
};

const sidebarReduser = (state = initialState, action) => {
    let stateNew = JSON.parse(JSON.stringify(state));
    return stateNew;
}

export default sidebarReduser;