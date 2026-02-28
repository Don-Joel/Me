import dynamic from "next/dynamic";

const DynamicAppBanner = dynamic(() => import("./AppBanner"));
export default DynamicAppBanner;
