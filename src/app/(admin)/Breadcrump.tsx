"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function BreadcrumbComponent() {
  const pathName = usePathname();

  // 将路径名称拆分成数组
  const pathSegments = pathName.split("/").filter((segment) => segment !== "");

  // 生成动态的面包屑项
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return (
      <Fragment key={index}>
        <BreadcrumbItem>
          <BreadcrumbLink href={path}>{segment}</BreadcrumbLink>
        </BreadcrumbItem>
      </Fragment>
    );
  });

  //   // 添加首页链接
  //   breadcrumbs.unshift(
  //     <Fragment key="home">
  //       <BreadcrumbItem>
  //         <BreadcrumbLink href="/">Home</BreadcrumbLink>
  //       </BreadcrumbItem>
  //       <BreadcrumbSeparator />
  //     </Fragment>
  //   );

  return (
    <Breadcrumb>
      <BreadcrumbList>{breadcrumbs}</BreadcrumbList>
    </Breadcrumb>
  );
}
