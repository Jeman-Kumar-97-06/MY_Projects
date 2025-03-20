//a custom layout, only for product routes 
export default function ProductLayout({
    children
}:{children: React.ReactNode}) {
    return (
        <>
        <h1>Product Page </h1>
        <div>{children}</div>
        </>
    ) 
}