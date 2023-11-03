'use client'

import {Card, CardBody, CardFooter} from "@nextui-org/card";

export default function MoodPage() {
    return (
        <div className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
            <div className='flex flex-col items-center justify-center pt-10'>
                <h1 className='text-6xl font-bold'>Humeur</h1>
                <h4 className='text-2xl pt-10 font-bold'>Alors, comment vous sentez-vous aujourd&apos;hui?</h4>
            </div>
            <section className='py-36'>
                <div className='container flex items-center justify-center'>
                    <Card className='py-4 lg:w-3/4 xl:w-1/2'>
                        <CardBody className='overflow-visible py-2'>
                            <div className='flex gap-6'>
                                <ul className="grid w-full gap-6 md:grid-cols-3">
                                    <li>
                                        <input type="radio" id="happy" name="mood" value="happy"
                                               className="hidden peer" required/>
                                        <label htmlFor="happy"
                                               className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Heureux</div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
                                            </svg>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="neutral" name="mood" value="neutral"
                                               className="hidden peer"/>
                                        <label htmlFor="neutral"
                                               className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Neutre</div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 37" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path d="M10.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM22 12.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-6 19.11C7.53 31.36.64 24.47.64 16S7.53.64 16 .64 31.36 7.53 31.36 16 24.47 31.36 16 31.36zm0-30C7.927 1.36 1.36 7.927 1.36 16c0 8.072 6.567 14.64 14.64 14.64 8.072 0 14.64-6.567 14.64-14.64S24.072 1.36 16 1.36zm6 20H10v-.72h12v.72z" />
                                            </svg>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="sad" name="mood" value="sad"
                                               className="hidden peer"/>
                                        <label htmlFor="sad"
                                               className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Triste</div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
                                            </svg>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </CardBody>
                        <CardFooter className='flex justify-center'>
                            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                Envoyer
                            </button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </div>
    )
}