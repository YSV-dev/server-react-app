const SET_LEGACY_BLEND = "SET_LEGACY_BLEND";

const defaultState = {
    gender: false,

    motherBlend: 0,
    fatherBlend: 0,
    fBlendShape: 0,
    fBlendSkin: 0,

    hairHighlight: 0,
    hairColour: 0,

    noseWidth: 0,
    noseHeight: 0,
    noseLength: 0,
    noseBridge: 0,
    noseBridgeShift: 0,

    browHeight: 0,
    browWidth: 0,

    cBoneHeight: 0,
    cBoneWidth: 0,

    cheekWidth: 0,

    eyes: 0,

    lips: 0,

    jawWidth: 0,
    jawHeight: 0,

    chinLength: 0,
    chinPos: 0,
    chinWidth: 0,
    chinShape: 0,

    neckWidth: 0
}

export default function appearanceReducer(state = defaultState, action){
    switch (action.type){
        case SET_LEGACY_BLEND:
            return {
                ...state, 
                gender: action.gender,
                motherBlend: action.motherBlend,
                fatherBlend: action.fatherBlend,
                fBlendShape: action.fBlendShape,
                fBlendSkin: action.fBlendSkin
            }
        default: return state;
    }
}

export const setLegacy = (gender, motherBlend, fatherBlend, fBlendShape, fBlendSkin) => 
(
    {
        type: SET_LEGACY_BLEND, 
        gender: gender,
        motherBlend: motherBlend,
        fatherBlend: fatherBlend,
        fBlendShape: fBlendShape,
        fBlendSkin: fBlendSkin
    }
);