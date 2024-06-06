import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">External host</h1>

                <Link href="https://d9db0.app.link/xxjdIoia3Jb" className="btn btn-lg btn-primary sm:btn-wide">
                    Link that goes to the app (another host)
                </Link>
            </section>
        </main>
    );
}
