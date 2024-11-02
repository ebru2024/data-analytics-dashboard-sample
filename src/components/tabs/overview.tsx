import ActivationChart from "@/components/charts/activation"
import DailyActiveChart from "@/components/charts/daliy-active-users"
import TopDevicesChart from "@/components/charts/top-devices"
import UserByCountry from "@/components/charts/user-by-country"
import UserByLanguage from "@/components/charts/user-by-language"

const OverviewTab = () => {
    return (
        <div className="flex flex-1 flex-col">
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">Overview</p>
                    <p className="text-[#60778a] text-sm font-normal leading-normal">Last 30 days</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
                <div className="flex min-w-[100px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dbe1e6]">
                    <p className="text-[#111518] text-base font-medium leading-normal">Active Users</p>
                    <p className="text-[#111518] tracking-light text-2xl font-bold leading-tight">1,028</p>
                    <p className="text-[#078838] text-base font-medium leading-normal">+12%</p>
                </div>
                <div className="flex min-w-[100px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dbe1e6]">
                    <p className="text-[#111518] text-base font-medium leading-normal">New Users</p>
                    <p className="text-[#111518] tracking-light text-2xl font-bold leading-tight">46</p>
                    <p className="text-[#078838] text-base font-medium leading-normal">+8%</p>
                </div>
                <div className="flex min-w-[100px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dbe1e6]">
                    <p className="text-[#111518] text-base font-medium leading-normal">Events-Minute</p>
                    <p className="text-[#111518] tracking-light text-2xl font-bold leading-tight">2,380</p>
                    <p className="text-[#078838] text-base font-medium leading-normal">+4%</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4 ">

                <div className="flex flex-1 flex-col min-w-[300px]">
                    <DailyActiveChart />
                </div>
                <div className="flex flex-1 flex-col min-w-[300px]">
                    <ActivationChart />
                </div>
                <div className="flex flex-1 flex-col min-w-[300px]">
                    <TopDevicesChart />
                </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4 font-semibold text-2xl">User demographics</div>
            <div className="flex flex-wrap gap-4 p-4">
                <div className="flex flex-1 flex-col min-w-[300px]">
                    <UserByCountry />
                </div>
                <div className="flex flex-1 flex-col min-w-[300px]">
                    <UserByLanguage />
                </div>
            </div>

        </div>
    )
}

export default OverviewTab