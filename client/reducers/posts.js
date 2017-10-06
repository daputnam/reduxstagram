// a reducer takes in two things
// 1. the action
// 2, copy of current state

function posts(state=[], action){
  // console.log("The post will change posts.js");
  // console.log(state, action);

  switch (action.type) {
    case "INCREMENT_LIKES":
      console.log("Incrementing likes");
      const i = action.index;
    //return the updated state
      return [
        ...state.slice(0,i), //before what we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1),//after what we are updating

      ]
      break;
    default:
        return state;
  }
}

export default posts;
