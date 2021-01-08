import React, { useReducer, createContext, useContext } from "react"
import stateReducer from "./stateReducer"

const Context = createContext()

export function useCurtainContext() {
    return useContext(Context)
}

function CurtainContext({ children }) {
    // initial state for state reducer
    const initialState = {
        loggedIn: null,
        currentUser: null,
        users: [],
        snackbar: {
            severity: "success",
            message: "",
            open: false,
        },
        modal: {
            open: false,
            title: "",
            message: "",
            data: {},
            paymentSummary: false,
            orderSummary: false,
        },
        products: [],
        collections: [],
        customizedCollection: { track: [], fabric: [], accessory: [] },
        consults: [],
        orders: [],
        cart: [],
        discounts: {
            mostProducts: 12,
            mostProductsMultiplier: 0.8,
            someProducts: 8,
            someProductsMultiplier: 0.9,
            littleProducts: 4,
            littleProductsMultiplier: 1,
        },
    }

    const [state, dispatch] = useReducer(stateReducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default CurtainContext
