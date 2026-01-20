'use client'

import React, { useEffect, useState } from 'react'

// Mock data types - ปรับตาม API จริง
type StockData = {
    date: string
    price: number
}

export default function VietnamStockChart() {
    const [data, setData] = useState<StockData[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        // ตัวอย่างการดึงข้อมูลจาก API
        const fetchData = async () => {
            try {
                // จำลองข้อมูล (Mock Data)
                const mockData = [
                    { date: 'Jan', price: 1200 },
                    { date: 'Feb', price: 1250 },
                    { date: 'Mar', price: 1220 },
                    { date: 'Apr', price: 1300 },
                    { date: 'May', price: 1280 },
                    { date: 'Jun', price: 1350 },
                    { date: 'Jul', price: 1400 },
                ]

                // Simulate delay
                await new Promise(resolve => setTimeout(resolve, 500));

                setData(mockData)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching stock data:', error)
                setError('Failed to load data')
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return (
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl mb-8 border-2 border-yellow-400 text-yellow-700 font-bold">
            LOADING MOCK DATA...
        </div>
    )

    if (error) return <div>Error: {error}</div>

    // Calculate dimensions for simple SVG chart
    const width = 800;
    const height = 300;
    const padding = 40;

    const maxPrice = Math.max(...data.map(d => d.price));
    const minPrice = Math.min(...data.map(d => d.price));
    const priceRange = maxPrice - minPrice;

    const getX = (index: number) => padding + (index * (width - 2 * padding) / (data.length - 1));
    const getY = (price: number) => height - padding - ((price - minPrice) / (priceRange || 1)) * (height - 2 * padding);

    const points = data.map((d, i) => `${getX(i)},${getY(d.price)}`).join(' ');

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-red-500 rounded-sm"></span>
                ดัชนีตลาดหุ้นเวียดนาม (VN-Index)
            </h3>

            {/* Custom SVG Chart */}
            <div className="w-full bg-slate-50 border border-slate-200" style={{ minHeight: '300px' }}>
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto block" style={{ minHeight: '300px', width: '100%' }}>
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map(i => {
                        const y = padding + (i * (height - 2 * padding) / 4);
                        return <line key={i} x1={padding} y1={y} x2={width - padding} y2={y} stroke="#e5e7eb" strokeWidth="1" />
                    })}

                    {/* Line Path */}
                    <polyline
                        points={points}
                        fill="none"
                        stroke="#EF4444"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Dots */}
                    {data.map((d, i) => (
                        <circle
                            key={i}
                            cx={getX(i)}
                            cy={getY(d.price)}
                            r="6"
                            fill="#EF4444"
                            stroke="white"
                            strokeWidth="2"
                        />
                    ))}

                    {/* X Axis Labels */}
                    {data.map((d, i) => (
                        <text
                            key={i}
                            x={getX(i)}
                            y={height - 15}
                            textAnchor="middle"
                            fill="#374151"
                            fontSize="14"
                            fontWeight="500"
                        >
                            {d.date}
                        </text>
                    ))}

                    {/* Y Axis Labels */}
                    {[0, 1, 2, 3, 4].map(i => {
                        const value = Math.round(maxPrice - (i * priceRange / 4));
                        const y = padding + (i * (height - 2 * padding) / 4);
                        return (
                            <text
                                key={i}
                                x={padding - 10}
                                y={y + 5}
                                textAnchor="end"
                                fill="#374151"
                                fontSize="12"
                            >
                                {value}
                            </text>
                        )
                    })}
                </svg>
            </div>

            <div className="text-right text-sm text-gray-500 mt-2">
                *ข้อมูล Delayed 15 นาที
            </div>
        </div>
    )
}
