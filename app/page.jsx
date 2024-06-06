import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">External host</h1>

                <Link
                    href="https://universal-links-same-host.netlify.app/compliance?property=123456"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                    Link that goes to the app
                </Link>
            </section>
        </main>
    );
}
