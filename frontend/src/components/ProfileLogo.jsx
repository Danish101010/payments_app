


export default function ProfileLogo({ firstName, lastName }) {
    return (
        <>
            <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-green-200 rounded-full dark:bg-green-600">
                <span class="font-medium text-white dark:text-white">{firstName.charAt(0) + lastName.charAt(0)}</span>
            </div>
            <span className="ml-3 text-xl font-semibold"> {`${firstName} ${lastName}`}</span>
        </>
    )


}