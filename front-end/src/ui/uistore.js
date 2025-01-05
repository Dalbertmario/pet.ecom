import { createSlice } from "@reduxjs/toolkit"

const initialState={
    hoverDogstate:false,
    hoverCatstate:false,
    hoverMorepets:false,
    hoverBirds:false,
    hoverFish:false
}

const uiStoreReducer = createSlice({
    name:'uistore',
    initialState,
    reducers:{
        toggelDogHover:(state,action)=>{
            state.hoverDogstate = action.payload
            state.hoverCatstate = false
            state.hoverMorepets=false
        },
        toggelCathover:(state,action)=>{
            state.hoverCatstate = action.payload
            state.hoverDogstate = false
            state.hoverMorepets = false
        },
        toggleMorePets:(state,action)=>{
            state.hoverMorepets = action.payload
            state.hoverDogstate= false
            state.hoverCatstate= false
        },
        toggleBirds:(state,action)=>{
            state.hoverBirds =action.payload
            state.hoverFish = false
        },
        toggleFish : (state,action)=>{
            state.hoverFish = action.payload
            state.hoverFish = false
        }
    }
})

export const {toggelDogHover,toggelCathover,toggleMorePets,toggleBirds,toggleFish} = uiStoreReducer.actions
export default uiStoreReducer.reducer;