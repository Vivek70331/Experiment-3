import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardComponent title="React Router" description="Navigate easily between pages!" />
        <CardComponent title="Consistent Design" description="Styled components shared across pages." />
      </div>
    </>
  );
};

export default Home;
