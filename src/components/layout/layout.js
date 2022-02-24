import PageHeader from "./page-header"

const Layout = ({ children }) => {
    return (
        <>
            <PageHeader />
            <div className="m-5 w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-1">
                {children}
            </div>
        </>
    )
}

export default Layout