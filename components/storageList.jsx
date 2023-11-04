import { NextResponse } from "next/server";

const getStorage = async () => {
    console.log("getStorage start")
    try {
        const res = await fetch("http://127.0.0.1:3000/api/storages", { cache: "no-store", });
        //const test = res.json();
        // console.log("Returning getStorage: " + test);
        // console.log("%j", test);
        // console.log(JSON.stringify(test));
        // console.log(test);
        return res.json();
    } catch (error) {
        console.log(error)
    }
}
// const getStorage = async () => {
//     console.log("getStorage start")
//     try {
//         const res = await fetch("http://127.0.0.1:3000/api/storages")
//             .then((response) => response.json()).then((responseJSON) => {
//                 console.log(responseJSON);
//                 const test = responseJSON;
//                 return test;
//             });
//     } catch (error) {
//         console.log(error)
//     }
// }


export default async function StorageList() {
    const { storages } = await getStorage();
    console.log();
    return (
        <div>
            {storages.flat().map((t) => (
                <div>
                    <h2 style={{ color: "white" }}>Divider</h2>
                    <h2 style={{ color: "white" }}>Asiakas: {t.asiakas}</h2>                    <div>
                        {t.varastot.map((e) =>
                            <div>
                                <p style={{ color: "white" }}>Sijainti: {e.nimi}</p>
                                <p style={{ color: "white" }}>Varastonkoko: {e.varastonkoko}</p>
                                <p style={{ color: "white" }}>Viimejakelu: {e.viimejakelu}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}