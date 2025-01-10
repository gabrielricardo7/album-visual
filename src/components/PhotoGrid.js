import dynamic from "next/dynamic";

const PhotoGrid = dynamic(() => import("./PhotoGridComponent"), { ssr: false });

export default PhotoGrid;
