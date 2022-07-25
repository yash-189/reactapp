


const a1 = 0;


const Number = (state = a1, action) => {

    switch (action.type) {
        case 'Greater':

            state = Math.floor((Math.random() * 30) + 1)

            if (state > 10) {
                alert(`Target Achieved ${state}`)
                

            } else {
                return state;
            }
            break;

        default:
            break;
    }
    return state


}
export default Number;