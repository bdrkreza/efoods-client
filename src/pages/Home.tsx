import AboutSection from "../components/aboutSection/AboutSection";
import ArticleB from "../components/article/Article";
import ElementorSectoin from "../components/ElementorSection/ElementorSectoin";
import HeroSection from "../components/HeroSection/HeroSection";
import MenuItems from "../components/menuItems/MenuItems";
import VideoSection from "../components/videoSection/VideoSection";

export default function Home() {
  // const { data, isLoading } = useHooks(foodsService.FoodItem);
  // const dispatch = useDispatch<AppState>();
  // // @ts-ignore
  // useEffect(() => dispatch(GetFoodItem()), [dispatch]);
  return (
    <div className="body">
      <HeroSection />
      <ElementorSectoin />
      <AboutSection />
      <MenuItems />
      <VideoSection />
      <ArticleB />
    </div>
  );
}
