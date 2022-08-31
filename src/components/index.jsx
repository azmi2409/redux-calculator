import React from "react"

const Container = React.memo(({ children }) => {

    React.useEffect(() => {
        console.log("Container rendered")
    })

    return (
        <main className='flex justify-center min-h-screen items-center'>
            {children}
        </main>
    )
})

const Wrapper = React.memo(({ children }) => {

    React.useEffect(() => {
        console.log("Wrapper rendered")
    })

    return (
        <div className='border mx-auto h-auto rounded-lg w-1/2 p-5'>
            {children}
        </div>
    )
})

const Button = React.memo(({ children, ...props }) => {

    React.useEffect(() => {
        console.log("Button rendered")
    })

    return (
        <button onClick={props.onClick} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full active:scale-95'>
            {children}
        </button>
    )
})

export {
    Container,
    Wrapper,
    Button
}