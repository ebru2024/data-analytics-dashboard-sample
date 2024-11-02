"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart"

const chartData = [
    { month: "1", desktop: 186 },
    { month: "2", desktop: 305 },
    { month: "3", desktop: 237 },
    { month: "4", desktop: 73 },
    { month: "5", desktop: 209 },
    { month: "6", desktop: 214 },
    { month: "7", desktop: 214 },
    { month: "8", desktop: 186 },
    { month: "9", desktop: 305 },
    { month: "10", desktop: 237 },
    { month: "11", desktop: 73 },
    { month: "12", desktop: 209 },
    { month: "13", desktop: 214 },
    { month: "14", desktop: 214 },
    { month: "15", desktop: 186 },
    { month: "16", desktop: 237 },
    { month: "17", desktop: 209 },
    { month: "18", desktop: 214 },
    { month: "19", desktop: 305 },
    { month: "20", desktop: 186 },
    { month: "21", desktop: 73 },
    { month: "22", desktop: 214 },
    { month: "23", desktop: 305 },
    { month: "24", desktop: 237 },
    { month: "25", desktop: 73 },
    { month: "26", desktop: 209 },
    { month: "27", desktop: 214 },
    { month: "28", desktop: 134 },
    { month: "29", desktop: 124 },
    { month: "30", desktop: 244 },
]

const chartConfig = {
    desktop: {
        label: "User",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function Component() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Daily Active Users</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="desktop"
                            type="natural"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 30 days
                </div>
            </CardFooter>
        </Card>
    )
}
