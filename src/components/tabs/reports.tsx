import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ReportsTab() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-medium text-gray-700">Reports</h3>
        <div className="flex items-center space-x-2">
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select report type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily Report</SelectItem>
              <SelectItem value="weekly">Weekly Report</SelectItem>
              <SelectItem value="monthly">Monthly Report</SelectItem>
              <SelectItem value="quarterly">Quarterly Report</SelectItem>
              <SelectItem value="annual">Annual Report</SelectItem>
            </SelectContent>
          </Select>
          <Button>Generate Report</Button>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance Report</CardTitle>
            <CardDescription>Key metrics for the current month</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Total Revenue</TableCell>
                  <TableCell>$125,430</TableCell>
                  <TableCell className="text-green-600">+15.2%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>New Customers</TableCell>
                  <TableCell>1,234</TableCell>
                  <TableCell className="text-green-600">+22.5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Average Order Value</TableCell>
                  <TableCell>$102</TableCell>
                  <TableCell className="text-red-600">-3.1%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Conversion Rate</TableCell>
                  <TableCell>3.2%</TableCell>
                  <TableCell className="text-green-600">+0.5%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>Best performing products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Units Sold</TableHead>
                  <TableHead>Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Product A</TableCell>
                  <TableCell>1,234</TableCell>
                  <TableCell>$61,700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Product B</TableCell>
                  <TableCell>956</TableCell>
                  <TableCell>$47,800</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Product C</TableCell>
                  <TableCell>823</TableCell>
                  <TableCell>$41,150</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Product D</TableCell>
                  <TableCell>654</TableCell>
                  <TableCell>$32,700</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}