const Page = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen">
      <div className="relative rounded-full bg-blue-800/30 size-16 animate-bounce">
        <div className="absolute rounded-full bg-blue-800/50 size-12 animate-bounce"></div>
        <div className="absolute rounded-full bg-blue-800/80 size-8 animate-bounce"></div>
      </div>
    </div>
  );
};

export default Page;
