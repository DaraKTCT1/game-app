import useData from "./useData"
interface PlatformType{
    id: number;
    name: string;
    slug: string;
    
}
const usePlatform = () => useData<PlatformType>("/platforms/lists/parents")

export default usePlatform