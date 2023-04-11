import { getEmployData } from "../localStorage/LocalStorage"

 const jobDataLoader = async() =>{
    const res = await fetch('/jobData.json')
    const data = await res.json()

    const storeData = getEmployData()
    const savedData = []
    for(const id in storeData){
        const addedData = data.find(d => d.id == id)
        if (addedData) {
            savedData.push(addedData)
        }
    }
    return savedData
}

export {jobDataLoader}