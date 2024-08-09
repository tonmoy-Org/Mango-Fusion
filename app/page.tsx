import Banner from "./components/Banner/Banner";
import FastDeliverySection from "./components/FastDeliverySection/FastDeliverySection";
import ProductsPage from "./components/ProductPage/ProductPage";
import WhyOurProductIsBest from "./components/WhyOurProductIsBest/WhyOurProductIsBest";

export default function Home() {
  return (
    <main>
      <Banner />
      <ProductsPage />
      <WhyOurProductIsBest />
      <FastDeliverySection />
    </main>
  );
}
