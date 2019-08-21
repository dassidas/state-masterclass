# React State Masterclass

## CQS
    - very old design pattern
    - separate code that writes to the store from code that reads from the store
    - inspiration for redux

## Redux Design pattern
    1. there is an application state store
    2. selectors read from state store
    3. UI renders off of selected state
    4. action creators... create actions
    5. actions (optionally) are sent to middleware
        - secondary loop: middleware => action => middleware
    6. reducers interpret actions and create the next application state

    - ACTIONS, not state, are the source of truth
    - state is the cached result of a series of actions
    - "the advantage of redux is to create a predictable flow"
        - mixing redux with other patterns ruins the benefits
    - important divide: COMPONENT STATE / APPLICATION STATE
    - selectors should interpret state based on what individual view needs
        
