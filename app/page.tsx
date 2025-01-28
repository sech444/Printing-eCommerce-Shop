// import { CategoryMenu, Hero, Incentives, IntroducingSection, Newsletter, ProductsSection } from "@/components";


// export default function Home() {
//   return (
//     <>
//     <Hero />
//     <IntroducingSection />
//     <CategoryMenu />
//     <ProductsSection />
//     </>
//   );
// }

import { CategoryMenu, Hero, Incentives, IntroducingSection, Newsletter, ProductsSection} from "@/components";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroducingSection />
      <CategoryMenu />
      <ProductsSection />
      <BackToTop />
    </>
  );
}