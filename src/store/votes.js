let initialState = {
    candidates: [
        { name: 'Tareq', votes: 0 },
        { name: 'Suhaib', votes: 0 },
        { name: 'Ibrahim', votes: 0 },
    ],
    totalVotes: 0,
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'INCREMENT':
            let totalVotes = state.totalVotes ;
            let candidates = state.candidates.map(candidate => {
                if (candidate.name === payload) {
                    return { name: candidate.name, votes: candidate.votes + 1 }
                }
                return candidate;
            });
            return { totalVotes, candidates };
                   
          case 'RESET':
            return initialState;;
        default:
            return state
      }
}

// actions 
export const increment = (name) => {
    return {
        type: 'INCREMENT',
        payload: name
    }
};

export const decrement = (name) => {
    return {
        type: 'DECREMENT',
        payload: name
    }
};

export const reset = () => {
    return {
        type: 'RESET'
    }
};
    

  
    
   


