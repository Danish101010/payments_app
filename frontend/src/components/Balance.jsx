

export default function Balance({ amount }) {

    return (
        <div className="flex w-[50%] md:w-[30%] flex-col mt-5 md:ml-10 m-2 px-2 text-xl border-3 rounded-lg shadow-md shadow-gray-800">
            <div className="">
                Your Balance
            </div>
            <div className="font-bold text-4xl pb-3 pt-1">
                Rs. {amount} /-
            </div>
        </div>
    )
}