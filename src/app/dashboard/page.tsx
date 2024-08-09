"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
// import { supabase } from "@/utils/something/supabase/supabaseClient";
import { Group, Inbox, Newspaper, Shirt, Users } from "lucide-react";
import React, { useState } from "react";

export default function Page() {
  const [categoryCount, setcategoryCount] = useState<number | null>(0);
  const [brandCount, setBrandCount] = useState<number | null>(0);
  const [frameCount, setFrameCount] = useState<number | null>(0);
  const [lenseCount, setLenseCount] = useState<number | null>(0);
  const [productCount, setProductCount] = useState<number | null>(0);

  React.useEffect(() => {
    const fetch = async () => {
      let { count: category_count } = await supabase.from("Contact").select("*", { count: "exact", head: true });
      let { count: brand_count } = await supabase.from("Blogs").select("*", { count: "exact", head: true });
      let { count: frame_count } = await supabase.from("Team").select("*", { count: "exact", head: true });
      let { count: lense_count } = await supabase.from("Testimonial").select("*", { count: "exact", head: true });
      // let { count: product_count } = await supabase.from("Product").select("*", { count: "exact", head: true });

      setcategoryCount(category_count);
      setBrandCount(brand_count);
      setFrameCount(frame_count);
      setLenseCount(lense_count);
      // setProductCount(product_count);
    };
    fetch();
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Blogs"
        description="Total number of blogs."
        value={brandCount}
        icon={<Newspaper />}
      />

      <StatCard
        title=" Total Team"
        description="Total number of team."
        value={frameCount}
        icon={<Group />}
      />

      <StatCard
        title=" Total Testimonial"
        description="Total number of testimonial."
        value={lenseCount}
        icon={<Users />}
      />
      <StatCard
        title=" Total Contact"
        description="Total number of contact."
        value={categoryCount}
        icon={<Inbox />}
      />
    </div>
  );
}

function StatCard({ title, value, icon, description }: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium uppercase">{title}</CardTitle>

        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
