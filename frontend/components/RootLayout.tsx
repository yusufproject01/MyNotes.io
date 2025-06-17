// RootLayout.tsx
import Navbar from "./layout/Navbar";

export default function RootLayoutNavbar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}