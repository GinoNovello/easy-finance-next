import { dolarBlueData, dolarMep, dolarOficialData, dynamicDolarData } from "@/api/dolarapi";
import { Combobox } from "@/components/combo-box";
import DolarCalculator from "./dolar-calculator";
import DolarTable from "./dolar-table";

interface Props {
  searchParams: any
}

export default async function Dolar({searchParams}: Props) {
    const {country} = searchParams

    const oficialData = await dolarOficialData();
    const blueData = await dolarBlueData();
    const mepData = await dolarMep();

    let dolarValues = [oficialData, blueData, mepData]

    switch (country) {
      case "uy":
        dolarValues = [await dynamicDolarData("uy")]
        break;
      case "cl":
        dolarValues = [await dynamicDolarData("cl")]
        break;
      case "mx":
        dolarValues = [await dynamicDolarData("mx")]
        break;
      default:
        dolarValues = [oficialData, blueData, mepData]
    }


  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Combobox />
        <DolarTable dolarValues={dolarValues}  />
        <DolarCalculator dolarValues={dolarValues} country={country} />
    </section>
  );
}
