import { createSlice } from "@reduxjs/toolkit"

const initialState={
    hoverDogstate:false,
    hoverCatstate:false,
    hoverMorepets:false,
    hoverBirds:false,
    hoverFish:false,
    sandwich:false,
    sandwichdog:false,
    sandwichcat:false,
    role:null,
    carttoggle:false
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
        },
        togglesandWitch:(state)=>{
            state.sandwich = !state.sandwich
            state.carttoggle = false
            if(state.sandwich === false) {
                state.sandwichcat = false
                state.sandwichdog = false
            }

        },
        togglesandwichCat:(state)=>{
            state.sandwichcat = !state.sandwichcat,
            state.sandwichdog= false
        },
        togglesandwichDog:(state)=>{
            state.sandwichdog = !state.sandwichdog
            state.sandwichcat = false
        },
        settingUser:(state,action)=>{
            state.role = action.payload
            localStorage.setItem('role',JSON.stringify(action.payload))
        },
        setCartToggel:(state)=>{
            state.carttoggle = !state.carttoggle
            if(state.carttoggle === true){
                state.sandwich = false
            }
        }
    }
})

export const {toggelDogHover,toggelCathover,toggleMorePets,toggleBirds,toggleFish,togglesandWitch,togglesandwichCat,togglesandwichDog,settingUser, setCartToggel} = uiStoreReducer.actions
export default uiStoreReducer.reducer;