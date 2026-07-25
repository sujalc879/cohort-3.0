export function Sidebar() {
    return <div className="h-screen flex">
        <div className="bg-red-200 w-56 hidden sm:block transition-all duration-300">
            Sidebar
        </div>

        <div className="bg-green-200 w-full">
            Content
        </div>
    </div>
}