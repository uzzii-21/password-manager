import React, { FC, ReactNode } from 'react'

interface IVault {
    icon: ReactNode;
    name: string;
    noOfPass: number;
}
const VaultCard: FC<IVault> = ({ icon, name, noOfPass }) => {
    return (
        <div className="rounded-xl p-4 bg-gray-100">
            {icon}
            <h2 className="text-xl font-semibold mt-8">
                {name}
            </h2>
            <p>{noOfPass} Passwords</p>
        </div>
    )
}

export default VaultCard