import React from 'react';

function HistoryPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-[#F9FAFB] p-4 sm:p-6 lg:p-8 font-sans antialiased w-full max-w-[1400px] mx-auto box-border">
            
            <header className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold">History</h1>
                <p className="text-[#9CA3AF] text-xs md:text-sm mt-1">Your borrowing history</p>
            </header>

            {/* Top Stats Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 w-full">
                <div className="flex items-center gap-4 bg-[#0A0A0F] p-5 rounded-xl border border-[#374151]">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#042F1A] text-[#10B981] flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold leading-none">2</h2>
                        <p className="text-[#9CA3AF] text-xs mt-1">On Time Returns</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-[#0A0A0F] p-5 rounded-xl border border-[#374151]">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#78350F] text-[#F59E0B] flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold leading-none">2</h2>
                        <p className="text-[#9CA3AF] text-xs mt-1">Delayed Returns</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-[#0A0A0F] p-5 rounded-xl border border-[#374151]">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1E3A8A] text-[#3B82F6] flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold leading-none">4</h2>
                        <p className="text-[#9CA3AF] text-xs mt-1">Total Borrows</p>
                    </div>
                </div>
            </section>

            {/* History List */}
            <section className="flex flex-col gap-4 w-full">
                
                {/* Item 1: Raspberry Pi 4 */}
                <div className="bg-[#0A0A0F] border-t border-r border-b border-l-[4px] border-[#F4C430] rounded-xl p-5 w-full box-border flex flex-col gap-2">
                    
                    {/* Top Row Header */}
                    <div className="flex justify-between items-start w-full gap-4">
                        <div className="flex items-start gap-4 min-w-0">
                            <div className="w-16 h-16 bg-[#1F2937] rounded-xl flex-shrink-0 border border-gray-800"></div>
                            <div className="min-w-0 flex flex-col gap-1">
                                <h3 className="text-white text-base md:text-lg font-semibold truncate leading-snug">Raspberry Pi 4</h3>
                                <span className="inline-block self-start bg-[#FFD700] text-black text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">COMPONENT</span>
                            </div>
                        </div>
                        <span className="text-[11px] font-bold text-[#10B981] bg-[#064E3B] px-3 py-1.5 rounded text-center tracking-wider whitespace-nowrap">EXCELLENT</span>
                    </div>

                    {/* Bottom Metadata - Lessened Spacing Gap */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-6 md:pl-20 w-full pt-2">
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Borrow Date</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">4/15/2026</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Return Date</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">4/28/2026</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Delay</span>
                            <span className="text-[#10B981] text-[14px] font-semibold block mt-0.5 whitespace-nowrap">On Time</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Condition</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">Excellent</span>
                        </div>
                    </div>
                </div>

                {/* Item 2: Soldering Iron Kit */}
                <div className="bg-[#0A0A0F] border-t border-r border-b border-l-[4px] border-[#F4C430] rounded-xl p-5 w-full box-border flex flex-col gap-2">
                    <div className="flex justify-between items-start w-full gap-4">
                        <div className="flex items-start gap-4 min-w-0">
                            <div className="w-16 h-16 bg-[#1F2937] rounded-xl flex-shrink-0 border border-gray-800"></div>
                            <div className="min-w-0 flex flex-col gap-1">
                                <h3 className="text-white text-base md:text-lg font-semibold truncate leading-snug">Soldering Iron Kit</h3>
                                <span className="inline-block self-start bg-[#FFD700] text-black text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">TOOL</span>
                            </div>
                        </div>
                        <span className="text-[11px] font-bold text-[#10B981] bg-[#064E3B] px-3 py-1.5 rounded text-center tracking-wider whitespace-nowrap">GOOD</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-6 md:pl-20 w-full pt-2">
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Borrow Date</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">5/1/2026</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Return Date</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">5/12/2026</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Delay</span>
                            <span className="text-[#F59E0B] text-[14px] font-semibold block mt-0.5 whitespace-nowrap">5 days</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Condition</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">Good</span>
                        </div>
                    </div>
                </div>

                {/* Item 3: HC-SR04 Ultrasonic Sensor */}
                <div className="bg-[#0A0A0F] border-t border-r border-b border-l-[4px] border-[#F4C430] rounded-xl p-5 w-full box-border flex flex-col gap-2">
                    <div className="flex justify-between items-start w-full gap-4">
                        <div className="flex items-start gap-4 min-w-0">
                            <div className="w-16 h-16 bg-[#1F2937] rounded-xl flex-shrink-0 border border-gray-800"></div>
                            <div className="min-w-0 flex flex-col gap-1">
                                <h3 className="text-white text-base md:text-lg font-semibold truncate leading-snug">HC-SR04 Ultrasonic Sensor</h3>
                                <span className="inline-block self-start bg-[#FFD700] text-black text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">COMPONENT</span>
                            </div>
                        </div>
                        <span className="text-[11px] font-bold text-[#10B981] bg-[#064E3B] px-3 py-1.5 rounded text-center tracking-wider whitespace-nowrap">GOOD</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-6 md:pl-20 w-full pt-2">
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Borrow Date</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">5/1/2026</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Return Date</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">5/12/2026</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Delay</span>
                            <span className="text-[#10B981] text-[14px] font-semibold block mt-0.5 whitespace-nowrap">On Time</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Condition</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">Good</span>
                        </div>
                    </div>
                </div>

                {/* Item 4: Wire Stripper */}
                <div className="bg-[#0A0A0F] border-t border-r border-b border-l-[4px] border-[#F4C430] rounded-xl p-5 w-full box-border flex flex-col gap-2">
                    <div className="flex justify-between items-start w-full gap-4">
                        <div className="flex items-start gap-4 min-w-0">
                            <div className="w-16 h-16 bg-[#1F2937] rounded-xl flex-shrink-0 border border-gray-800"></div>
                            <div className="min-w-0 flex flex-col gap-1">
                                <h3 className="text-white text-base md:text-lg font-semibold truncate leading-snug">Wire Stripper</h3>
                                <span className="inline-block self-start bg-[#FFD700] text-black text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">TOOL</span>
                            </div>
                        </div>
                        <span className="text-[11px] font-bold text-[#F59E0B] bg-[#78350F] px-3 py-1.5 rounded text-center tracking-wider whitespace-nowrap">FAIR</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-6 md:pl-20 w-full pt-2">
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Borrow Date</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">5/1/2026</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Return Date</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">5/12/2026</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Delay</span>
                            <span className="text-[#F59E0B] text-[14px] font-semibold block mt-0.5 whitespace-nowrap">3 days</span>
                        </div>
                        <div className="min-w-0">
                            <span className="text-[#6B7280] text-[11px] block uppercase font-medium tracking-wider">Condition</span>
                            <span className="text-white text-[14px] block mt-0.5 whitespace-nowrap">Good</span>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default HistoryPage;