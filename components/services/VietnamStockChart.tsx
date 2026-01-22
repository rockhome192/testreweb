'use client'

import React, { useEffect, useState } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

// Data structure specific to the user's request
interface FundData {
    perfVal: string
    perfID: string
    perfName: string
    transDate: string
}

interface ChartProps {
    data: FundData[]
    color: string
    title: string
    yLabel?: string
}

const SimpleLineChart = ({ data, color, title, yLabel }: ChartProps) => {
    if (data.length === 0) return null

    const height = 300
    const width = 800
    const padding = { top: 20, right: 30, bottom: 50, left: 50 }

    // Parse data for plotting
    const plotData = data.map(d => ({
        date: new Date(d.transDate),
        val: parseFloat(d.perfVal)
    }))

    const minVal = Math.min(...plotData.map(d => d.val))
    const maxVal = Math.max(...plotData.map(d => d.val))
    const range = maxVal - minVal

    // Scales
    const getX = (index: number) => padding.left + (index * (width - padding.left - padding.right) / (plotData.length - 1))
    const getY = (val: number) => height - padding.bottom - ((val - minVal) / (range || 1)) * (height - padding.top - padding.bottom)

    const points = plotData.map((d, i) => `${getX(i)},${getY(d.val)}`).join(' ')

    // Y Axis Ticks (5 ticks)
    const yTicks = [0, 1, 2, 3, 4].map(i => {
        const val = minVal + (range * i) / 4
        return {
            y: getY(val),
            val: val
        }
    })

    // X Axis Ticks (reduce density)
    const xTickCount = 12
    const xTicks = plotData.filter((_, i) => i % Math.floor(plotData.length / xTickCount) === 0).map((d, i) => ({
        x: getX(plotData.indexOf(d)),
        label: d.date.toISOString().split('T')[0]
    }))

    return (
        <div className="mb-8">
            <h4 className="text-center font-bold text-lg text-slate-800 mb-4 italic">
                {title} <span className="text-sm font-normal not-italic text-slate-500">{yLabel && `(${yLabel})`}</span>
            </h4>
            <div className="w-full relative" style={{ paddingBottom: '37.5%' }}> {/* Aspect Ratio 8:3 */}
                <div className="absolute inset-0">
                    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                        {/* Grid Lines (Horizontal) */}
                        {yTicks.map((tick, i) => (
                            <line
                                key={i}
                                x1={padding.left}
                                y1={tick.y}
                                x2={width - padding.right}
                                y2={tick.y}
                                stroke="#f1f5f9"
                                strokeWidth="1"
                            />
                        ))}

                        {/* Chart Line */}
                        <polyline
                            points={points}
                            fill="none"
                            stroke={color}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* Y Axis Labels */}
                        {yTicks.map((tick, i) => (
                            <text
                                key={i}
                                x={padding.left - 10}
                                y={tick.y + 4}
                                textAnchor="end"
                                className="text-[10px] fill-gray-400"
                            >
                                {tick.val.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            </text>
                        ))}

                        {/* X Axis Labels */}
                        {xTicks.map((tick, i) => (
                            <text
                                key={i}
                                x={tick.x}
                                y={height - 20}
                                textAnchor="middle"
                                transform={`rotate(-45, ${tick.x}, ${height - 20})`}
                                className="text-[10px] fill-gray-400"
                            >
                                {tick.label}
                            </text>
                        ))}

                        {/* Axis Titles */}
                        <text
                            x={15}
                            y={height / 2}
                            transform={`rotate(-90, 15, ${height / 2})`}
                            textAnchor="middle"
                            className="text-xs fill-gray-500 font-medium"
                        >
                            NAV
                        </text>

                    </svg>
                </div>
            </div>
            {/* Legend */}
            <div className="flex justify-center mt-2">
                <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 bg-white">
                    <div className="w-4 h-0.5" style={{ backgroundColor: color }}></div>
                    <span className="text-xs text-gray-600 font-medium">SSI-SCA</span>
                </div>
            </div>
        </div>
    )
}


