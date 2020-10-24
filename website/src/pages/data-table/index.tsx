import React from "react";
import { DataTable } from "pamai";

type AppProps = { message?: string };

const SimpleText = ({ message }: AppProps) => {
    return (
        <div>
            <DataTable />
        </div>
    )
}
 
export default SimpleText;