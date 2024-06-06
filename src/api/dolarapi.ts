import { DolarResponse } from "@/types/dolarapi/types";

export const dolarOficialData = async():Promise<DolarResponse>=> {
    const res  = await fetch('https://dolarapi.com/v1/dolares/oficial', { next: { revalidate: 3600 }})
    if(!res.ok){
        throw new Error('Error al traer los datos');
    }
    const data = await res.json();
    return data;
}

export const dolarBlueData = async():Promise<DolarResponse>=> {
    const res  = await fetch('https://dolarapi.com/v1/dolares/blue', { next: { revalidate: 3600 } })
    if(!res.ok){
        throw new Error('Error al traer los datos');
    }
    const data = await res.json();
    return data;
}
