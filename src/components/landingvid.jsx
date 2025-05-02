function Landingvid() {
  return (
    <>
      <div className="container max-w-full min-h-100">
        <div className="flex">
          <div className="max-w-full flex-initial pointer-events-none select-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/videos/MajestyVid3.mp4"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Landingvid;
