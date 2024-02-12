import React from 'react'

export default function Social() {
    return (
        <section className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">300+</dt>
                        <dd className="font-light text-gray-800 dark:text-gray-400">Business&apos;s Helped</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
                        <dd className="font-light text-gray-800 dark:text-gray-400">contributors</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
                        <dd className="font-light text-gray-800 dark:text-gray-400">organizations</dd>
                    </div>
                </dl>
            </div>
        </section>
    )
}
