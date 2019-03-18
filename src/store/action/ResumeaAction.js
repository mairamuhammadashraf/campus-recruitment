export default createResume = (resume) => {
    return ( dispatch, getState ) =()=> {
        dispatch({type: 'CREATE-RESUME', resume});
    }

}