import {FC} from "react";

type DebugProp = {
    t: (key: any) => any
    params: Array<any>
    columns: number
}
const Debug: FC<DebugProp> = ({
                                  t,
                                  params,
                                  columns
                              }) => {
    return <div className={`grid grid-cols-${columns} gap-6 mb-3`}>
        {params.map((param: any, index: number) => <div
            className="dark:text-white overflow-x-auto border border-gray-600 p-3 rounded-lg" key={index}>
            <label className="font-bold">{param.name}</label>
            <pre>{JSON.stringify(param.value, null, 2)}</pre>
        </div>)}
    </div>
}

export default Debug
