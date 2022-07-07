export const initialstate = {
    profile: null,
    carts: null,
    cartproduct_complit: null,
    cartproductf_uncomplit: null,
    reloadpage: null,
    product:null
}

const reducer = (state, action) => {
    // console.log(action.type);
    switch (action.type) {
        case "ADD_PROFILE":
            return {
                ...state,
                profile: action.profile,
            };
        case "ADD_CART":
            return {
                ...state,
                carts: action.carts,
            }
        case "ADD_CARTPRODUCT_COMPLIT":
            return {
                ...state,
                cartproduct_complit: action.cartproduct_complit
            }
        case "ADD_CARTPRODUCT_UNCOMPLIT":
            return {
                ...state,
                cartproductf_uncomplit: action.cartproductf_uncomplit
            }
        case "ADD_RELOADPAGE_DATA":
            return {
                ...state,
                reloadpage: action.reloadpage
            }
        case "ADD_PRODUCT":
            return {
                    ...state,
                    product: action.product,
            }
        case "ADD_ARTICLE":
                return {
                    ...state,
                    article: action.article,
                }
        default:
            return state;
    }
};

export default reducer;