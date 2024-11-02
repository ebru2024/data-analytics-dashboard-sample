import ActivationChart from "@/components/charts/activation"
import DailyActiveChart from "@/components/charts/daliy-active"
import UserRetentionChart from "@/components/charts/user-retention"

const OverviewTab = () => {
    return (
        <div className="flex flex-1 flex-col">
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">Overview</p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal">Last 30 days</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4 ">
                <div className="flex flex-1 flex-col min-w-[300px]">
                    <ActivationChart />
                </div>
                <div className="flex flex-1 flex-col min-w-[300px]">
                    <DailyActiveChart />
                </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
                <div className="flex flex-1 flex-col min-w-[300px]">
                    <DailyActiveChart />
                </div>
                <div className="flex flex-1 flex-col min-w-[300px]">
                    <DailyActiveChart />
                </div>
            </div>
            <div className="gap-4 p-6">
                <UserRetentionChart />
            </div>
        </div>
    )
}

export default OverviewTab