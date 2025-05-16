// src/pages/Dashboard/Dashboard.jsx
import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Overview from "../../components/DashboardComponents/Overview.jsx";
import Assessment from "../../components/DashboardComponents/Assessment";
import Sales from "../../components/DashboardComponents/reports/Sales";
import Insights from "../../components/DashboardComponents/reports/Traffic";
import Traffic from "../../components/DashboardComponents/reports/Insights";
import dashboardnavigation from "../../data/dashboardnavigation";
import Tracker from "../../components/DashboardComponents/Tracker";
import demoTheme from "../../theme.jsx";

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

export default function WebsiteAnalysis(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const demoWindow = window ? window() : undefined;


  console.log("Current route:", router.pathname);
  console.log("Theme breakpoints:", demoTheme.breakpoints?.values);
  console.log("Viewport width:", window?.innerWidth || "unknown");


  let ContentComponent;
  switch (router.pathname) {
    case "/dashboard":
      ContentComponent = Overview;
      break;
    case "/overview":
      ContentComponent = Overview;
      break;
    case "/roadmap":
      ContentComponent = () => <div>Roadmap</div>;
      break;
    case "/tracker":
      ContentComponent = Tracker;
      break;
    case "/assessment":
      ContentComponent = Assessment;
      break;
    case "/reports/sales":
      ContentComponent = Sales;
      break;
    case "/reports/traffic":
      ContentComponent = Traffic;
      break;
    case "/reports/insights":
      ContentComponent = Insights;
      break;
    default:
      ContentComponent = () => <div>Page Not Found</div>;
  }

  return (
    <AppProvider
      navigation={dashboardnavigation}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: <></>,
        title: "Dashboard",
        homeUrl: "/dashboard",
      }}
    >
      <DashboardLayout
        sx={{
          width: "100%",
          maxWidth: "100%",
          minHeight: "100vh", 
          display: "flex",
          flexWrap: "wrap",
          boxSizing: "border-box",

        }}
      >
        <PageContainer>
          <ContentComponent />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