export default function VietnamStockChart() {
    const [thbData, setThbData] = useState<FundData[]>([])
    const [vndData, setVndData] = useState<FundData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Mock Data Generation
        const generateData = (startVal: number, volatility: number, trend: number, count: number): FundData[] => {
            let currentVal = startVal
            const data: FundData[] = []
            const startDate = new Date('2019-06-18')

            for (let i = 0; i < count; i++) {
                const date = new Date(startDate)
                date.setDate(startDate.getDate() + (i * 7)) // Weekly data

                // Random walk
                const change = (Math.random() - 0.5) * volatility + trend
                currentVal = currentVal * (1 + change)

                data.push({
                    perfVal: currentVal.toFixed(2),
                    perfID: 'SSISCA',
                    perfName: 'SSI-SCA',
                    transDate: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} 00:00:00.0`
                })
            }
            return data
        }

        // Simulate API delay
        setTimeout(() => {
            setThbData(generateData(22, 0.02, 0.001, 300)) // THB Data
            setVndData(generateData(18000, 0.02, 0.0015, 300)) // VND Data
            setLoading(false)
        }, 500)
    }, [])

    if (loading) return <div className="p-8 text-center text-gray-500">Loading Market Data...</div>

    // Get latest values
    const latestTHB = thbData.length > 0 ? parseFloat(thbData[thbData.length - 1].perfVal) : 0
    const prevTHB = thbData.length > 1 ? parseFloat(thbData[thbData.length - 2].perfVal) : 0
    const changeTHB = latestTHB - prevTHB
    const percentChangeTHB = (changeTHB / prevTHB) * 100

    const latestVND = vndData.length > 0 ? parseFloat(vndData[vndData.length - 1].perfVal) : 0
    const prevVND = vndData.length > 1 ? parseFloat(vndData[vndData.length - 2].perfVal) : 0
    const changeVND = latestVND - prevVND
    const percentChangeVND = (changeVND / prevVND) * 100

    // Mock Conversion Rate derived from the data
    const conversionRate = latestVND / latestTHB

    const lastUpdate = thbData.length > 0 ? thbData[thbData.length - 1].transDate.split(' ')[0] : ''
    const formattedDate = new Date(lastUpdate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })


    return (
        <div className="bg-white  mb-10 font-sans">
            {/* Header */}
            <div className="bg-[#A4252C] text-white py-3 px-6 uppercase font-bold text-lg text-center md:text-left shadow-sm mb-6">
                SSI SUSTAINABLE COMPETITIVE ADVANTAGE FUND
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-8 relative">
                {/* Vertical Divider (Desktop only) */}
                <div className="hidden md:block absolute right-1/3 top-0 bottom-0 w-px bg-gray-300"></div>
                <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gray-300"></div>

                {/* THB Column */}
                <div className="text-center md:text-left pl-4">
                    <div className="flex items-baseline gap-1 justify-center md:justify-start">
                        <span className="text-lg font-bold text-slate-800">NAV</span>
                        <span className="text-3xl font-bold text-black">THB</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 justify-center md:justify-start">
                        <ArrowUp className="w-5 h-5 text-green-600 fill-current" />
                        <span className="text-3xl font-bold text-slate-700">{latestTHB.toFixed(4)}</span>
                    </div>
                    <div className="text-green-600 font-bold text-lg mt-1 justify-center md:justify-start flex">
                        +{changeTHB.toFixed(4)} ({percentChangeTHB.toFixed(2)}%)
                    </div>
                    <p className="text-xs text-slate-500 mt-2">มูลค่าหน่วยลงทุนแปลงจากเงินเวียดนาม</p>
                </div>

                {/* VND Column */}
                <div className="text-center md:text-left pl-4">
                    <div className="flex items-baseline gap-1 justify-center md:justify-start">
                        <span className="text-lg font-bold text-slate-800">NAV</span>
                        <span className="text-3xl font-bold text-black">VND</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 justify-center md:justify-start">
                        <ArrowUp className="w-5 h-5 text-green-600 fill-current" />
                        <span className="text-3xl font-bold text-slate-700">{latestVND.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="text-green-600 font-bold text-lg mt-1 flex justify-center md:justify-start">
                        +{changeVND.toFixed(2)} ({percentChangeVND.toFixed(2)}%)
                    </div>
                    <p className="text-xs text-slate-400 mt-2 uppercase">UPDATED: {formattedDate}</p>
                </div>

                {/* Conversion Column */}
                <div className="text-center md:text-right pr-4">
                    <p className="text-slate-900 font-bold text-lg">Conversion Rate</p>
                    <p className="text-slate-900 font-medium text-sm">(approx.)</p>
                    <div className="text-3xl font-bold text-slate-800 mt-2">
                        {conversionRate.toFixed(2)} <span className="text-lg font-normal">VND/THB</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 uppercase">UPDATED: {formattedDate}</p>
                </div>
            </div>

            <div className="border-b border-dashed border-gray-300 my-8"></div>

            {/* CTA Section */}


            {/* Charts Grid */}
            <div className="grid grid-cols-1 gap-12">
                {/* THB Chart */}
                <SimpleLineChart
                    data={thbData}
                    color="#b91c1c"  // Red
                    title="SSI-SCA NAV"
                    yLabel="THB"
                />

                {/* VND Chart */}
                <SimpleLineChart
                    data={vndData}
                    color="#c2410c" // Orange/Brown 
                    title="SSI-SCA NAV"
                    yLabel="VND"
                />
            </div>

        </div>
    )
}
