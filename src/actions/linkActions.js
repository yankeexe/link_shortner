export function selectLink(linkData){
    console.log(linkData)
    return({
        type: 'SET_SELECTED_LINK',
        payload: linkData
    })
}

