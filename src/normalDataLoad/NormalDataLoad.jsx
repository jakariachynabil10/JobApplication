export const NormalDataLoad = async () =>{
    const res = await fetch('normalData.json')
    const data = await res.json()
    return data

}