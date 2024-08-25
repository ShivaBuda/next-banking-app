export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode}>) {
    return (
        <main lang="en">
            Sidebar
            {children}
        </main>
    );
}
