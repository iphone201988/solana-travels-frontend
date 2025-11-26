import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, Plane, XCircle } from 'lucide-react'; // Icons for visual clarity

// Data structure for the FAQ categories and their questions
const faqData = [
    {
        category: <span className='text-primary'>Cryptocurrency Payments</span> ,
        icon: <User className="w-5 h-5" />,
        questions: [
            {
                id: 'crypto-1',
                question: <span className="text-secondary font-semibold text-[16px]">How do I select the cryptocurrency payment option during the booking process?</span>,
                answer: (
                    <>
                        <p className="mb-2 text-darkGrey">Once you’ve selected your desired hotel, flight or activity, you’ll be prompted to enter the necessary personal information (e.g. guest details for hotel check-in or passport information for international flights). After this step, you’ll have 100+ payment options to choose from.</p>
                        <p className="font-medium mt-2 mb-1 text-darkGrey">Simply select the cryptocurrency you wish to use from:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 text-darkGrey">
                            <li>the dropdown list, or</li>
                            <li>choose to pay with crypto via our payment partners, such as Binance Pay.</li>
                        </ul>
                        <p className="mt-2 text-darkGrey">You’ll then be provided with a QR code and wallet address. Either scan the QR code with your wallet of choice or manually enter the wallet address and the associated cryptocurrency amount displayed in your wallet (NOTE: NOT the fiat value). Then, complete the transaction using your wallet.</p>
                    </>
                ),
            },
            {
                id: 'crypto-2',
                question: <span className="text-secondary font-semibold text-[16px]">Which cryptocurrencies are accepted as payment on Travala.com currently?</span>,
                answer: 'We accept over 100 cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), and many others. The full list is available during the checkout process.',
            },
            {
                id: 'crypto-3',
                question: <span className="text-secondary font-semibold text-[16px]">How many payment options does Travala.com currently accept?</span>,
                answer: 'Travala.com accepts over 100 different payment options, including major credit cards and over 100 cryptocurrencies.',
            },
            {
                id: 'crypto-4',
                question: <span className="text-secondary font-semibold text-[16px]">Are there any loyalty programs or rewards for using cryptocurrencies for bookings on Travala.com?</span>,
                answer: 'Yes, users who pay with AVA are eligible for the Smart Program which offers rewards and discounts. Check our official website for the latest loyalty program details.',
            },
            {
                id: 'crypto-5',
                question: <span className="text-secondary font-semibold text-[16px]">What customer support options are available if I encounter issues during my booking process?</span>,
                answer: 'Our customer support team is available 24/7 via live chat, email, and phone to assist you with any booking or payment issues.',
            },
        ],
    },
    {
        category: 'Hotel Bookings',
        icon: <Plane className="w-5 h-5" />,
        questions: [
            { id: 'hotel-1', question: <span className="text-secondary font-semibold text-[16px]">How can I search for hotels?</span>, answer: 'You can search for hotels by destination, check-in/check-out dates, and the number of guests on our homepage search bar.' },
            { id: 'hotel-2', question: <span className="text-secondary font-semibold text-[16px]">Can I modify my hotel reservation?</span>, answer: 'Modification policies vary by hotel and booking type. Please check your confirmation email or contact our support team.' },
        ],
    },
    {
        category: 'Hotel Cancellations & Refunds',
        icon: <XCircle className="w-5 h-5" />,
        questions: [
            { id: 'cancel-1', question: <span className="text-secondary font-semibold text-[16px]">What is the cancellation policy?</span>, answer: 'Cancellation policies are displayed clearly during the booking process and in your confirmation email. They vary based on the hotel and room rate selected.' },
        ],
    },
];

// Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, toggleAccordion }) => {
    return (
        <div className="border-b border-gray-200 py-4 my-[8px]">
            <button
                className="flex justify-between items-start w-full text-left font-semibold text-gray-800 focus:outline-none"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >
                <span className="pr-4">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="text-sm text-gray-600 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

// Main FAQ Section Component (renamed to App for React export)
const App = () => {
    // State for tracking the active category based on the sidebar click
    const [activeCategory, setActiveCategory] = useState(faqData[0].category);

    // State for managing which question/accordion is open in the active category
    const [openQuestionId, setOpenQuestionId] = useState(faqData[0].questions[0].id);

    // Find the currently active category object
    const activeCategoryData = faqData.find(cat => cat.category === activeCategory);

    // Handler to toggle an accordion item
    const toggleAccordion = (id) => {
        setOpenQuestionId(openQuestionId === id ? null : id);
    };

    return (
        <div className=" bg-[#F3F3F3] text-gray-900 p-[40px] sm:p-8 max-lg:!px-[20px]">
            <div className="max-w-[1400px] mx-auto ">

                {/* Header Section */}
                <header className="text-center mb-10">
                    <h1 className="text-[36px] font-semibold text-secondary mb-2 max-lg:text-[26px]">FAQs</h1>
                    <p className="text-darkGrey font-medium text-[16px]">
                        Where do you dream of going? Explore exceptional hotels across the world's finest destinations.
                    </p>
                </header>

                {/* Content Area: Responsive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    <aside className="lg:col-span-1">
                        <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-4 overflow-x-auto p-6 bg-white rounded-[24px] border border-strokeColor">
                            {faqData.map((item, index) => (
                                <React.Fragment key={item.category}>

                                    <button
                                        onClick={() => {
                                            setActiveCategory(item.category);
                                            setOpenQuestionId(item.questions[0].id);
                                        }}
                                        className={`
                                                text-sm font-medium whitespace-nowrap flex items-center space-x-2
                                                ${activeCategory === item.category
                                                ? "text-primary font-semibold"
                                                : "text-darkGrey font-medium"
                                            }`}>

                                        {item.category}
                                    </button>

                                    {/* Divider between tabs — but NOT after last */}
                                    {index !== faqData.length - 1 && (
                                        <div className="w-px h-5 bg-strokeColor lg:w-full lg:h-px"></div>
                                    )}

                                </React.Fragment>
                            ))}


                        </div>
                    </aside>

                    {/* FAQ Content (Col 2-4 on large screens) */}
                    <main className="lg:col-span-3 min-h-[400px]">
                        {activeCategoryData && (
                            <div className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-4 overflow-x-auto p-6 bg-white rounded-[24px] border border-strokeColor  max-lg:flex-col">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">
                                    {activeCategoryData.category}
                                </h2>

                                {/* Accordion List */}
                                <div>
                                    {activeCategoryData.questions.map((q) => (
                                        <AccordionItem
                                            key={q.id}
                                            question={q.question}
                                            answer={q.answer}
                                            isOpen={openQuestionId === q.id}
                                            toggleAccordion={() => toggleAccordion(q.id)}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </main>

                </div>
            </div>
        </div>
    );
};

export default App;