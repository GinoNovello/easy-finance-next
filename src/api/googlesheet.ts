import { GoogleSheetResponse } from "@/types/googlesheet/types"


const googleApi = {
    transaccion:{
        list: async ():Promise<GoogleSheetResponse[]>=>{
            return(
                fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSaf7B751LDmkK6_GLYYOEj_MD_K9X_xbIu-XxrLFjgcGW2vWNo6U746AetXqukqZD6N5-GMWCoXx0n/pub?output=tsv",
                    { next: { tags: ["transaccion"] },},
                )
                .then(response => response.text())
                .then(text => {
                    return text.split("\n").slice(1).map((row) => {
                        const [fecha, gasto, tipo] = row.split("\t");
                       
                        return {
                            fecha,
                            gasto: parseFloat(gasto),
                            tipo
                        }
                })
            })
        )
        }
    }
}



export default googleApi