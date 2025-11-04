import React from 'react'

const Banner3 = () => {
    return (
        <>
            <div class="w-full h-auto">
                <div class="grid md:grid-cols-2 gap-x-8 gap-y-12 min-h-72 px-3 md:px-6 py-12 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-800 rounded-lg overflow-hidden">
                    <div class="md:max-w-md flex flex-col justify-center">
                        <h1 class="text-2xl font-semibold text-white">Elevate Your Experience with Modern Ecommerce</h1>
                        <p class="text-base text-gray-200 leading-relaxed mt-4">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt.</p>
                        <button type="button" class="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg text-sm cursor-pointer w-max mt-6">
                            Get started
                        </button>
                    </div>
                    <div class="relative h-full">
                        <div>
                            <img src="https://readymadeui.com/images/payment-img.webp" alt="Banner Image"
                                class="w-full aspect-[6/4] md:right-0 md:top-0 max-lg:bottom-0 m-auto md:absolute object-contain object-center rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner3