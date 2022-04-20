import React from 'react'

const MainWrapper = ({ children }) => {
    return (
        <main className="antialiased">
            <div className="max-w-5xl mx-auto px-4 lg:px-0">
                {children}
            </div>
        </main>
    )
}

export default MainWrapper