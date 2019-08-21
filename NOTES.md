# React State Masterclass
    - slides: https://www.slideshare.net/nirkaufman/redux-pattens-jsheroes-2018

## CQS
    - "Command Query separation"
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
    - BUSINESS LOGIC should land in two locations:
        - middleware, to handle post-action side effects
        - selectors, to handle pre-view side effects
    - INTERESTING SLIDE: #35, action processing patterns

## Recreating MVC with React State patterns
    1. State ⬇
    2. Hooks ⬇
    3. Views

    - Action Creators === Commands
    - Selectors === Queries
