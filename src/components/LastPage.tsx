import CuteHeart from "./CuteHeart";

const LastPage = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <h2 className="text-3xl font-bold text-primary">With All My Love</h2>
      <p className="text-lg max-w-2xl">
        I’m forever grateful to have you by my side. With love - gagan
      </p>
      <p style={{color: 'red', fontWeight: 'bold'}}>If you see this, the app loaded successfully!</p>
      <CuteHeart />
    </div>
  );
};

export default LastPage;
