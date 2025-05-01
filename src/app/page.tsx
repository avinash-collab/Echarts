'use client';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import LineBarChartNoRef from './components/LineBarChart';
import NegativeBarChart from './components/BarChartWithNegative';
import PieCharWithScrollableLegend from './components/PieChartWithScrollableLegend';
import TickAlignedBarChart from './components/TickAligmentChart';
import DoughnutChart from './components/DoughnutChart';
import GlobalThemeToggle from './components/GlobalThemeToggle';


export default function Home() {
  return (
    <main className="p-6">
      <div className="flex justify-end mb-4">
        <GlobalThemeToggle />
      </div>
      <Tabs defaultValue="linebar" className="w-full">
        <TabsList className=" flex flex-wrap gap-2 mb-4">
          <TabsTrigger value="linebar">Line & Bar</TabsTrigger>
          <TabsTrigger value="negativebar">Negative Bar</TabsTrigger>
          <TabsTrigger value="pie">Pie Chart scrollable</TabsTrigger>
          <TabsTrigger value="tickalign">Axis Align with Tick</TabsTrigger>
          <TabsTrigger value="doughnut">Doughnut Chart</TabsTrigger>
        </TabsList>

        <TabsContent value="linebar">
          <LineBarChartNoRef />
        </TabsContent>

        <TabsContent value="negativebar">
          <NegativeBarChart />
        </TabsContent>
        <TabsContent value="pie">
          <PieCharWithScrollableLegend />
        </TabsContent>
        <TabsContent value="tickalign">
          <TickAlignedBarChart />
        </TabsContent>
        <TabsContent value="doughnut">
          <DoughnutChart />
        </TabsContent>
      </Tabs>
    </main>
  );
}
