import { DolarResponse } from "@/types/dolarapi/types";

const BASE_URL = "https://dolarapi.com/v1/dolares";



export const dolarOficialData = async():Promise<DolarResponse>=> {
    const res  = await fetch(`${BASE_URL}/oficial`, { next: { revalidate: 3600 }})
    if(!res.ok){
        throw new Error('Error al traer los datos');
    }
    const data = await res.json();
    return data;
}

export const dolarBlueData = async():Promise<DolarResponse>=> {
    const res  = await fetch(`${BASE_URL}/blue`, { next: { revalidate: 3600 } })
    if(!res.ok){
        throw new Error('Error al traer los datos');
    }
    const data = await res.json();
    return data;
}

export const dolarMep = async():Promise<DolarResponse>=> {
    const res  = await fetch(`${BASE_URL}/contadoconliqui`, { next: { revalidate: 3600 } })
    if(!res.ok){
        throw new Error('Error al traer los datos');
    }
    const data = await res.json();
    return data;
}
