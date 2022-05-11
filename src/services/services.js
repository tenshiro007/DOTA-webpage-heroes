export const api=process.env.REACT_APP_API;

export const addHeroes=(heroes)=>{
    if(window!=="undefined"){
        if(sessionStorage.getItem("heroes")){
            sessionStorage.removeItem("heroes")
            sessionStorage.setItem("heroes",JSON.stringify(heroes))
        }else{
            sessionStorage.setItem("heroes",JSON.stringify(heroes))
        }
    }
}

export const getHeroes=()=>{
    if(window!=="undefined"){
        var myHeroes=sessionStorage.getItem("heroes")
        if(myHeroes && myHeroes!=="undefined"){
            return JSON.parse(sessionStorage.getItem("heroes"))
        }else{
            return false
        }
    }
}

export const deleteHeroes=()=>{
    if(window!=="undefined"){
        sessionStorage.removeItem("heroes")
    }
}